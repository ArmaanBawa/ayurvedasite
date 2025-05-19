import { MenuItem, Treatment, Testimonial, SocialLink } from '../types';

export const menuItems: MenuItem[] = [
  { id: 'home', title: 'Home', href: '/' },
  { id: 'about', title: 'About Us', href: '/about' },
  { id: 'treatments', title: 'Treatments', href: '/treatments' },
  { id: 'success', title: 'Success Stories', href: '/success-stories' },
  { id: 'consultation', title: 'Online Consultation', href: '/consultation' },
  { id: 'contact', title: 'Contact Us', href: '/contact' },
];

export const treatments: Treatment[] = [
  {
    id: 'kidney',
    title: 'Kidney Disease Treatment',
    description: 'Comprehensive Ayurvedic treatment for chronic kidney disease and renal health.',
    icon: 'Kidney',
    symptoms: [
      'Decreased urine output',
      'Swelling in legs, ankles, or feet',
      'Shortness of breath',
      'Fatigue',
      'Nausea',
      'Confusion or difficulty concentrating'
    ],
    causes: [
      'High blood pressure',
      'Diabetes',
      'Chronic inflammation',
      'Urinary tract problems',
      'Genetic factors'
    ],
    treatmentMethods: [
      'Herbal formulations for kidney support',
      'Panchakarma therapies',
      'Dietary modifications',
      'Lifestyle adjustments',
      'Stress management techniques'
    ],
    prevention: [
      'Maintain healthy blood pressure',
      'Control blood sugar levels',
      'Stay hydrated',
      'Follow a balanced diet',
      'Regular exercise'
    ],
    expectedResults: 'Improvement in kidney function markers, reduced symptoms, and better quality of life.',
    timeline: 'Initial improvements within 3-6 months, with continued therapy for long-term management.',
    ayurvedicPerspective: 'In Ayurveda, kidney disorders are primarily associated with Vata and Pitta imbalances. Treatment focuses on restoring dosha balance and strengthening the dhatus (body tissues).'
  },
  {
    id: 'diabetes',
    title: 'Diabetes Management',
    description: 'Natural Ayurvedic approach to managing diabetes and blood sugar levels.',
    icon: 'Diabetes',
    symptoms: [
      'Increased thirst and urination',
      'Fatigue',
      'Blurred vision',
      'Slow-healing sores',
      'Unexplained weight loss'
    ],
    causes: [
      'Genetic predisposition',
      'Obesity',
      'Sedentary lifestyle',
      'Poor diet',
      'Stress'
    ],
    treatmentMethods: [
      'Specialized herbal formulations',
      'Panchakarma therapies',
      'Diet planning',
      'Exercise routines',
      'Stress management'
    ],
    prevention: [
      'Maintain healthy weight',
      'Regular exercise',
      'Balanced diet',
      'Regular health check-ups',
      'Stress reduction'
    ],
    expectedResults: 'Better blood sugar control, reduced medication dependency, and improved overall health.',
    timeline: 'Initial improvements in 2-3 months, with ongoing management for optimal results.',
    ayurvedicPerspective: 'Diabetes (Madhumeha) is seen as a Kapha disorder with secondary Vata involvement. Treatment focuses on improving metabolism and reducing Ama (toxins).'
  },
  {
    id: 'arthritis',
    title: 'Arthritis Treatment',
    description: 'Effective Ayurvedic solutions for managing arthritis and joint pain.',
    icon: 'Bone',
    symptoms: [
      'Joint pain and stiffness',
      'Reduced range of motion',
      'Swelling',
      'Redness',
      'Weakness'
    ],
    causes: [
      'Age-related wear and tear',
      'Autoimmune conditions',
      'Previous joint injuries',
      'Obesity',
      'Genetic factors'
    ],
    treatmentMethods: [
      'Herbal anti-inflammatory formulations',
      'Specialized Panchakarma therapies',
      'Joint-specific exercises',
      'Diet modifications',
      'Lifestyle adjustments'
    ],
    prevention: [
      'Maintain healthy weight',
      'Regular exercise',
      'Proper posture',
      'Joint-friendly activities',
      'Anti-inflammatory diet'
    ],
    expectedResults: 'Reduced pain and inflammation, improved mobility, and better joint health.',
    timeline: 'Noticeable improvements within 2-4 months, with ongoing management for best results.',
    ayurvedicPerspective: 'Arthritis (Amavata) is primarily a Vata disorder with Ama accumulation. Treatment focuses on reducing inflammation and improving joint function.'
  },
  {
    id: 'hypertension',
    title: 'Hypertension Treatment',
    description: 'Natural management of high blood pressure through Ayurvedic principles.',
    icon: 'Heart',
    symptoms: [
      'Headaches',
      'Shortness of breath',
      'Nosebleeds',
      'Fatigue',
      'Vision problems'
    ],
    causes: [
      'Stress',
      'Poor diet',
      'Lack of exercise',
      'Genetic factors',
      'Age'
    ],
    treatmentMethods: [
      'Blood pressure-specific herbs',
      'Stress reduction techniques',
      'Diet planning',
      'Exercise programs',
      'Lifestyle modifications'
    ],
    prevention: [
      'Regular exercise',
      'Healthy diet',
      'Stress management',
      'Adequate sleep',
      'Regular monitoring'
    ],
    expectedResults: 'Stabilized blood pressure, reduced medication needs, and improved cardiovascular health.',
    timeline: 'Initial improvements in 1-2 months, with continued management for long-term benefits.',
    ayurvedicPerspective: 'Hypertension is viewed as a Vata-Pitta imbalance affecting the cardiovascular system. Treatment focuses on balancing these doshas and strengthening the heart.'
  },
  {
    id: 'asthma',
    title: 'Asthma Treatment',
    description: 'Comprehensive Ayurvedic approach to managing asthma and respiratory health.',
    icon: 'Lungs',
    symptoms: [
      'Wheezing',
      'Shortness of breath',
      'Chest tightness',
      'Coughing',
      'Difficulty sleeping'
    ],
    causes: [
      'Allergies',
      'Environmental irritants',
      'Respiratory infections',
      'Exercise',
      'Stress'
    ],
    treatmentMethods: [
      'Respiratory-specific herbs',
      'Breathing exercises',
      'Panchakarma therapies',
      'Diet modifications',
      'Lifestyle changes'
    ],
    prevention: [
      'Avoid triggers',
      'Regular exercise',
      'Clean environment',
      'Proper diet',
      'Stress management'
    ],
    expectedResults: 'Reduced frequency and severity of asthma attacks, improved breathing capacity.',
    timeline: 'Noticeable improvements within 2-3 months, with ongoing management for best results.',
    ayurvedicPerspective: 'Asthma (Tamaka Shwasa) is primarily a Vata-Kapha disorder. Treatment focuses on clearing the airways and strengthening the respiratory system.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    quote: 'After 3 years of conventional treatment for my kidney condition, I found real improvement with Dr. Arjun Bawa\'s Ayurvedic approach. My kidney function has improved significantly.',
    rating: 5,
    location: 'Delhi'
  },
  {
    id: '2',
    name: 'Priya Mehta',
    quote: 'The personalized treatment for diabetes has helped me maintain normal blood sugar levels without the side effects I experienced with other medications.',
    rating: 5,
    location: 'Mumbai'
  },
  {
    id: '3',
    name: 'Suresh Patel',
    quote: 'I had lost hope after trying many treatments for my liver condition. The herbal formulations prescribed here have restored my liver function tests to normal ranges.',
    rating: 4,
    location: 'Ahmedabad'
  },
  {
    id: '4',
    name: 'Anita Singh',
    quote: 'The fertility treatment worked wonders for us. After years of trying, we were blessed with a healthy baby. Forever grateful for the holistic approach.',
    rating: 5,
    location: 'Jaipur'
  }
];

export const socialLinks: SocialLink[] = [
  { id: 'facebook', platform: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { id: 'twitter', platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { id: 'instagram', platform: 'Instagram', url: 'https://www.instagram.com/bawa_s_modernayurveda_', icon: 'instagram' },
  { id: 'youtube', platform: 'YouTube', url: 'https://youtube.com', icon: 'youtube' }
];

export const doctorInfo = {
  name: 'Dr. Arjun Bawa',
  title: 'Chief Ayurvedic Physician',
  experience: '12+ years',
  qualifications: ['BAMS', 'MSc. Psychology', 'NIMA'],
  specialties: ['Chronic Disease Management', 'Panchakarma', 'Herbal Medicine'],
  description: 'Dr. Arjun Bawa is a renowned Ayurvedic physician with extensive experience in treating chronic conditions through authentic Ayurvedic methods. His unique approach combines traditional wisdom with modern diagnostic tools to deliver personalized treatment plans that address the root causes of diseases.',
  image: '/images/IMG_2558.jpg',
  aboutImage: '/images/IMG_2573.jpg'
};