import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Home as HomeIcon, Star } from 'lucide-react';
import SlokaSection from '@/components/SlokaSection';

const marriageDates = [
  { date: 'Jan 18', day: 'Sunday', nakshatra: 'Rohini' },
  { date: 'Jan 21', day: 'Wednesday', nakshatra: 'Mrigashira' },
  { date: 'Feb 1', day: 'Sunday', nakshatra: 'Uttara Phalguni' },
  { date: 'Feb 8', day: 'Sunday', nakshatra: 'Anuradha' },
  { date: 'Feb 12', day: 'Thursday', nakshatra: 'Uttarashada' },
  { date: 'Apr 19', day: 'Sunday', nakshatra: 'Rohini' },
  { date: 'Apr 26', day: 'Sunday', nakshatra: 'Uttara Phalguni' },
  { date: 'May 3', day: 'Sunday', nakshatra: 'Anuradha' },
  { date: 'May 10', day: 'Sunday', nakshatra: 'Uttarashada' },
  { date: 'Jun 7', day: 'Sunday', nakshatra: 'Rohini' },
  { date: 'Jun 14', day: 'Sunday', nakshatra: 'Mrigashira' },
  { date: 'Nov 22', day: 'Sunday', nakshatra: 'Rohini' },
  { date: 'Dec 6', day: 'Sunday', nakshatra: 'Uttarashada' },
];

const gruhaDates = [
  { date: 'Jan 7', day: 'Wednesday' },
  { date: 'Feb 5', day: 'Thursday' },
  { date: 'Mar 12', day: 'Thursday' },
  { date: 'Apr 16', day: 'Thursday' },
  { date: 'May 7', day: 'Thursday' },
  { date: 'Jun 4', day: 'Thursday' },
  { date: 'Nov 5', day: 'Thursday' },
  { date: 'Dec 3', day: 'Thursday' },
];

const festivals = [
  { date: 'Jan 14', name: 'Makar Sankranti / Pongal', nameTe: 'మకర సంక్రాంతి / పొంగల్' },
  { date: 'Mar 14', name: 'Maha Shivaratri', nameTe: 'మహా శివరాత్రి' },
  { date: 'Mar 30', name: 'Ugadi', nameTe: 'ఉగాది' },
  { date: 'Apr 6', name: 'Sri Rama Navami', nameTe: 'శ్రీ రామ నవమి' },
  { date: 'Aug 17', name: 'Varalakshmi Vratham', nameTe: 'వరలక్ష్మి వ్రతం' },
  { date: 'Aug 25', name: 'Vinayaka Chavithi', nameTe: 'వినాయక చవితి' },
  { date: 'Oct 2', name: 'Dussehra', nameTe: 'దసరా' },
  { date: 'Oct 20', name: 'Diwali', nameTe: 'దీపావళి' },
  { date: 'Nov 5', name: 'Kartika Pournami', nameTe: 'కార్తీక పౌర్ణమి' },
];

const Auspicious = () => {
  const { t, i18n } = useTranslation();
  const isTe = i18n.language === 'te';

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-heading text-3xl font-bold text-primary text-center mb-4"
      >
        {t('auspicious.title')}
      </motion.h1>
      <p className="text-center text-muted-foreground mb-10 font-telugu">{t('auspicious.quote')}</p>

      {/* Marriage Muhurthams */}
      <section className="mb-12">
        <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground mb-6">
          <Calendar className="h-6 w-6 text-saffron" /> {t('auspicious.marriage')}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {marriageDates.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border-2 border-border bg-card p-4 text-center transition-all hover:border-gold"
            >
              <p className="font-heading text-lg font-bold text-primary">{d.date}</p>
              <p className="text-sm text-muted-foreground">{d.day}</p>
              <p className="text-xs text-saffron mt-1">{d.nakshatra}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SlokaSection sanskrit={t('quotes.sarve')} meaning={t('quotes.shubham')} />

      {/* Gruha Pravesham */}
      <section className="mb-12">
        <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground mb-6">
          <HomeIcon className="h-6 w-6 text-saffron" /> {t('auspicious.gruha')}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {gruhaDates.map((d, i) => (
            <div key={i} className="rounded-lg border-2 border-border bg-card p-4 text-center transition-all hover:border-gold">
              <p className="font-heading text-lg font-bold text-primary">{d.date}</p>
              <p className="text-sm text-muted-foreground">{d.day}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Festivals */}
      <section className="mb-12">
        <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground mb-6">
          <Star className="h-6 w-6 text-saffron" /> {t('auspicious.festivals')}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {festivals.map((f, i) => (
            <div key={i} className="rounded-lg border-2 border-border bg-card p-4 transition-all hover:border-gold">
              <p className="font-heading text-lg font-bold text-primary">{f.date}</p>
              <p className="text-sm font-medium text-foreground">{isTe ? f.nameTe : f.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Auspicious;
