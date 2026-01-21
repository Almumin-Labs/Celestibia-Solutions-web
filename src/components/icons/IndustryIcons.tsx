import bankingIcon from "@/assets/icons/industries/banking.jpg";
import healthcareIcon from "@/assets/icons/industries/healthcare.png";
import ecommerceIcon from "@/assets/icons/industries/ecommerce.png";
import manufacturingIcon from "@/assets/icons/industries/manufacturing.png";
import logisticsIcon from "@/assets/icons/industries/logistics.png";
import edtechIcon from "@/assets/icons/industries/edtech.png";
import governmentIcon from "@/assets/icons/industries/government.png";
import travelIcon from "@/assets/icons/industries/travel.png";

// Industry icons configuration
export const industryIcons: Record<string, string> = {
  banking: bankingIcon,
  healthcare: healthcareIcon,
  ecommerce: ecommerceIcon,
  manufacturing: manufacturingIcon,
  logistics: logisticsIcon,
  edtech: edtechIcon,
  government: governmentIcon,
  travel: travelIcon,
};

interface IndustryIconProps {
  industry: keyof typeof industryIcons;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

export const IndustryIcon = ({ industry, size = "md", className = "" }: IndustryIconProps) => {
  const iconSrc = industryIcons[industry];
  
  if (!iconSrc) {
    return null;
  }

  return (
    <img 
      src={iconSrc} 
      alt={`${industry} icon`}
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
};

interface IndustryIconBoxProps {
  industry: keyof typeof industryIcons;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const boxSizeClasses = {
  sm: "w-12 h-12 p-2",
  md: "w-16 h-16 p-2",
  lg: "w-20 h-20 p-3",
  xl: "w-24 h-24 p-3",
};

const iconInBoxSizes = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-14 h-14",
  xl: "w-18 h-18",
};

export const IndustryIconBox = ({ industry, size = "md", className = "" }: IndustryIconBoxProps) => {
  const iconSrc = industryIcons[industry];
  
  if (!iconSrc) {
    return null;
  }

  return (
    <div className={`${boxSizeClasses[size]} rounded-2xl bg-white flex items-center justify-center shadow-lg ${className}`}>
      <img 
        src={iconSrc} 
        alt={`${industry} icon`}
        className={`${iconInBoxSizes[size]} object-contain`}
      />
    </div>
  );
};
