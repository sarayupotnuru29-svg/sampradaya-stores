import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t-2 border-gold bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="font-heading text-lg font-bold">Sampradaya Stores</h3>
                <p className="font-telugu text-xs opacity-80">సాంప్రదాయ స్టోర్స్</p>
              </div>
            </div>
            <p className="text-sm opacity-80">{t('footer.tagline')}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-heading text-base font-semibold">{t('nav.home')}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">{t('nav.home')}</Link>
              <Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">{t('nav.products')}</Link>
              <Link to="/auspicious" className="text-sm opacity-80 hover:opacity-100 transition-opacity">{t('nav.auspicious')}</Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">{t('nav.about')}</Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">{t('nav.contact')}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-base font-semibold">{t('contact.title')}</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:9133033225" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
                <Phone className="h-4 w-4" /> 9133033225
              </a>
              <a href="mailto:sampradayastores03@gmail.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
                <Mail className="h-4 w-4" /> sampradayastores03@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t('contact.addressText')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="temple-divider mt-8 mb-4" />
        <p className="text-center text-xs opacity-60">
          © 2026 Sampradaya Stores. {t('footer.rights')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
