import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

type Variant = 'A' | 'B';

interface ExperimentData {
  id: string;
  name: string;
  variant_a_name: string;
  variant_b_name: string;
}

// Generate or retrieve a session ID for tracking
const getSessionId = (): string => {
  const key = 'ab_session_id';
  let sessionId = localStorage.getItem(key);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem(key, sessionId);
  }
  return sessionId;
};

// Get stored variant for an experiment
const getStoredVariant = (experimentName: string): Variant | null => {
  const stored = localStorage.getItem(`ab_variant_${experimentName}`);
  return stored === 'A' || stored === 'B' ? stored : null;
};

// Store variant for an experiment
const storeVariant = (experimentName: string, variant: Variant): void => {
  localStorage.setItem(`ab_variant_${experimentName}`, variant);
};

// Randomly assign a variant (50/50 split)
const assignVariant = (): Variant => {
  return Math.random() < 0.5 ? 'A' : 'B';
};

export function useABTest(experimentName: string) {
  const [variant, setVariant] = useState<Variant | null>(null);
  const [experiment, setExperiment] = useState<ExperimentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initExperiment = async () => {
      try {
        // Fetch experiment from database
        const { data, error } = await supabase
          .from('ab_experiments')
          .select('*')
          .eq('name', experimentName)
          .eq('is_active', true)
          .maybeSingle();

        if (error || !data) {
          console.warn(`A/B experiment "${experimentName}" not found or inactive`);
          setIsLoading(false);
          return;
        }

        setExperiment(data);

        // Check if user already has a variant assigned
        let currentVariant = getStoredVariant(experimentName);
        
        if (!currentVariant) {
          // Assign new variant
          currentVariant = assignVariant();
          storeVariant(experimentName, currentVariant);
        }

        setVariant(currentVariant);

        // Track impression
        const sessionId = getSessionId();
        await supabase.from('ab_impressions').insert({
          experiment_id: data.id,
          variant: currentVariant,
          session_id: sessionId,
        });
      } catch (err) {
        console.error('Error initializing A/B test:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initExperiment();
  }, [experimentName]);

  const trackConversion = useCallback(async (conversionType: string = 'click') => {
    if (!experiment || !variant) return;

    try {
      const sessionId = getSessionId();
      await supabase.from('ab_conversions').insert({
        experiment_id: experiment.id,
        variant,
        session_id: sessionId,
        conversion_type: conversionType,
      });
    } catch (err) {
      console.error('Error tracking conversion:', err);
    }
  }, [experiment, variant]);

  // Get the display text based on variant
  const getVariantValue = useCallback((): string => {
    if (!experiment || !variant) return '';
    return variant === 'A' ? experiment.variant_a_name : experiment.variant_b_name;
  }, [experiment, variant]);

  return {
    variant,
    isLoading,
    experiment,
    trackConversion,
    getVariantValue,
    isVariantA: variant === 'A',
    isVariantB: variant === 'B',
  };
}
