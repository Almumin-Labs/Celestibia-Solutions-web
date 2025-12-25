import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// Template IDs
const VISITOR_TEMPLATE_ID = 'YOUR_VISITOR_TEMPLATE_ID'; // For confirmation to visitor
const ADMIN_TEMPLATE_ID = 'YOUR_ADMIN_TEMPLATE_ID'; // For notification to admin

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

interface EmailResult {
  success: boolean;
  error?: string;
}

export const useEmailJS = () => {
  const sendVisitorConfirmation = async (data: ContactFormData): Promise<EmailResult> => {
    try {
      const templateParams = {
        to_name: data.name,
        to_email: data.email,
        from_name: 'Celestibia Technologies',
        company: data.company || 'Not provided',
        message: data.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        VISITOR_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      return { success: true };
    } catch (error: any) {
      console.error('Failed to send visitor confirmation:', error);
      return { success: false, error: error.text || 'Failed to send confirmation email' };
    }
  };

  const sendAdminNotification = async (data: ContactFormData): Promise<EmailResult> => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not provided',
        phone: data.phone || 'Not provided',
        message: data.message,
        reply_to: data.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      return { success: true };
    } catch (error: any) {
      console.error('Failed to send admin notification:', error);
      return { success: false, error: error.text || 'Failed to send admin notification' };
    }
  };

  const sendBothEmails = async (data: ContactFormData): Promise<{ visitor: EmailResult; admin: EmailResult }> => {
    const [visitorResult, adminResult] = await Promise.all([
      sendVisitorConfirmation(data),
      sendAdminNotification(data),
    ]);

    return { visitor: visitorResult, admin: adminResult };
  };

  return {
    sendVisitorConfirmation,
    sendAdminNotification,
    sendBothEmails,
  };
};
