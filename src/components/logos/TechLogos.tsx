import React from "react";

// AWS Logo
export const AWSLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 48" fill="currentColor">
    <path d="M22.5 28.8c0 .8.1 1.5.3 2 .2.5.4 1 .8 1.5.1.2.2.3.2.4 0 .2-.1.3-.3.5l-1.1.7c-.2.1-.3.2-.4.2-.2 0-.3-.1-.5-.3-.2-.3-.4-.5-.6-.8-.2-.3-.3-.6-.5-1-1.3 1.5-2.9 2.3-4.8 2.3-1.4 0-2.5-.4-3.3-1.2-.8-.8-1.2-1.9-1.2-3.2 0-1.4.5-2.6 1.5-3.4 1-.9 2.3-1.3 4-1.3.6 0 1.1 0 1.7.1.6.1 1.2.2 1.8.3v-1.2c0-1.3-.3-2.2-.8-2.8-.6-.6-1.5-.8-2.8-.8-.6 0-1.2.1-1.9.2-.6.2-1.3.4-1.9.7-.3.1-.5.2-.6.2h-.2c-.2 0-.3-.2-.3-.5v-.8c0-.3 0-.5.1-.6.1-.1.2-.3.5-.4.6-.3 1.3-.5 2.2-.8.8-.2 1.7-.3 2.6-.3 2 0 3.5.5 4.4 1.4.9.9 1.4 2.4 1.4 4.3v5.6zm-6.6 2.5c.5 0 1.1-.1 1.7-.3.6-.2 1.1-.6 1.5-1.1.3-.3.5-.7.6-1.1.1-.4.2-.9.2-1.5v-.7c-.5-.1-1-.2-1.5-.3-.5-.1-1-.1-1.5-.1-1.1 0-1.9.2-2.4.6-.6.4-.8 1-.8 1.8 0 .7.2 1.3.6 1.7.4.4 1 .6 1.7.6zm13.1 1.7c-.3 0-.5-.1-.6-.2-.1-.1-.3-.4-.4-.8l-4.4-14.5c-.1-.3-.2-.6-.2-.8 0-.3.2-.5.5-.5h1.8c.3 0 .5.1.7.2.1.1.2.4.3.8l3.2 12.5 2.9-12.5c.1-.4.2-.6.3-.8.1-.1.4-.2.7-.2h1.4c.3 0 .5.1.7.2.1.1.2.4.3.8l3 12.7 3.3-12.7c.1-.4.2-.6.3-.8.2-.1.4-.2.7-.2h1.7c.3 0 .5.2.5.5 0 .1 0 .2-.1.4 0 .1-.1.3-.2.5l-4.5 14.5c-.1.4-.2.6-.4.8-.1.1-.4.2-.6.2h-1.6c-.3 0-.5-.1-.7-.2-.1-.1-.2-.4-.3-.8l-2.9-12.2-2.9 12.1c-.1.4-.2.6-.3.8-.1.2-.4.2-.7.2h-1.6zm21 .4c-.9 0-1.7-.1-2.6-.3-.8-.2-1.5-.5-1.9-.7-.3-.2-.4-.3-.5-.5 0-.1-.1-.3-.1-.4v-.9c0-.3.1-.5.4-.5.1 0 .2 0 .3.1.1 0 .3.1.4.2.6.3 1.2.5 1.9.6.7.2 1.4.2 2 .2 1.1 0 1.9-.2 2.5-.5.6-.4.9-.9.9-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.9-.6-1.8-.9l-2.6-.8c-1.3-.4-2.3-1-2.9-1.8-.6-.7-.9-1.6-.9-2.5 0-.7.2-1.4.5-2 .3-.6.8-1.1 1.3-1.5.6-.4 1.2-.7 2-.9.7-.2 1.5-.3 2.4-.3.4 0 .9 0 1.3.1.5.1.9.2 1.3.3.4.1.8.2 1.1.4.3.1.6.3.7.4.2.1.3.3.4.5.1.2.1.4.1.6v.8c0 .3-.1.5-.4.5-.1 0-.3-.1-.5-.2-.8-.4-1.6-.6-2.6-.8-.5-.1-1-.1-1.5-.1-.9 0-1.7.2-2.2.5-.5.3-.8.8-.8 1.5 0 .5.2.9.5 1.2.4.3 1 .7 1.9.9l2.5.8c1.3.4 2.2 1 2.8 1.7.6.7.8 1.5.8 2.5 0 .8-.2 1.4-.5 2-.3.6-.8 1.1-1.4 1.5-.6.4-1.3.7-2.1.9-.9.2-1.7.3-2.7.3z" fill="#FF9900"/>
    <path d="M71.1 38.9c-5.9 4.3-14.4 6.6-21.7 6.6-10.3 0-19.5-3.8-26.5-10.1-.5-.5-.1-1.2.6-.8 7.6 4.4 16.9 7 26.5 7 6.5 0 13.7-1.3 20.3-4.1 1-.4 1.8.7.8 1.4zm2.4-2.7c-.7-.9-4.8-.4-6.6-.2-.6.1-.7-.4-.1-.8 3.2-2.3 8.6-1.6 9.2-.9.6.8-.2 6.2-3.2 8.8-.5.4-.9.2-.7-.3.7-1.7 2.2-5.6 1.4-6.6z" fill="#FF9900"/>
  </svg>
);

