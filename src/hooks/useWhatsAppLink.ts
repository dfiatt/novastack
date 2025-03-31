
const useWhatsAppLink = () => {
  const createWhatsAppLink = (phone: string, message: string) => {
    // Format the phone number (remove spaces, dashes, etc.)
    const formattedPhone = phone.replace(/\D/g, '');
    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    // Generate the WhatsApp URL
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  };

  return { createWhatsAppLink };
};

export default useWhatsAppLink;
