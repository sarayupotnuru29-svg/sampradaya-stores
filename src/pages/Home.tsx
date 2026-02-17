import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Gift, Bell, Star } from 'lucide-react';
import SlokaSection from '@/components/SlokaSection';
import heroBg from '@/assets/hero-bg.jpg';
import pujaSamagri from '@/assets/products/puja-samagri.jpg';
import brassItems from '@/assets/products/brass-items.jpg';
import returnGifts from '@/assets/products/return-gifts.jpg';
import festivalSpecial from '@/assets/products/festival-special.jpg';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Bell, title: t('features.brass'), desc: t('features.brassDesc'), img: brassItems },
    { icon: Flame, title: t('features.puja'), desc: t('features.pujaDesc'), img: pujaSamagri },
    { icon: Gift, title: t('features.gifts'), desc: t('features.giftsDesc'), img: returnGifts },
    { icon: Star, title: t('features.festival'), desc: t('features.festivalDesc'), img: festivalSpecial },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-telugu text-3xl font-bold text-gold md:text-5xl diya-glow mb-4"
          >
            ఓం శ్రీ గణేశాయ నమః
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-2xl font-bold text-primary-foreground md:text-4xl max-w-3xl mx-auto"
          >
            {t('hero.headline')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-base text-primary-foreground/80 md:text-lg"
          >
            {t('hero.subheading')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/products"
              className="rounded-lg bg-gold px-8 py-3 font-heading text-sm font-bold text-accent-foreground transition-all hover:bg-gold-dark gold-glow"
            >
              {t('hero.viewProducts')}
            </Link>
            <a
              href="https://wa.me/919133033225"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gold bg-transparent px-8 py-3 font-heading text-sm font-bold text-primary-foreground transition-all hover:bg-gold hover:text-accent-foreground"
            >
              {t('hero.contactWhatsApp')} 💬
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sloka */}
      <SlokaSection sanskrit={t('hero.sanskrit')} meaning={t('hero.sanskritMeaning')} />

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border-2 border-border bg-card text-center transition-all hover:border-gold hover:gold-glow"
            >
              <div className="h-40 overflow-hidden">
                <img src={f.img} alt={f.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-5">
                <f.icon className="mx-auto mb-3 h-8 w-8 text-saffron" />
                <h3 className="font-heading text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <div className="py-8 text-center">
        <p className="font-telugu text-xl text-saffron font-semibold">{t('quotes.dharmo')}</p>
      </div>
    </div>
  );
};

export default Home;
