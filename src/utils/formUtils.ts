import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("uPHNbWmF9sLSk7a63"); // Your EmailJS public key

export const sendConsultationForm = async (formData: any) => {
  try {
    const templateParams = {
      to_email: 'arjunbawa2222@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      condition: formData.condition,
      message: formData.message,
      preferred_date: formData.preferredDate,
      preferred_time: formData.preferredTime,
    };

    const response = await emailjs.send(
      'service_dxrvwfw',
      'template_w1lrl8d',
      templateParams,
      'uPHNbWmF9sLSk7a63' // Your public key
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending consultation form:', error);
    return { success: false, error };
  }
};

export const sendContactForm = async (formData: any) => {
  try {
    const templateParams = {
      to_email: 'arjunbawa2222@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    const response = await emailjs.send(
      'service_dxrvwfw',
      'template_zpdtnst',
      templateParams,
      'uPHNbWmF9sLSk7a63' // Your public key
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending contact form:', error);
    return { success: false, error };
  }
}; 