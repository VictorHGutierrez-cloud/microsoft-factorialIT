export interface OnePager {
  title: string;
  file: string;
  thumbnail?: string;
  category: 'security' | 'automation' | 'analytics' | 'integration';
}

export interface PartnerConfig {
  name: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
  contact: {
    email: string;
    phone?: string;
    website?: string;
  };
  microsoftDesignations: string[];
  onePagers: OnePager[];
  customContent?: {
    heroSubtitle?: string;
    heroTitle?: string;
    ctaText?: string;
  };
}

export const partnerConfig: PartnerConfig = {
  name: "Davyn",
  logo: "/images/partners/davyn-logo.svg",
  colors: {
    primary: "#0078D4", // Microsoft Azure Blue
    secondary: "#FF6B9D", // Factorial IT Pink
  },
  contact: {
    email: "contact@davyn.com",
    phone: "+1-XXX-XXX-XXXX",
    website: "https://davyn.com",
  },
  microsoftDesignations: [
    "Business Applications",
    "Security",
    "Data & AI",
    "Digital & App Innovation",
    "Infrastructure",
  ],
  onePagers: [
    {
      title: "Security Integration",
      file: "/one-pagers/security-integration.pdf",
      thumbnail: "/one-pagers/security-thumb.png",
      category: "security",
    },
    {
      title: "Automation Workflows",
      file: "/one-pagers/automation-workflows.pdf",
      thumbnail: "/one-pagers/automation-thumb.png",
      category: "automation",
    },
    {
      title: "Analytics & Insights",
      file: "/one-pagers/analytics-insights.pdf",
      thumbnail: "/one-pagers/analytics-thumb.png",
      category: "analytics",
    },
  ],
  customContent: {
    heroTitle: "Where Factorial IT Meets Microsoft: Everything Just Works",
    heroSubtitle: "The first truly integrated ecosystem connecting People → Tools → Data → Business",
    ctaText: "See How It Works",
  },
};