// GCP Logo
export const GCPLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#4285F4" d="M26.2 23.5l5.4-5.4c.3-.3.3-.9 0-1.2l-1.8-1.8c-.3-.3-.9-.3-1.2 0l-5.4 5.4c-.3.3-.3.9 0 1.2l1.8 1.8c.4.3.9.3 1.2 0z"/>
    <path fill="#EA4335" d="M24 10c1.7 0 3.3.4 4.8 1l3.5-3.5C29.8 5.9 27 5 24 5 14.6 5 7 12.6 7 22h5c0-6.6 5.4-12 12-12z"/>
    <path fill="#FBBC04" d="M36.4 16.5c1.3 1.8 2.2 3.9 2.5 6.2l5-.6c-.4-3.4-1.8-6.5-3.9-9.1l-3.6 3.5z"/>
    <path fill="#34A853" d="M24 39c5.8 0 10.8-4.1 12-9.7l-4.9-1c-.9 3.6-4.1 6.2-7.9 6.2-4.5 0-8.2-3.6-8.2-8.2h-5c0 7.4 5.9 12.7 14 12.7z"/>
    <path fill="#4285F4" d="M14 23.3c.2-1.4.7-2.7 1.4-3.9L11.9 16c-1.3 1.8-2.2 3.9-2.5 6.2l4.6 1.1z"/>
  </svg>
);

// Azure Logo
export const AzureLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#0089D6" d="M13.9 4.1L27.4 4l-9.6 28.4L6 33.5z"/>
    <path fill="#0089D6" d="M26.3 10.6L34 24.8l-18.2 8.7h26.1L26.3 10.6z"/>
  </svg>
);

