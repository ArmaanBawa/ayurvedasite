import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone, Mail, Clock } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm your Ayurveda assistant. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { text: inputText, isBot: false }]);

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(inputText.toLowerCase());
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);

    setInputText('');
  };

  const getBotResponse = (message: string): string => {
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! How can I assist you with Ayurvedic treatments today?";
    }
    if (message.includes('treatment') || message.includes('therapy')) {
      return "We offer various Ayurvedic treatments including Panchakarma, Abhyanga, and Shirodhara. Would you like to know more about any specific treatment?";
    }
    if (message.includes('appointment') || message.includes('book') || message.includes('consultation')) {
      return `We offer multiple ways to schedule a consultation:\n\n1. Online Consultation:\n   - Book through our website\n   - Video call appointments available\n\n2. Phone Consultation:\n   - Call us at +91 83609 86081 or +91 78885 79180\n   - Available Mon-Sat, 9 AM - 6 PM\n\n3. In-Person Visit:\n   - Address: 13-B, Lane No. 2/3, Kashmir Avenue, Batala Road, Amritsar\n   - Timings: Mon-Sat, 9 AM - 6 PM\n\nPlease provide your preferred contact method and I'll guide you through the process.`;
    }
    if (message.includes('phone') || message.includes('call')) {
      return "For phone consultations, please call us at +91 83609 86081 or +91 78885 79180. Our team is available Monday to Saturday, 9 AM to 6 PM. We'll schedule your consultation based on your convenience.";
    }
    if (message.includes('email') || message.includes('mail')) {
      return "For email consultations, please send your details to arjunbawa2222@gmail.com. Include your name, contact number, and preferred consultation time. Our team will respond within 24 hours.";
    }
    if (message.includes('visit') || message.includes('in-person')) {
      return "For in-person consultations, please visit our center at 13-B, Lane No. 2/3, Kashmir Avenue, Batala Road, Amritsar or 1109 Lane No. 8 (Left), RB Estate, Loharka Road, Amritsar. We're open Monday to Saturday, 9 AM to 6 PM.";
    }
    if (message.includes('price') || message.includes('cost')) {
      return "Our consultation fees vary based on the type:\n\n1. Initial Consultation: ₹XXXX\n2. Follow-up Consultation: ₹XXXX\n3. Treatment Package: Starting from ₹XXXX\n\nPlease contact us for detailed pricing information.";
    }
    if (message.includes('location') || message.includes('address')) {
      return "Our centers are located at:\n1. 13-B, Lane No. 2/3, Kashmir Avenue, Batala Road, Amritsar\n2. 1109 Lane No. 8 (Left), RB Estate, Loharka Road, Amritsar\n\nWe're open Monday to Saturday, 9 AM to 6 PM. Would you like directions or info";
    }
    if (message.includes('timing') || message.includes('hours') || message.includes('schedule')) {
      return "Our consultation hours are:\n\nMonday to Saturday:\n- Morning: 9 AM to 1 PM\n- Evening: 2 PM to 6 PM\n\nSunday: Closed\n\nWe recommend booking appointments in advance to ensure availability.";
    }
    return "I'm here to help with information about Ayurvedic treatments, appointments, and general wellness. Please ask me anything specific!";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Ayurveda Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-emerald-700 rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b bg-emerald-50">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setMessages(prev => [...prev, 
                    { text: "I want to book a phone consultation", isBot: false },
                    { text: getBotResponse("phone"), isBot: true }
                  ]);
                }}
                className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:bg-emerald-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-xs text-gray-600">Call Us</span>
              </button>
              <button
                onClick={() => {
                  setMessages(prev => [...prev, 
                    { text: "I want to book an email consultation", isBot: false },
                    { text: getBotResponse("email"), isBot: true }
                  ]);
                }}
                className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:bg-emerald-100 transition-colors"
              >
                <Mail className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-xs text-gray-600">Email</span>
              </button>
              <button
                onClick={() => {
                  setMessages(prev => [...prev, 
                    { text: "What are your consultation hours?", isBot: false },
                    { text: getBotResponse("timing"), isBot: true }
                  ]);
                }}
                className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:bg-emerald-100 transition-colors"
              >
                <Clock className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-xs text-gray-600">Hours</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isBot
                      ? 'bg-emerald-100 text-gray-800'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  {message.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < message.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleSend}
                className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 