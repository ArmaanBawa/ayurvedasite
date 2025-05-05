export interface MenuItem {
    id: string;
    title: string;
    href: string;
  }
  
  export interface Treatment {
    id: string;
    title: string;
    icon: string;
    description: string;
    detailedDescription: string;
    symptoms: string[];
    methods: string[];
    expectedResults?: string;
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
  }