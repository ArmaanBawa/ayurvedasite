import React, { useState } from 'react';
import { Image, X } from 'lucide-react';

const AyurvedaGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "./images/shirodhara.jpg",
      alt: "Abhyanga Massage Therapy",
      title: "Abhyanga Massage",
      description: "Abhyanga is a full-body warm oil massage that promotes circulation, relieves stress, and nourishes the skin. This deeply relaxing therapy helps balance all three doshas.",
      details: [
        "Promotes circulation",
        "Relieves stress",
        "Nourishes skin",
        "Balances doshas"
      ],
      fullDescription: `Abhyanga is a traditional Ayurvedic full-body massage using warm herbal oils. This deeply relaxing therapy helps balance all three doshas and promotes overall wellness.

Key Benefits:
• Improves blood circulation
• Relieves stress and anxiety
• Nourishes and rejuvenates skin
• Promotes better sleep
• Strengthens the immune system

Treatment Process:
1. Pre-treatment consultation
2. Warm oil massage
3. Rest period
4. Herbal bath

Duration: 60-90 minutes
Best for: Stress relief, skin conditions, and general wellness`
    },
    {
      src: "./images/abhyanga.jpg",
      alt: "Shirodhara Therapy",
      title: "Shirodhara",
      description: "Shirodhara involves the continuous pouring of medicated oil on the forehead. This deeply relaxing therapy is excellent for stress, anxiety, and sleep disorders.",
      details: [
        "Reduces stress",
        "Improves sleep",
        "Enhances mental peace",
        "Balances emotions"
      ],
      fullDescription: `Shirodhara is a deeply relaxing therapy that involves the continuous pouring of medicated oil on the forehead. This treatment is particularly effective for stress-related conditions and sleep disorders.

Key Benefits:
• Reduces stress and anxiety
• Improves sleep quality
• Enhances mental peace
• Balances emotions

Treatment Process:
1. Pre-treatment preparation
2. Oil pouring therapy
3. Post-therapy care

Duration: 45-60 minutes
Best for: Stress, anxiety, and sleep disorders`
    },
    {
      src: "/images/swedana.jpg",
      alt: "Swedana Therapy",
      title: "Swedana",
      description: "Swedana is a herbal steam therapy that helps open the body's channels and promotes sweating. This treatment is excellent for detoxification and joint health.",
      details: [
        "Promotes detoxification",
        "Improves joint health",
        "Opens body channels",
        "Enhances circulation"
      ],
      fullDescription: `Swedana is a therapeutic steam treatment that helps open the body's channels and promotes sweating. This treatment is excellent for detoxification and joint health.

Key Benefits:
• Promotes natural detoxification
• Improves joint mobility
• Opens body channels
• Enhances blood circulation

Treatment Process:
1. Pre-treatment preparation
2. Herbal steam therapy
3. Rest period

Duration: 30-45 minutes
Best for: Joint pain, stiffness, and detoxification`
    },
    {
      src: "/images/ud.jpeg",
      alt: "Udvartana Therapy",
      title: "Udvartana",
      description: "Udvartana is a herbal powder massage that helps reduce excess fat, improves skin tone, and promotes circulation. This invigorating therapy is excellent for weight management.",
      details: [
        "Reduces excess fat",
        "Improves skin tone",
        "Promotes circulation",
        "Aids weight management"
      ],
      fullDescription: `Udvartana is an invigorating herbal powder massage that helps reduce excess fat, improves skin tone, and promotes circulation. This treatment is excellent for weight management.

Key Benefits:
• Helps reduce excess fat
• Improves skin tone and texture
• Promotes blood circulation
• Aids in weight management

Treatment Process:
1. Pre-treatment consultation
2. Herbal powder massage
3. Rest period

Duration: 45-60 minutes
Best for: Weight management and skin conditions`
    }
  ];

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Ayurveda Centre</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the ancient purification and rejuvenation therapies that form the cornerstone of Ayurvedic healing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative w-full h-[400px]">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <div className="flex items-center text-white/90">
                    <Image className="w-5 h-5 mr-2" />
                    <span>View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-full object-cover"
                    
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <div className="prose prose-emerald max-w-none">
                    <p className="text-gray-600 mb-6 whitespace-pre-line">
                      {galleryImages[selectedImage].fullDescription}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {galleryImages[selectedImage].details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AyurvedaGallery; 