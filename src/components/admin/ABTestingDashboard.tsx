import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart3, Users, MousePointerClick, TrendingUp } from "lucide-react";

interface ExperimentStats {
  id: string;
  name: string;
  variant_a_name: string;
  variant_b_name: string;
  is_active: boolean;
  impressions_a: number;
  impressions_b: number;
  conversions_a: number;
  conversions_b: number;
  conversion_rate_a: number;
  conversion_rate_b: number;
}

export function ABTestingDashboard() {
  const [experiments, setExperiments] = useState<ExperimentStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchExperimentStats();
  }, []);

  const fetchExperimentStats = async () => {
    try {
      // Fetch all experiments
      const { data: experimentsData, error: expError } = await supabase
        .from('ab_experiments')
        .select('*')
        .order('created_at', { ascending: false });

      if (expError) throw expError;

      // Fetch impressions and conversions for each experiment
      const statsPromises = experimentsData?.map(async (exp) => {
        const [impressionsA, impressionsB, conversionsA, conversionsB] = await Promise.all([
          supabase.from('ab_impressions').select('id', { count: 'exact' }).eq('experiment_id', exp.id).eq('variant', 'A'),
          supabase.from('ab_impressions').select('id', { count: 'exact' }).eq('experiment_id', exp.id).eq('variant', 'B'),
          supabase.from('ab_conversions').select('id', { count: 'exact' }).eq('experiment_id', exp.id).eq('variant', 'A'),
          supabase.from('ab_conversions').select('id', { count: 'exact' }).eq('experiment_id', exp.id).eq('variant', 'B'),
        ]);

        const impA = impressionsA.count || 0;
        const impB = impressionsB.count || 0;
        const convA = conversionsA.count || 0;
        const convB = conversionsB.count || 0;

        return {
          ...exp,
          impressions_a: impA,
          impressions_b: impB,
          conversions_a: convA,
          conversions_b: convB,
          conversion_rate_a: impA > 0 ? (convA / impA) * 100 : 0,
          conversion_rate_b: impB > 0 ? (convB / impB) * 100 : 0,
        };
      }) || [];

      const stats = await Promise.all(statsPromises);
      setExperiments(stats);
    } catch (err) {
      console.error('Error fetching A/B test stats:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
      </div>
    );
  }

  if (experiments.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No A/B tests configured yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          A/B Testing Results
        </h2>
        <Badge variant="outline">{experiments.length} experiments</Badge>
      </div>

      <div className="grid gap-6">
        {experiments.map((exp) => {
          const winner = exp.conversion_rate_a > exp.conversion_rate_b ? 'A' : 
                        exp.conversion_rate_b > exp.conversion_rate_a ? 'B' : null;
          const totalImpressions = exp.impressions_a + exp.impressions_b;
          const totalConversions = exp.conversions_a + exp.conversions_b;

          return (
            <Card key={exp.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg capitalize">
                    {exp.name.replace(/_/g, ' ')}
                  </CardTitle>
                  <Badge variant={exp.is_active ? "default" : "secondary"}>
                    {exp.is_active ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Summary Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Users className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                    <p className="text-2xl font-bold">{totalImpressions}</p>
                    <p className="text-xs text-muted-foreground">Impressions</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <MousePointerClick className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                    <p className="text-2xl font-bold">{totalConversions}</p>
                    <p className="text-xs text-muted-foreground">Conversions</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <TrendingUp className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                    <p className="text-2xl font-bold">
                      {totalImpressions > 0 ? ((totalConversions / totalImpressions) * 100).toFixed(1) : 0}%
                    </p>
                    <p className="text-xs text-muted-foreground">Avg. Rate</p>
                  </div>
                </div>

                {/* Variant Comparison */}
                <div className="space-y-4">
                  {/* Variant A */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium flex items-center gap-2">
                        Variant A: {exp.variant_a_name}
                        {winner === 'A' && (
                          <Badge variant="default" className="bg-green-500">Winner</Badge>
                        )}
                      </span>
                      <span className="text-muted-foreground">
                        {exp.conversions_a}/{exp.impressions_a} ({exp.conversion_rate_a.toFixed(1)}%)
                      </span>
                    </div>
                    <Progress value={exp.conversion_rate_a} className="h-2" />
                  </div>

                  {/* Variant B */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium flex items-center gap-2">
                        Variant B: {exp.variant_b_name}
                        {winner === 'B' && (
                          <Badge variant="default" className="bg-green-500">Winner</Badge>
                        )}
                      </span>
                      <span className="text-muted-foreground">
                        {exp.conversions_b}/{exp.impressions_b} ({exp.conversion_rate_b.toFixed(1)}%)
                      </span>
                    </div>
                    <Progress value={exp.conversion_rate_b} className="h-2" />
                  </div>
                </div>

                {/* Statistical note */}
                {totalImpressions < 100 && (
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    * Need at least 100 impressions for statistically significant results
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
