import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, ExternalLink, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Contact = () => { 
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  console.log(import.meta.env);
  console.log(import.meta);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    // Prepare email data with dynamic fields for EmailJS template
    const emailData = {
      name,
      email,
      message,
    };

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      emailData,
      import.meta.env.VITE_APP_EMAILJS_USER_ID
    )
      .then(
        (response) => {
          // Show success alert using SweetAlert2
          Swal.fire({
            title: t('Success'),
            text: t('Message sent successfully!'),
            icon: 'success',
            confirmButtonText: t('OK'),
          });

          // Show success message in toast as well
          toast.success(t('Message sent successfully!'), {
            description: t("We'll get back to you soon."),
          });

          // Clear the form data
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          // Show error alert using SweetAlert2
          Swal.fire({
            title: t('Error'),
            text: t('Failed to send message. Please try again later.'),
            icon: 'error',
            confirmButtonText: t('OK'),
          });

          // Reset the button state
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="reveal">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-orange-50 text-orange-800 inline-block mb-6 animate-pulse">
                  {t('getInTouch')}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
                {t('buildTogether')}
              </h2>

              <p className="text-lg text-foreground/70 reveal">
                {t('contactParagraph')}
              </p>

              <div className="space-y-6 reveal">
                <div className="flex items-start">
                  <div className="bg-orange-50 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('phone')}</h3>
                    <p className="text-foreground/70">+506 7204 9343</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-50 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>

                  <div>
                    <h3 className="font-medium">{t('phone')}</h3>
                    <p className="text-foreground/70">+1 947 465 2457</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-50 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('location')}</h3>
                    <p className="text-foreground/70">nova.stack.contact@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('yourName')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('yourEmail')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('yourMessage')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('messagePlaceholder')}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button
  type="submit"
  className={'rounded-full py-6 mt-4 w-40 text-base bg-primary hover:bg-primary/90 px-[210px]'}
  disabled={isSubmitting}
>


                    {isSubmitting ? t('sending') : t('sendMessage')}
                    <ExternalLink size={16} className="ml-2" />
                  </Button>


                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
