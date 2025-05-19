export interface MenuItem {
    id: string;
    title: string;
    href: string;
  }
  
  export interface Treatment {
    id: string;
    title: string;
    description: string;
    icon: string;
    symptoms: string[];
    causes: string[];
    treatmentMethods: string[];
    prevention: string[];
    expectedResults: string;
    timeline: string;
    ayurvedicPerspective: string;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    quote: string;
    rating: number;
    location: string;
  }
  
  export interface SocialLink {
    id: string;
    platform: string;
    url: string;
    icon: string;
  }

  export interface DoctorInfo {
    name: string;
    title: string;
    description: string;
    experience: string;
    qualifications: string[];
    specialties: string[];
    image: string;
    aboutImage: string;
  }