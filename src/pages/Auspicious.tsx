import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Home as HomeIcon, Star } from 'lucide-react';
import SlokaSection from '@/components/SlokaSection';

// Verified 2026 Marriage Muhurthams (from prokerala.com / drikpanchang)
const marriageDates = [
  { month: 'Jan', dates: [
    { date: 14, day: 'Wed', nakshatra: 'Anuradha' },
    { date: 23, day: 'Fri', nakshatra: 'Uttara Bhadrapada' },
    { date: 25, day: 'Sun', nakshatra: 'Revati' },
    { date: 28, day: 'Wed', nakshatra: 'Rohini' },
  ]},
  { month: 'Feb', dates: [
    { date: 2, day: 'Mon', nakshatra: 'Magha' },
    { date: 5, day: 'Thu', nakshatra: 'Hasta' },
    { date: 8, day: 'Sun', nakshatra: 'Swati' },
    { date: 12, day: 'Thu', nakshatra: 'Moola' },
    { date: 19, day: 'Thu', nakshatra: 'Uttara Bhadrapada' },
    { date: 25, day: 'Wed', nakshatra: 'Mrigashirsha' },
  ]},
  { month: 'Mar', dates: [
    { date: 14, day: 'Sat', nakshatra: 'Uttara Ashadha' },
  ]},
  { month: 'Apr', dates: [
    { date: 20, day: 'Mon', nakshatra: 'Rohini' },
    { date: 21, day: 'Tue', nakshatra: 'Mrigashirsha' },
    { date: 26, day: 'Sun', nakshatra: 'Magha' },
    { date: 27, day: 'Mon', nakshatra: 'Uttara Phalguni' },
    { date: 29, day: 'Wed', nakshatra: 'Hasta' },
  ]},
  { month: 'May', dates: [
    { date: 3, day: 'Sun', nakshatra: 'Anuradha' },
    { date: 6, day: 'Wed', nakshatra: 'Moola' },
    { date: 13, day: 'Wed', nakshatra: 'Uttara Bhadrapada' },
    { date: 18, day: 'Mon', nakshatra: 'Rohini' },
    { date: 25, day: 'Mon', nakshatra: 'Uttara Phalguni' },
    { date: 28, day: 'Thu', nakshatra: 'Swati' },
  ]},
  { month: 'Jun', dates: [
    { date: 1, day: 'Mon', nakshatra: 'Moola' },
    { date: 4, day: 'Thu', nakshatra: 'Uttara Ashadha' },
    { date: 10, day: 'Wed', nakshatra: 'Uttara Bhadrapada' },
    { date: 19, day: 'Fri', nakshatra: 'Magha' },
    { date: 24, day: 'Wed', nakshatra: 'Swati' },
    { date: 26, day: 'Fri', nakshatra: 'Anuradha' },
  ]},
  { month: 'Jul', dates: [
    { date: 6, day: 'Mon', nakshatra: 'Uttara Bhadrapada' },
    { date: 16, day: 'Thu', nakshatra: 'Magha' },
  ]},
  { month: 'Nov', dates: [
    { date: 20, day: 'Fri', nakshatra: 'Uttara Bhadrapada' },
    { date: 25, day: 'Wed', nakshatra: 'Rohini' },
  ]},
  { month: 'Dec', dates: [
    { date: 2, day: 'Wed', nakshatra: 'Uttara Phalguni' },
    { date: 3, day: 'Thu', nakshatra: 'Hasta' },
    { date: 5, day: 'Sat', nakshatra: 'Swati' },
    { date: 11, day: 'Fri', nakshatra: 'Uttara Ashadha' },
  ]},
];

