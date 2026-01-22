import bankingIcon from "@/assets/icons/industries/banking.jpg";
import healthcareIcon from "@/assets/icons/casestudies/healthcare.png";
import ecommerceIcon from "@/assets/icons/casestudies/ecommerce.png";
import automotiveIcon from "@/assets/icons/casestudies/automotive.png";
import financialIcon from "@/assets/icons/casestudies/financial.png";
import saasIcon from "@/assets/icons/casestudies/saas.png";

// Case study icons configuration
export const caseStudyIcons: Record<string, string> = {
  banking: bankingIcon,
  healthcare: healthcareIcon,
  ecommerce: ecommerceIcon,
  automotive: automotiveIcon,
  financial: financialIcon,
  saas: saasIcon,
};

interface CaseStudyIconProps {
  caseStudy: keyof typeof caseStudyIcons;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

export const CaseStudyIcon = ({ caseStudy, size = "md", className = "" }: CaseStudyIconProps) => {
  const iconSrc = caseStudyIcons[caseStudy];
  
  if (!iconSrc) {
    return null;
  }

  return (
    <img 
      src={iconSrc} 
      alt={`${caseStudy} icon`}
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
};

interface CaseStudyIconBoxProps {
  caseStudy: keyof typeof caseStudyIcons;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const boxSizeClasses = {
  sm: "w-14 h-14 p-2",
  md: "w-18 h-18 p-3",
  lg: "w-22 h-22 p-3",
  xl: "w-28 h-28 p-4",
};

const iconInBoxSizes = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

export const CaseStudyIconBox = ({ caseStudy, size = "md", className = "" }: CaseStudyIconBoxProps) => {
  const iconSrc = caseStudyIcons[caseStudy];
  
  if (!iconSrc) {
    return null;
  }

  return (
    <div className={`${boxSizeClasses[size]} rounded-2xl bg-white flex items-center justify-center shadow-lg ${className}`}>
      <img 
        src={iconSrc} 
        alt={`${caseStudy} icon`}
        className={`${iconInBoxSizes[size]} object-contain`}
      />
    </div>
  );
};