// Docker Logo
export const DockerLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#2196F3" d="M47 20.1c-.5-.3-2.3-.6-4.3-.2-.3-1.5-1.3-2.9-2.8-4l-.6-.4-.4.6c-.8 1.2-1.2 2.9-1.1 4.4.1.9.4 1.9 1 2.7-.5.3-1 .5-1.5.6-1 .3-2 .4-3 .4H1.1l-.1.8c-.2 2.9.4 5.8 1.9 8.4 1.7 2.9 4.4 4.9 8.1 5.9 1.6.5 3.4.7 5.1.7 5.2 0 10-1.6 13.9-5.3 3.2-3 5-7.2 5.8-11.1h.5c1.9 0 3.6-.6 4.8-1.7.6-.6 1.1-1.3 1.3-2.2.1-.3.1-.4-.2-.6zM9 22.3H5.9v3.1H9v-3.1zm4.3 0h-3.1v3.1h3.1v-3.1zm4.4 0h-3.1v3.1h3.1v-3.1zm4.4 0h-3.1v3.1h3.1v-3.1zm-13.1-4h-3.1v3.1H9v-3.1zm4.3 0h-3.1v3.1h3.1v-3.1zm4.4 0h-3.1v3.1h3.1v-3.1zm4.4 0h-3.1v3.1h3.1v-3.1zm4.4 0h-3.1v3.1h3.1v-3.1zm-8.8-4h-3.1v3.1h3.1v-3.1zm4.4 0h-3.1v3.1h3.1v-3.1z"/>
  </svg>
);

// Kubernetes Logo
export const KubernetesLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#326CE5" d="M24 4c-1.1 0-2.2.3-3.1.9L8.1 12.5c-1.9 1.1-3.1 3.1-3.1 5.3v14.4c0 2.2 1.2 4.2 3.1 5.3l12.8 7.6c1.9 1.1 4.3 1.1 6.2 0l12.8-7.6c1.9-1.1 3.1-3.1 3.1-5.3V17.8c0-2.2-1.2-4.2-3.1-5.3L27.1 4.9C26.2 4.3 25.1 4 24 4z"/>
    <path fill="#fff" d="M24 10.4l8.8 5.1v10.2L24 30.8l-8.8-5.1V15.5L24 10.4m0-2.6l-10.9 6.3v12.6l10.9 6.3 10.9-6.3V14.1L24 7.8z"/>
    <circle fill="#fff" cx="24" cy="20.5" r="3"/>
  </svg>
);

// Jenkins Logo
export const JenkinsLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <ellipse fill="#F0D6B7" cx="24" cy="24" rx="18" ry="18"/>
    <path fill="#335061" d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/>
    <circle fill="#335061" cx="19" cy="20" r="2"/>
    <circle fill="#335061" cx="29" cy="20" r="2"/>
    <path fill="#335061" d="M24 32c-3.3 0-6-2-6-4h12c0 2-2.7 4-6 4z"/>
  </svg>
);

// Terraform Logo
export const TerraformLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#5C4EE5" d="M17 6l10 5.8v11.5L17 17.5V6z"/>
    <path fill="#4040B2" d="M29 11.8l10 5.8v11.5l-10-5.8V11.8z"/>
    <path fill="#5C4EE5" d="M17 30.5l10 5.8V48l-10-5.8V30.5z"/>
    <path fill="#5C4EE5" d="M5 18.2l10 5.8v11.5L5 29.7V18.2z"/>
  </svg>
);

// Ansible Logo
export const AnsibleLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <circle fill="#1A1918" cx="24" cy="24" r="20"/>
    <path fill="#fff" d="M24 11l10 20H18l6-12 6 12h-4l-2-4-2 4h-4l6-12z"/>
  </svg>
);

// GitLab Logo
export const GitLabLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#E24329" d="M24 44L35.5 13.2H12.5z"/>
    <path fill="#FC6D26" d="M24 44L12.5 13.2H3.5z"/>
    <path fill="#FCA326" d="M3.5 13.2L.5 22.5c-.3.9 0 1.9.8 2.5L24 44 3.5 13.2z"/>
    <path fill="#E24329" d="M3.5 13.2h9l-4-12.3c-.2-.6-1-.6-1.2 0l-3.8 12.3z"/>
    <path fill="#FC6D26" d="M24 44l11.5-30.8h9z"/>
    <path fill="#FCA326" d="M44.5 13.2l3 9.3c.3.9 0 1.9-.8 2.5L24 44l20.5-30.8z"/>
    <path fill="#E24329" d="M44.5 13.2h-9l4-12.3c.2-.6 1-.6 1.2 0l3.8 12.3z"/>
  </svg>
);

