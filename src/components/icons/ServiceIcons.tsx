import cloudServiceIcon from "@/assets/icons/cloud-service.png";
import devopsServiceIcon from "@/assets/icons/devops-service.png";
import dataEngineeringIcon from "@/assets/icons/data-engineering.png";
import aimlServiceIcon from "@/assets/icons/aiml-service.jpg";
import applicationServiceIcon from "@/assets/icons/application-service.png";
import securityServiceIcon from "@/assets/icons/security-service.jpg";
import dedicatedResourcesIcon from "@/assets/icons/dedicated-resources.png";
import softwareDevelopmentIcon from "@/assets/icons/software-development.png";
import dataAnalysisIcon from "@/assets/icons/data-analysis.png";

// Service icon configuration
export const serviceIcons = {
  cloud: cloudServiceIcon,
  devops: devopsServiceIcon,
  dataEngineering: dataEngineeringIcon,
  aiml: aimlServiceIcon,
  application: applicationServiceIcon,
  security: securityServiceIcon,
  dedicatedResources: dedicatedResourcesIcon,
  softwareDevelopment: softwareDevelopmentIcon,
  dataAnalysis: dataAnalysisIcon
};
interface ServiceIconProps {
  service: keyof typeof serviceIcons;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}
const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16"
};
export const ServiceIcon = ({
  service,
  size = "md",
  className = ""
}: ServiceIconProps) => {
  return <img src={serviceIcons[service]} alt={`${service} service icon`} className={`${sizeClasses[size]} object-contain ${className}`} />;
};

// Icon box component with gradient background for hero sections
interface ServiceIconBoxProps {
  service: keyof typeof serviceIcons;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
}
const boxSizeClasses = {
  sm: "w-12 h-12 p-2",
  md: "w-14 h-14 p-2.5",
  lg: "w-16 h-16 p-3",
  xl: "w-20 h-20 p-4",
  hero: "w-20 h-20 p-4"
};
const iconSizeInBox = {
  sm: "w-8 h-8",
  md: "w-9 h-9",
  lg: "w-10 h-10",
  xl: "w-12 h-12",
  hero: "w-12 h-12"
};
export const ServiceIconBox = ({
  service,
  size = "md",
  className = ""
}: ServiceIconBoxProps) => {
  return;
};
export default serviceIcons;