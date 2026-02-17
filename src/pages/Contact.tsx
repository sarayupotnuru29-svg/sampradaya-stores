import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919133033225?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-heading text-3xl font-bold text-primary text-center mb-8"
      >
        {t('contact.title')}
      </motion.h1>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-xl border-2 border-gold bg-card p-6 space-y-5">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-saffron" />
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.phone')}</p>
                <a href="tel:9133033225" className="font-semibold text-foreground">9133033225</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-saffron" />
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                <a href="mailto:sampradayastores03@gmail.com" className="font-semibold text-foreground text-sm">sampradayastores03@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-saffron mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.address')}</p>
                <p className="text-sm font-medium text-foreground">{t('contact.addressText')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-saffron" />
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.hours')}</p>
                <p className="text-sm font-medium text-foreground">{t('contact.hoursText')}</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/sampradaya_stores_kadapa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
          >
            <Instagram className="h-5 w-5" /> {t('contact.instagram')}
          </a>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5!2d78.82!3d14.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzEyLjAiTiA3OMKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sampradaya Stores Location"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border-2 border-gold bg-card p-6">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6">{t('contact.sendMessage')}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t('contact.name')}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t('contact.email')}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t('contact.message')}</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-secondary"
            >
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
