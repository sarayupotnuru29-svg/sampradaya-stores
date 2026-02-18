import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SlokaSection from '@/components/SlokaSection';
import logo from '@/assets/logo.jpeg';
import aboutStore from '@/assets/mystore.jpeg';
import aboutPuja from '@/assets/about-puja.jpg';
import aboutBrass from '@/assets/about-brass.jpg';

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

      <div className="max-w-4xl mx-auto">
        {/* Hero image gallery */}
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border-2 border-gold"
          >
            <img src={aboutStore} alt="Our Store" className="h-48 w-full object-cover" loading="lazy" />
            <p className="text-center text-xs text-muted-foreground py-2 font-heading">{t('about.storeLabel')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl overflow-hidden border-2 border-gold"
          >
            <img src={aboutPuja} alt="Puja Items" className="h-48 w-full object-cover" loading="lazy" />
            <p className="text-center text-xs text-muted-foreground py-2 font-heading">{t('about.pujaLabel')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl overflow-hidden border-2 border-gold"
          >
            <img src={aboutBrass} alt="Brass Collection" className="h-48 w-full object-cover" loading="lazy" />
            <p className="text-center text-xs text-muted-foreground py-2 font-heading">{t('about.brassLabel')}</p>
          </motion.div>
        </div>

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