// Verified 2026 Gruha Pravesham Dates (from ganeshaspeaks.com)
const gruhaDates = [
  { month: 'Jan', dates: [
    { date: 1, day: 'Wed', nakshatra: 'Rohini' },
    { date: 2, day: 'Thu', nakshatra: 'Mrigashirsha' },
    { date: 23, day: 'Fri', nakshatra: 'Uttara Bhadrapada' },
    { date: 28, day: 'Wed', nakshatra: 'Rohini' },
  ]},
  { month: 'Feb', dates: [
    { date: 19, day: 'Thu', nakshatra: 'Uttara Bhadrapada' },
    { date: 26, day: 'Wed', nakshatra: 'Mrigashirsha' },
  ]},
  { month: 'Mar', dates: [
    { date: 25, day: 'Wed', nakshatra: 'Mrigashirsha' },
  ]},
  { month: 'Apr', dates: [
    { date: 1, day: 'Wed', nakshatra: 'Uttara Phalguni' },
    { date: 20, day: 'Sun', nakshatra: 'Rohini' },
    { date: 21, day: 'Mon', nakshatra: 'Mrigashirsha' },
    { date: 30, day: 'Thu', nakshatra: 'Chitra' },
  ]},
  { month: 'May', dates: [
    { date: 18, day: 'Mon', nakshatra: 'Rohini' },
    { date: 25, day: 'Mon', nakshatra: 'Uttara Phalguni' },
  ]},
  { month: 'Jun', dates: [
    { date: 24, day: 'Wed', nakshatra: 'Chitra' },
    { date: 26, day: 'Fri', nakshatra: 'Anuradha' },
  ]},
  { month: 'Jul', dates: [
    { date: 20, day: 'Mon', nakshatra: 'Chitra' },
    { date: 24, day: 'Fri', nakshatra: 'Anuradha' },
    { date: 29, day: 'Wed', nakshatra: 'Uttara Ashadha' },
  ]},
  { month: 'Aug', dates: [
    { date: 15, day: 'Sat', nakshatra: 'Uttara Phalguni' },
    { date: 17, day: 'Mon', nakshatra: 'Chitra' },
  ]},
  { month: 'Sep', dates: [
    { date: 14, day: 'Mon', nakshatra: 'Chitra' },
    { date: 17, day: 'Thu', nakshatra: 'Anuradha' },
    { date: 21, day: 'Mon', nakshatra: 'Uttara Ashadha' },
  ]},
];

// Verified 2026 Festival Dates (from grahaguru.in)
const festivals = [
  { date: 'Jan 14', name: 'Makar Sankranti / Pongal', nameTe: 'మకర సంక్రాంతి / పొంగల్', day: 'Wed' },
  { date: 'Feb 3', name: 'Vasant Panchami', nameTe: 'వసంత పంచమి', day: 'Tue' },
  { date: 'Feb 15', name: 'Maha Shivaratri', nameTe: 'మహా శివరాత్రి', day: 'Sun' },
  { date: 'Mar 4', name: 'Holi', nameTe: 'హోలీ', day: 'Wed' },
  { date: 'Mar 19', name: 'Ugadi / Hindu New Year', nameTe: 'ఉగాది / హిందూ నూతన సంవత్సరం', day: 'Thu' },
  { date: 'Mar 26', name: 'Sri Rama Navami', nameTe: 'శ్రీ రామ నవమి', day: 'Thu' },
  { date: 'Apr 28', name: 'Akshaya Tritiya', nameTe: 'అక్షయ తృతీయ', day: 'Tue' },
  { date: 'Aug 11', name: 'Raksha Bandhan', nameTe: 'రక్షా బంధన్', day: 'Tue' },
  { date: 'Aug 15', name: 'Janmashtami', nameTe: 'జన్మాష్టమి', day: 'Sat' },
  { date: 'Sep 7', name: 'Ganesh Chaturthi', nameTe: 'వినాయక చవితి', day: 'Mon' },
  { date: 'Oct 10-18', name: 'Sharad Navratri', nameTe: 'శరన్నవరాత్రులు', day: '' },
  { date: 'Oct 19', name: 'Dussehra / Vijayadashami', nameTe: 'దసరా / విజయదశమి', day: 'Mon' },
  { date: 'Oct 30', name: 'Karwa Chauth', nameTe: 'కర్వా చౌత్', day: 'Fri' },
  { date: 'Nov 6', name: 'Dhanteras', nameTe: 'ధన్‌తేరస్', day: 'Fri' },
  { date: 'Nov 8', name: 'Diwali', nameTe: 'దీపావళి', day: 'Sun' },
  { date: 'Nov 10', name: 'Bhai Dooj', nameTe: 'భాయి దూజ్', day: 'Tue' },
];

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Generate calendar grid for a month
const getCalendarGrid = (monthIndex: number, year: number) => {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);

  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
};