// GitHub Logo
export const GitHubLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.34 13.68 18.98.99.18 1.35-.43 1.35-.96v-3.7c-5.56 1.21-6.72-2.68-6.72-2.68-.91-2.31-2.22-2.92-2.22-2.92-1.81-1.24.14-1.21.14-1.21 2 .14 3.05 2.05 3.05 2.05 1.78 3.05 4.67 2.17 5.81 1.66.18-1.29.69-2.17 1.26-2.67-4.44-.5-9.1-2.22-9.1-9.88 0-2.18.78-3.96 2.05-5.36-.21-.5-.89-2.53.19-5.28 0 0 1.67-.53 5.48 2.05 1.59-.44 3.3-.67 5-.68 1.7.01 3.41.24 5 .68 3.8-2.58 5.47-2.05 5.47-2.05 1.08 2.75.4 4.78.2 5.28 1.28 1.4 2.05 3.18 2.05 5.36 0 7.68-4.67 9.37-9.12 9.86.71.61 1.35 1.83 1.35 3.69v5.47c0 .53.36 1.15 1.37.96C38.28 40.33 44 32.84 44 24 44 12.95 35.05 4 24 4z"/>
  </svg>
);

// Prometheus Logo
export const PrometheusLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#E6522C" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-3.31 0-6-.67-6-1.5s2.69-1.5 6-1.5 6 .67 6 1.5-2.69 1.5-6 1.5zm10-5.5c0 .55-4.48 1-10 1s-10-.45-10-1c0-.08.06-.16.18-.24.45-.31 1.53-.66 3.32-.93v-5.58c0-1.38 1.12-2.5 2.5-2.5h8c1.38 0 2.5 1.12 2.5 2.5v5.58c1.79.27 2.87.62 3.32.93.12.08.18.16.18.24zm-10-7c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-12c-4.42 0-8 3.58-8 8 0 1.05.2 2.05.57 2.97l-4.79 2.77c-.67-1.74-1.03-3.65-1.03-5.64 0-8.28 6.72-15 15-15v5.9c.75 0 1.25 0 1.25 0v-5.9c8.28 0 15 6.72 15 15 0 1.99-.36 3.9-1.03 5.64l-4.79-2.77c.37-.92.57-1.92.57-2.97 0-4.42-3.58-8-8-8z"/>
  </svg>
);

// Grafana Logo
export const GrafanaLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#F46800" d="M42.5 21.8c-.3-1.8-1.1-3.4-2.3-4.8-.5-.6-1.1-1.1-1.7-1.5-.2-1.7-.8-3.3-1.8-4.7-1.5-2.1-3.7-3.5-6.2-4-1.7-.4-3.5-.3-5.2.2-1.2-1-2.6-1.7-4.2-2-2.5-.5-5.1 0-7.2 1.4-1.4 1-2.5 2.3-3.2 3.8-1.8.2-3.5.9-4.9 2.1-2 1.7-3.2 4-3.4 6.5-.1 1.8.3 3.6 1.2 5.2-.5 1.5-.6 3.1-.3 4.6.5 2.5 2 4.7 4.1 6.1 1.4 1 3.1 1.5 4.8 1.6.9 1.6 2.2 2.9 3.8 3.8 2.3 1.4 5 1.8 7.6 1.2 1.8-.4 3.4-1.3 4.7-2.5 1.7.2 3.5-.1 5-.8 2.3-1.1 4.1-3 5-5.3.6-1.6.8-3.3.5-5 1.3-1.3 2.2-2.9 2.6-4.7.2-.9.2-1.5.1-2.2z"/>
    <path fill="#fff" d="M24 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
  </svg>
);

// ArgoCD Logo
export const ArgoCDLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <circle fill="#EF7B4D" cx="24" cy="24" r="20"/>
    <path fill="#fff" d="M24 12l12 20H12z"/>
  </svg>
);

