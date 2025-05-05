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
    title: 'Kidney Disease',
    description: 'Ayurvedic approaches to manage and reverse kidney disorders naturally.',
    detailedDescription: 'Our comprehensive kidney disease treatment program combines traditional Ayurvedic wisdom with modern diagnostic approaches. We focus on natural detoxification, strengthening kidney function, and preventing further damage through personalized herbal formulations and lifestyle modifications.',
    icon: 'activity',
    symptoms: [
      'Swelling in legs and feet',
      'Fatigue and weakness',
      'Changes in urination patterns',
      'High blood pressure',
      'Loss of appetite'
    ],
    methods: [
      'Herbal formulations for kidney detoxification',
      'Dietary modifications',
      'Panchakarma therapies',
      'Lifestyle recommendations',
      'Stress management techniques'
    ],
    expectedResults: 'Significant improvement in kidney function tests, reduced dependency on dialysis, better quality of life, and long-term management of kidney health.'
  },
  {
    id: 'liver',
    title: 'Liver Disease',
    description: 'Herbal formulations and therapies for liver regeneration and function.',
    detailedDescription: 'Our liver treatment protocol emphasizes natural regeneration and detoxification. We use specialized herbal combinations that have been proven effective in supporting liver function, reducing inflammation, and promoting cellular repair.',
    icon: 'heart-pulse',
    symptoms: [
      'Jaundice',
      'Abdominal pain and swelling',
      'Chronic fatigue',
      'Digestive issues',
      'Skin problems'
    ],
    methods: [
      'Liver detoxification therapies',
      'Specialized herbal formulations',
      'Dietary protocols',
      'Yoga and meditation',
      'Lifestyle modifications'
    ],
    expectedResults: 'Improved liver function tests, reduced inflammation, better digestion, increased energy levels, and enhanced overall liver health.'
  },
  {
    id: 'diabetes',
    title: 'Diabetes',
    description: 'Holistic management of blood sugar levels through diet and herbs.',
    detailedDescription: 'Our diabetes management program takes a comprehensive approach to blood sugar control. We combine traditional Ayurvedic herbs with modern dietary science to create sustainable lifestyle changes that help maintain healthy glucose levels naturally.',
    icon: 'droplets',
    symptoms: [
      'Increased thirst and urination',
      'Unexplained weight loss',
      'Fatigue and weakness',
      'Blurred vision',
      'Slow healing wounds'
    ],
    methods: [
      'Customized herbal formulations',
      'Dietary management',
      'Exercise protocols',
      'Stress reduction techniques',
      'Lifestyle modifications'
    ],
    expectedResults: 'Stable blood sugar levels, reduced medication dependency, improved energy levels, better weight management, and prevention of complications.'
  },
  {
    id: 'hiv',
    title: 'HIV/AIDS',
    description: 'Complementary approaches to strengthen immunity and improve quality of life.',
    detailedDescription: 'Our HIV/AIDS support program focuses on strengthening the immune system and improving overall quality of life. We use specialized Rasayana therapies and immune-boosting formulations to enhance natural defense mechanisms and reduce opportunistic infections.',
    icon: 'shield',
    symptoms: [
      'Recurrent infections',
      'Chronic fatigue',
      'Weight loss',
      'Fever and night sweats',
      'Skin problems'
    ],
    methods: [
      'Immune-boosting therapies',
      'Rasayana treatments',
      'Nutritional support',
      'Stress management',
      'Lifestyle modifications'
    ],
    expectedResults: 'Enhanced immune function, improved quality of life, better energy levels, reduced opportunistic infections, and better overall health.'
  },
  {
    id: 'infertility',
    title: 'Infertility',
    description: 'Natural treatments to enhance reproductive health and fertility.',
    detailedDescription: 'Our fertility enhancement program combines traditional Vajikarana therapies with modern reproductive health approaches. We address both physical and emotional aspects of fertility, focusing on hormonal balance, reproductive system health, and stress management.',
    icon: 'baby',
    symptoms: [
      'Irregular menstrual cycles',
      'Hormonal imbalances',
      'Stress and anxiety',
      'Low libido',
      'Reproductive system issues'
    ],
    methods: [
      'Vajikarana therapies',
      'Hormonal balancing treatments',
      'Stress management',
      'Dietary modifications',
      'Lifestyle counseling'
    ],
    expectedResults: 'Improved reproductive health, balanced hormones, enhanced fertility, better conception rates, and overall reproductive wellness.'
  },
  {
    id: 'arthritis',
    title: 'Arthritis',
    description: 'Relief from joint pain and inflammation through authentic Ayurvedic methods.',
    detailedDescription: 'Our arthritis treatment program offers a natural approach to managing joint pain and inflammation. We combine Panchakarma therapies with specialized herbal formulations to reduce pain, improve mobility, and prevent further joint damage.',
    icon: 'bone',
    symptoms: [
      'Joint pain and stiffness',
      'Swelling and inflammation',
      'Reduced mobility',
      'Morning stiffness',
      'Fatigue'
    ],
    methods: [
      'Panchakarma therapies',
      'Herbal formulations',
      'External applications',
      'Dietary modifications',
      'Exercise protocols'
    ],
    expectedResults: 'Reduced pain and inflammation, improved joint mobility, better quality of life, reduced medication dependency, and long-term management.'
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
  { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { id: 'youtube', platform: 'YouTube', url: 'https://youtube.com', icon: 'youtube' }
];

export const doctorInfo = {
  name: 'Dr. Arjun Bawa',
  title: 'Chief Ayurvedic Physician',
  experience: '25+ years',
  qualifications: ['BAMS', 'MD (Ayurveda)'],
  specialties: ['Chronic Disease Management', 'Panchakarma', 'Herbal Medicine'],
  description: 'Dr. Arjun Bawa is a renowned Ayurvedic physician with extensive experience in treating chronic conditions through authentic Ayurvedic methods. His unique approach combines traditional wisdom with modern diagnostic tools to deliver personalized treatment plans that address the root causes of diseases.',
  image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
};