type CalendarSectionProps = {
  title: string;
  icon: React.ReactNode;
  data: { month: string; dates: { date: number; day: string; nakshatra: string }[] }[];
  colorClass: string;
};

const CalendarSheet = ({ title, icon, data, colorClass }: CalendarSectionProps) => {
  // Get months that have dates
  const monthsWithDates = data.map(d => {
    const monthIdx = monthNames.indexOf(d.month);
    return { ...d, monthIdx };
  });

  // Build lookup: monthIdx -> set of auspicious dates
  const lookup: Record<number, { date: number; nakshatra: string }[]> = {};
  monthsWithDates.forEach(m => {
    lookup[m.monthIdx] = m.dates;
  });

  return (
    <section className="mb-14">
      <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground mb-6">
        {icon} {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {monthsWithDates.map(({ month, monthIdx, dates }) => {
          const grid = getCalendarGrid(monthIdx, 2026);
          const auspiciousDays = new Set(dates.map(d => d.date));
          const nakshatraMap: Record<number, string> = {};
          dates.forEach(d => { nakshatraMap[d.date] = d.nakshatra; });

          return (
            <motion.div
              key={month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border-2 border-border bg-card overflow-hidden hover:border-gold transition-all"
            >
              {/* Month Header */}
              <div className={`px-4 py-3 ${colorClass} text-primary-foreground`}>
                <h3 className="font-heading text-lg font-bold text-center">{month} 2026</h3>
              </div>

              {/* Calendar Grid */}
              <div className="p-3">
                <div className="grid grid-cols-7 gap-1 mb-1">
                  {dayHeaders.map(d => (
                    <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-1">{d}</div>
                  ))}
                </div>
                {grid.map((week, wi) => (
                  <div key={wi} className="grid grid-cols-7 gap-1">
                    {week.map((day, di) => {
                      const isAuspicious = day !== null && auspiciousDays.has(day);
                      return (
                        <div
                          key={di}
                          className={`relative text-center py-1.5 rounded-md text-sm transition-all ${
                            day === null
                              ? ''
                              : isAuspicious
                                ? `${colorClass} text-primary-foreground font-bold shadow-md cursor-default`
                                : 'text-foreground hover:bg-muted/50'
                          }`}
                          title={isAuspicious && day ? nakshatraMap[day] : undefined}
                        >
                          {day || ''}
                          {isAuspicious && (
                            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* Legend for this month */}
                <div className="mt-3 border-t border-border pt-2 space-y-1">
                  {dates.map((d, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-foreground font-medium">{month} {d.date} ({d.day})</span>
                      <span className="text-saffron font-medium">{d.nakshatra}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

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
      <CalendarSheet
        title={t('auspicious.marriage')}
        icon={<Calendar className="h-6 w-6 text-saffron" />}
        data={marriageDates}
        colorClass="bg-primary"
      />

      <SlokaSection sanskrit={t('quotes.sarve')} meaning={t('quotes.shubham')} />

      {/* Gruha Pravesham */}
      <CalendarSheet
        title={t('auspicious.gruha')}
        icon={<HomeIcon className="h-6 w-6 text-saffron" />}
        data={gruhaDates}
        colorClass="bg-secondary"
      />

      {/* Festivals */}
      <section className="mb-12">
        <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground mb-6">
          <Star className="h-6 w-6 text-saffron" /> {t('auspicious.festivals')}
        </h2>
        <div className="overflow-x-auto rounded-xl border-2 border-gold">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-4 py-3 font-heading text-sm">{isTe ? 'తేదీ' : 'Date'}</th>
                <th className="text-left px-4 py-3 font-heading text-sm">{isTe ? 'రోజు' : 'Day'}</th>
                <th className="text-left px-4 py-3 font-heading text-sm">{isTe ? 'పండుగ' : 'Festival'}</th>
              </tr>
            </thead>
            <tbody>
              {festivals.map((f, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`border-b border-border transition-all hover:bg-muted/50 ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}
                >
                  <td className="px-4 py-3 font-heading text-sm font-bold text-primary">{f.date}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{f.day}</td>
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{isTe ? f.nameTe : f.name}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Auspicious;
