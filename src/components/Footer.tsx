import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from 'emailjs-com'; // Import EmailJS
import Swal from 'sweetalert2'; // Import SweetAlert

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();

    const emailInput = event.target[0] as HTMLInputElement;
    const userEmail = emailInput.value;

    if (!userEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address!',
      });
      return;
    }

    // Get the values from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_REPLY_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      Swal.fire({
        icon: 'error',
        title: 'Configuration Error',
        text: 'Email service configuration is missing!',
      });
      return;
    }
    console.log(`Service ID: ${serviceId}, Template ID: ${templateId}, User ID: ${userId}`);

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, { user_email: userEmail }, userId)
    .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Subscribed!',
            text: 'You have successfully subscribed to our mailing list.',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'There was an issue with your subscription. Please try again later.',
          });
        }
      );
  };

  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold">
              NovaStack<span className="text-orange-500">.</span>
            </h3>
            <p className="text-gray-400">
              {t('heroParagraph')}
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Full-Stack Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Enterprise Architecture</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">API Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">System Modernization</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('about')}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">{t('aboutUs')}</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-orange-400 transition-colors">{t('ourWork')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">{t('contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('stayUpdated')}</h3>
            <p className="text-gray-400 mb-4">{t('subscribe')}</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                name="user_email"
                placeholder={t('yourEmail')}
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none"
              />
              <Button type="submit" className="bg-orange-600 hover:bg-orange-700 rounded-l-none">
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} NovaStack. {t('allRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
