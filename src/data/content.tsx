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
    detailedDescription: 'Our comprehensive kidney disease treatment program combines traditional Ayurvedic wisdom with modern diagnostic approaches. We focus on natural detoxification, strengthening kidney function, and preventing further damage through personalized herbal formulations and lifestyle modifications. In Ayurveda, kidney disorders are primarily associated with an imbalance in the Vata and Pitta doshas, affecting the body\'s ability to filter and eliminate waste products effectively.',
    icon: 'activity',
    symptoms: [
      'Swelling in legs and feet',
      'Fatigue and weakness',
      'Changes in urination patterns',
      'High blood pressure',
      'Loss of appetite',
      'Nausea and vomiting',
      'Sleep problems',
      'Muscle cramps',
      'Dry and itchy skin',
      'Chest pain and shortness of breath'
    ],
    methods: [
      'Herbal formulations for kidney detoxification',
      'Dietary modifications',
      'Panchakarma therapies',
      'Lifestyle recommendations',
      'Stress management techniques',
      'Yoga and meditation practices',
      'Kidney-specific herbal supplements',
      'Hydration therapy',
      'Acupuncture and acupressure',
      'Regular monitoring and follow-up'
    ],
    causes: [
      'High blood pressure',
      'Diabetes',
      'Autoimmune diseases',
      'Genetic factors',
      'Urinary tract infections',
      'Kidney stones',
      'Excessive use of pain medications',
      'Dehydration',
      'Poor dietary habits',
      'Environmental toxins'
    ],
    prevention: [
      'Maintain healthy blood pressure',
      'Control blood sugar levels',
      'Stay hydrated',
      'Follow a balanced diet',
      'Exercise regularly',
      'Avoid excessive salt intake',
      'Limit alcohol consumption',
      'Quit smoking',
      'Regular health check-ups',
      'Manage stress effectively'
    ],
    expectedResults: 'Significant improvement in kidney function tests, reduced dependency on dialysis, better quality of life, and long-term management of kidney health. Most patients report reduced symptoms within 3-6 months of treatment, with continued improvement over time.',
    ayurvedicPerspective: 'In Ayurveda, kidney disorders are seen as a manifestation of impaired Agni (digestive fire) and accumulation of Ama (toxins). Our treatment focuses on restoring the balance of doshas, strengthening the kidneys\' natural filtering capacity, and promoting overall renal health through natural means.'
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
    causes: [
      'Alcohol abuse',
      'Viral infections',
      'Fatty liver disease',
      'Autoimmune conditions',
      'Toxic exposure',
      'Medication side effects',
      'Genetic factors',
      'Poor diet',
      'Obesity',
      'Diabetes'
    ],
    prevention: [
      'Limit alcohol consumption',
      'Maintain healthy weight',
      'Regular exercise',
      'Balanced diet',
      'Vaccination against hepatitis',
      'Avoid toxic substances',
      'Regular health check-ups',
      'Proper medication use',
      'Stress management',
      'Adequate sleep'
    ],
    expectedResults: 'Improved liver function tests, reduced inflammation, better digestion, increased energy levels, and enhanced overall liver health.',
    ayurvedicPerspective: 'In Ayurveda, liver disorders are primarily associated with Pitta dosha imbalance. Our treatment focuses on pacifying Pitta, removing toxins (Ama), and strengthening the liver\'s natural regenerative capacity through specialized herbs and therapies.'
  },
  {
    id: 'diabetes',
    title: 'Diabetes',
    description: 'Holistic management of blood sugar levels through diet and herbs.',
    detailedDescription: 'Our diabetes management program takes a comprehensive approach to blood sugar control. We combine traditional Ayurvedic herbs with modern dietary science to create sustainable lifestyle changes that help maintain healthy glucose levels naturally. Ayurveda views diabetes (Madhumeha) as a metabolic disorder affecting the body\'s ability to process and utilize glucose effectively.',
    icon: 'droplets',
    symptoms: [
      'Increased thirst and urination',
      'Unexplained weight loss',
      'Fatigue and weakness',
      'Blurred vision',
      'Slow healing wounds',
      'Frequent infections',
      'Tingling or numbness in hands/feet',
      'Increased hunger',
      'Dry mouth',
      'Irritability'
    ],
    methods: [
      'Customized herbal formulations',
      'Dietary management',
      'Exercise protocols',
      'Stress reduction techniques',
      'Lifestyle modifications',
      'Panchakarma therapies',
      'Yoga and meditation',
      'Herbal supplements',
      'Acupuncture',
      'Regular monitoring'
    ],
    causes: [
      'Genetic predisposition',
      'Obesity',
      'Sedentary lifestyle',
      'Poor dietary habits',
      'Stress and anxiety',
      'Hormonal imbalances',
      'Pancreatic dysfunction',
      'Insulin resistance',
      'Age-related factors',
      'Environmental factors'
    ],
    prevention: [
      'Maintain healthy weight',
      'Regular physical activity',
      'Balanced diet',
      'Stress management',
      'Adequate sleep',
      'Regular health check-ups',
      'Limit processed foods',
      'Stay hydrated',
      'Avoid smoking and alcohol',
      'Monitor blood sugar levels'
    ],
    expectedResults: 'Stable blood sugar levels, reduced medication dependency, improved energy levels, better weight management, and prevention of complications. Most patients see significant improvement in their condition within 2-3 months of treatment.',
    ayurvedicPerspective: 'Ayurveda identifies diabetes as a Kapha disorder affecting the body\'s metabolic processes. Our treatment focuses on balancing the doshas, improving Agni (digestive fire), and strengthening the body\'s natural ability to regulate blood sugar levels.'
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
    causes: [
      'HIV virus infection',
      'Unprotected sexual contact',
      'Contaminated blood transfusions',
      'Sharing of needles',
      'Mother-to-child transmission',
      'Occupational exposure',
      'Lack of awareness',
      'High-risk behaviors',
      'Limited access to healthcare',
      'Social stigma'
    ],
    prevention: [
      'Safe sexual practices',
      'Regular testing',
      'Proper medical care',
      'Healthy lifestyle',
      'Stress management',
      'Balanced nutrition',
      'Regular exercise',
      'Adequate sleep',
      'Avoid sharing needles',
      'Education and awareness'
    ],
    expectedResults: 'Enhanced immune function, improved quality of life, better energy levels, reduced opportunistic infections, and better overall health.',
    ayurvedicPerspective: 'Ayurveda views HIV/AIDS as a condition that primarily affects Ojas (vital energy) and the immune system. Our treatment focuses on strengthening Ojas, balancing the doshas, and enhancing the body\'s natural defense mechanisms through specialized Rasayana therapies.'
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
    causes: [
      'Hormonal imbalances',
      'Age-related factors',
      'Stress and anxiety',
      'Poor lifestyle habits',
      'Nutritional deficiencies',
      'Environmental factors',
      'Medical conditions',
      'Genetic factors',
      'Weight issues',
      'Reproductive system disorders'
    ],
    prevention: [
      'Healthy lifestyle',
      'Stress management',
      'Balanced diet',
      'Regular exercise',
      'Adequate sleep',
      'Avoid smoking and alcohol',
      'Maintain healthy weight',
      'Regular check-ups',
      'Early intervention',
      'Proper medical care'
    ],
    expectedResults: 'Improved reproductive health, balanced hormones, enhanced fertility, better conception rates, and overall reproductive wellness.',
    ayurvedicPerspective: 'Ayurveda views infertility as a condition affecting Shukra dhatu (reproductive tissue) and Artava (female reproductive system). Our treatment focuses on strengthening these tissues, balancing hormones, and creating optimal conditions for conception through specialized Vajikarana therapies.'
  },
  {
    id: 'arthritis',
    title: 'Arthritis',
    description: 'Relief from joint pain and inflammation through authentic Ayurvedic methods.',
    detailedDescription: 'Our arthritis treatment program offers a natural approach to managing joint pain and inflammation. We combine Panchakarma therapies with specialized herbal formulations to reduce pain, improve mobility, and prevent further joint damage. Ayurveda views arthritis (Amavata) as a condition caused by the accumulation of Ama (toxins) in the joints, leading to inflammation and pain.',
    icon: 'bone',
    symptoms: [
      'Joint pain and stiffness',
      'Swelling and inflammation',
      'Reduced mobility',
      'Morning stiffness',
      'Fatigue',
      'Joint deformity',
      'Warmth and redness',
      'Muscle weakness',
      'Sleep disturbances',
      'Depression and anxiety'
    ],
    methods: [
      'Panchakarma therapies',
      'Herbal formulations',
      'External applications',
      'Dietary modifications',
      'Exercise protocols',
      'Yoga and meditation',
      'Heat and cold therapy',
      'Massage therapy',
      'Acupuncture',
      'Lifestyle counseling'
    ],
    causes: [
      'Age-related wear and tear',
      'Autoimmune disorders',
      'Genetic factors',
      'Joint injuries',
      'Obesity',
      'Metabolic disorders',
      'Infections',
      'Environmental factors',
      'Poor posture',
      'Repetitive stress'
    ],
    prevention: [
      'Maintain healthy weight',
      'Regular exercise',
      'Proper posture',
      'Joint protection',
      'Balanced diet',
      'Stress management',
      'Adequate rest',
      'Avoid joint injuries',
      'Stay active',
      'Regular check-ups'
    ],
    expectedResults: 'Reduced pain and inflammation, improved joint mobility, better quality of life, reduced medication dependency, and long-term management. Patients typically experience significant relief within 1-2 months of treatment.',
    ayurvedicPerspective: 'Ayurveda views arthritis as a Vata disorder with Ama accumulation. Our treatment focuses on removing Ama, balancing Vata dosha, and strengthening the joints through natural therapies and lifestyle modifications.'
  },
  {
    id: 'hypertension',
    title: 'Hypertension',
    description: 'Natural management of high blood pressure through Ayurvedic principles.',
    detailedDescription: 'Our hypertension treatment program combines traditional Ayurvedic wisdom with modern understanding of blood pressure management. We focus on addressing the root causes of high blood pressure through natural methods, lifestyle modifications, and stress management techniques. Ayurveda views hypertension as a Vata-Pitta imbalance affecting the circulatory system.',
    icon: 'heart-pulse',
    symptoms: [
      'Headaches',
      'Dizziness',
      'Chest pain',
      'Shortness of breath',
      'Vision problems',
      'Nosebleeds',
      'Irregular heartbeat',
      'Fatigue',
      'Anxiety',
      'Sleep problems'
    ],
    methods: [
      'Herbal formulations',
      'Dietary modifications',
      'Stress management',
      'Yoga and meditation',
      'Lifestyle changes',
      'Panchakarma therapies',
      'Acupuncture',
      'Exercise protocols',
      'Sleep management',
      'Regular monitoring'
    ],
    causes: [
      'Stress and anxiety',
      'Poor diet',
      'Lack of exercise',
      'Obesity',
      'Age',
      'Family history',
      'Smoking',
      'Excessive alcohol',
      'High salt intake',
      'Sleep apnea'
    ],
    prevention: [
      'Regular exercise',
      'Healthy diet',
      'Stress management',
      'Weight control',
      'Limit salt intake',
      'Avoid smoking',
      'Moderate alcohol',
      'Regular check-ups',
      'Adequate sleep',
      'Meditation practice'
    ],
    expectedResults: 'Stable blood pressure levels, reduced medication dependency, improved overall health, better stress management, and prevention of complications. Most patients see improvement within 1-2 months of treatment.',
    ayurvedicPerspective: 'Ayurveda identifies hypertension as a Vata-Pitta imbalance. Our treatment focuses on calming the nervous system, improving circulation, and maintaining proper balance of the doshas through natural means.'
  },
  {
    id: 'asthma',
    title: 'Asthma',
    description: 'Natural relief from respiratory issues through Ayurvedic treatments.',
    detailedDescription: 'Our asthma treatment program offers a comprehensive approach to managing respiratory conditions. We combine traditional Ayurvedic therapies with modern understanding of respiratory health to provide long-term relief and prevention of asthma attacks. Ayurveda views asthma (Tamaka Shwasa) as a condition primarily related to Kapha and Vata dosha imbalances.',
    icon: 'wind',
    symptoms: [
      'Wheezing',
      'Shortness of breath',
      'Chest tightness',
      'Coughing',
      'Difficulty breathing',
      'Rapid breathing',
      'Fatigue',
      'Anxiety',
      'Sleep problems',
      'Exercise intolerance'
    ],
    methods: [
      'Herbal formulations',
      'Panchakarma therapies',
      'Yoga and pranayama',
      'Dietary modifications',
      'Lifestyle changes',
      'Stress management',
      'Acupuncture',
      'Breathing exercises',
      'Herbal steam therapy',
      'Regular monitoring'
    ],
    causes: [
      'Genetic factors',
      'Environmental triggers',
      'Respiratory infections',
      'Allergies',
      'Air pollution',
      'Stress',
      'Weather changes',
      'Exercise',
      'Occupational factors',
      'Dietary factors'
    ],
    prevention: [
      'Identify and avoid triggers',
      'Regular exercise',
      'Healthy diet',
      'Stress management',
      'Proper sleep',
      'Clean environment',
      'Regular check-ups',
      'Breathing exercises',
      'Avoid smoking',
      'Maintain healthy weight'
    ],
    expectedResults: 'Reduced frequency and severity of asthma attacks, improved breathing capacity, better quality of life, reduced medication dependency, and long-term management. Patients typically experience improvement within 2-3 months of treatment.',
    ayurvedicPerspective: 'Ayurveda views asthma as a Kapha-Vata disorder affecting the respiratory system. Our treatment focuses on balancing these doshas, strengthening the respiratory system, and improving overall lung function through natural therapies.'
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