// Helm Logo
export const HelmLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <circle fill="#0F1689" cx="24" cy="24" r="20"/>
    <path fill="#fff" d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 28c-2.2 0-4-.9-4-2h8c0 1.1-1.8 2-4 2zm6-4H18v-2h12v2zm0-4H18v-2h12v2zm0-4H18v-2h12v2z"/>
  </svg>
);

// Python Logo
export const PythonLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#0277BD" d="M24 5c-4.4 0-8 .9-10.5 2.5-2 1.3-3 3-3 5v4.5h12v1.5H10c-3.3 0-6 2.7-6 6v6c0 3.3 2.7 6 6 6h3v-5c0-3.3 2.7-6 6-6h12c2.8 0 5-2.2 5-5v-9c0-2.8-2.2-5-5-5h-7z"/>
    <circle fill="#fff" cx="17" cy="11.5" r="2"/>
    <path fill="#FFC107" d="M24 43c4.4 0 8-.9 10.5-2.5 2-1.3 3-3 3-5v-4.5H25.5V29.5H38c3.3 0 6-2.7 6-6v-6c0-3.3-2.7-6-6-6h-3v5c0 3.3-2.7 6-6 6H17c-2.8 0-5 2.2-5 5v9c0 2.8 2.2 5 5 5h7z"/>
    <circle fill="#fff" cx="31" cy="36.5" r="2"/>
  </svg>
);

// React Logo
export const ReactLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <circle fill="#61DAFB" cx="24" cy="24" r="4"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="2" d="M24 12c8.3 0 15 2.7 15 6s-6.7 6-15 6-15-2.7-15-6 6.7-6 15-6z"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="2" d="M24 30c-4.2 7.2-9 11.3-12.5 11.3S6 38 9.5 30s9-14.7 12.5-14.7S36 22.8 38.5 30s-.5 11.3-2 11.3-8.3-4.1-12.5-11.3z" transform="rotate(60 24 24)"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="2" d="M24 30c-4.2 7.2-9 11.3-12.5 11.3S6 38 9.5 30s9-14.7 12.5-14.7S36 22.8 38.5 30s-.5 11.3-2 11.3-8.3-4.1-12.5-11.3z" transform="rotate(-60 24 24)"/>
  </svg>
);

// ELK Stack Logo
export const ELKLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#00BFB3" d="M24 4L8 14v20l16 10 16-10V14z"/>
    <path fill="#343741" d="M24 16l-8 5v10l8 5 8-5V21z"/>
    <path fill="#F04E98" d="M24 24l-4 2.5v5l4 2.5 4-2.5v-5z"/>
  </svg>
);

// CircleCI Logo
export const CircleCILogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#343434" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 28c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    <circle fill="#343434" cx="24" cy="24" r="4"/>
  </svg>
);

// GitHub Actions Logo
export const GitHubActionsLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#2088FF" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z"/>
    <path fill="#fff" d="M33 20l-6-6-3 3 6 6 3 3 6-6-3-3zM15 28l6 6 3-3-6-6-3-3-6 6 3 3z"/>
    <circle fill="#fff" cx="24" cy="24" r="3"/>
  </svg>
);

export const techLogos = {
  AWS: AWSLogo,
  Azure: AzureLogo,
  GCP: GCPLogo,
  Kubernetes: KubernetesLogo,
  Docker: DockerLogo,
  Terraform: TerraformLogo,
  Jenkins: JenkinsLogo,
  GitLab: GitLabLogo,
  GitHub: GitHubLogo,
  "GitHub Actions": GitHubActionsLogo,
  Prometheus: PrometheusLogo,
  Grafana: GrafanaLogo,
  Ansible: AnsibleLogo,
  ArgoCD: ArgoCDLogo,
  Helm: HelmLogo,
  Python: PythonLogo,
  React: ReactLogo,
  "ELK Stack": ELKLogo,
  CircleCI: CircleCILogo,
};
