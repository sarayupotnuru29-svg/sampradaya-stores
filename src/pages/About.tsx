import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SlokaSection from '@/components/SlokaSection';
import logo from '@/assets/logo.jpeg';

const About = () => {
  const { t } = useTranslation();

  const items = [t('about.item1'), t('about.item2'), t('about.item3'), t('about.item4')];

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-heading text-3xl font-bold text-primary text-center mb-8"
      >
        {t('about.title')}
      </motion.h1>

      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Sampradaya Stores" className="h-28 w-28 rounded-full gold-border" />
        </div>

        <p className="text-lg text-foreground text-center mb-8">{t('about.description')}</p>

        <div className="rounded-xl border-2 border-gold bg-card p-8 mb-8">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t('about.provide')}</h3>
          <div className="space-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-saffron shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border-2 border-border bg-card p-8 mb-8">
          <h3 className="font-heading text-xl font-semibold text-primary mb-3">{t('about.mission')}</h3>
          <p className="text-muted-foreground">{t('about.missionText')}</p>
        </div>

        <SlokaSection sanskrit={t('quotes.dharmo')} meaning={t('quotes.shubham')} />

        <div className="rounded-xl border-2 border-gold bg-card p-8">
          <h3 className="font-heading text-xl font-semibold text-primary mb-3">{t('about.founder')}</h3>
          <p className="text-muted-foreground italic">"{t('about.founderText')}"</p>
        </div>
      </div>
    </div>
  );
};

export default About;
