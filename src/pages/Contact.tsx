// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, Clock, Instagram, ChevronDown } from 'lucide-react';

// const productOptions = [
//   { value: 'puja-thali', en: 'Puja Thali Set', te: 'పూజా థాలి సెట్' },
//   { value: 'kumkum-set', en: 'Kumkum & Turmeric Set', te: 'కుంకుమ & పసుపు సెట్' },
//   { value: 'incense', en: 'Incense Sticks Pack', te: 'అగరబత్తీల ప్యాక్' },
//   { value: 'camphor', en: 'Camphor Box', te: 'కర్పూరం బాక్స్' },
//   { value: 'brass-diya', en: 'Brass Diya Lamp', te: 'ఇత్తడి దీపం' },
//   { value: 'brass-kalash', en: 'Brass Kalash', te: 'ఇత్తడి కలశం' },
//   { value: 'brass-bell', en: 'Brass Bell', te: 'ఇత్తడి గంట' },
//   { value: 'brass-stand', en: 'Brass Pooja Stand', te: 'ఇత్తడి పూజా స్టాండ్' },
//   { value: 'kumkum-box', en: 'Wedding Kumkum Box', te: 'వివాహ కుంకుమ బాక్స్' },
//   { value: 'mini-brass-gift', en: 'Mini Brass Set Gift', te: 'మినీ ఇత్తడి సెట్ గిఫ్ట్' },
//   { value: 'diya-gift', en: 'Decorative Diya Gift', te: 'అలంకార దీపం గిఫ్ట్' },
//   { value: 'bell-stand', en: 'Temple Bell Stand', te: 'గుడి గంట స్టాండ్' },
//   { value: 'garland-holder', en: 'Garland Holder', te: 'దండ హోల్డర్' },
//   { value: 'oil-lamp', en: 'Oil Lamp Stand', te: 'నూనె దీపం స్టాండ్' },
//   { value: 'diwali-kit', en: 'Diwali Puja Kit', te: 'దీపావళి పూజా కిట్' },
//   { value: 'navratri-set', en: 'Navratri Special Set', te: 'నవరాత్రి స్పెషల్ సెట్' },
//   { value: 'sankranti-kit', en: 'Sankranti Puja Kit', te: 'సంక్రాంతి పూజా కిట్' },
//   { value: 'vinayaka-set', en: 'Vinayaka Chavithi Set', te: 'వినాయక చవితి సెట్' },
//   { value: 'other', en: 'Other (Specify in message)', te: 'ఇతర (సందేశంలో తెలపండి)' },
// ];

// const Contact = () => {
//   const { t, i18n } = useTranslation();
//   const isTe = i18n.language === 'te';
//   const [formData, setFormData] = useState({ name: '', email: '', product: '', message: '' });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const selectedProduct = productOptions.find(p => p.value === formData.product);
//     const productName = selectedProduct ? (isTe ? selectedProduct.te : selectedProduct.en) : '';
//     const msg = `Name: ${formData.name}\nEmail: ${formData.email}\nProduct: ${productName}\nMessage: ${formData.message}`;
//     window.open(`https://wa.me/919133033225?text=${encodeURIComponent(msg)}`, '_blank');
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <motion.h1
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="font-heading text-3xl font-bold text-primary text-center mb-8"
//       >
//         {t('contact.title')}
//       </motion.h1>

//       <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
//         {/* Contact Info */}
//         <div className="space-y-6">
//           <div className="rounded-xl border-2 border-gold bg-card p-6 space-y-5">
//             <div className="flex items-center gap-3">
//               <Phone className="h-5 w-5 text-saffron" />
//               <div>
//                 <p className="text-sm text-muted-foreground">{t('contact.phone')}</p>
//                 <a href="tel:9133033225" className="font-semibold text-foreground">9133033225</a>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <Mail className="h-5 w-5 text-saffron" />
//               <div>
//                 <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
//                 <a href="mailto:sampradayastores03@gmail.com" className="font-semibold text-foreground text-sm">sampradayastores03@gmail.com</a>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <MapPin className="h-5 w-5 text-saffron mt-0.5" />
//               <div>
//                 <p className="text-sm text-muted-foreground">{t('contact.address')}</p>
//                 <p className="text-sm font-medium text-foreground">{t('contact.addressText')}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <Clock className="h-5 w-5 text-saffron" />
//               <div>
//                 <p className="text-sm text-muted-foreground">{t('contact.hours')}</p>
//                 <p className="text-sm font-medium text-foreground">{t('contact.hoursText')}</p>
//               </div>
//             </div>
//           </div>

//           <a
//             href="https://www.instagram.com/sampradaya_stores_kadapa"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
//           >
//             <Instagram className="h-5 w-5" /> {t('contact.instagram')}
//           </a>

//           {/* Map */}
//           <div className="rounded-xl overflow-hidden border-2 border-border">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5!2d78.82!3d14.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzEyLjAiTiA3OMKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               title="Sampradaya Stores Location"
//             />
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="rounded-xl border-2 border-gold bg-card p-6">
//           <h3 className="font-heading text-xl font-semibold text-foreground mb-6">{t('contact.sendMessage')}</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-foreground mb-1">{t('contact.name')}</label>
//               <input
//                 type="text"
//                 required
//                 value={formData.name}
//                 onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
//                 className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-foreground mb-1">{t('contact.email')}</label>
//               <input
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
//                 className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-foreground mb-1">{t('contact.product')}</label>
//               <div className="relative">
//                 <select
//                   required
//                   value={formData.product}
//                   onChange={e => setFormData(p => ({ ...p, product: e.target.value }))}
//                   className="w-full appearance-none rounded-lg border border-input bg-background px-4 py-2.5 pr-10 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
//                 >
//                   <option value="">{isTe ? '-- ఉత్పత్తిని ఎంచుకోండి --' : '-- Select a Product --'}</option>
//                   {productOptions.map(p => (
//                     <option key={p.value} value={p.value}>
//                       {isTe ? p.te : p.en}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-foreground mb-1">{t('contact.message')}</label>
//               <textarea
//                 required
//                 rows={5}
//                 value={formData.message}
//                 onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
//                 className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-secondary"
//             >
//               {t('contact.send')}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;








import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, ChevronDown } from 'lucide-react';

const productOptions = [
  { value: 'puja-thali', en: 'Puja Thali Set', te: 'పూజా థాలి సెట్' },
  { value: 'kumkum-set', en: 'Kumkum & Turmeric Set', te: 'కుంకుమ & పసుపు సెట్' },
  { value: 'incense', en: 'Incense Sticks Pack', te: 'అగరబత్తీల ప్యాక్' },
  { value: 'camphor', en: 'Camphor Box', te: 'కర్పూరం బాక్స్' },
  { value: 'brass-diya', en: 'Brass Diya Lamp', te: 'ఇత్తడి దీపం' },
  { value: 'brass-kalash', en: 'Brass Kalash', te: 'ఇత్తడి కలశం' },
  { value: 'brass-bell', en: 'Brass Bell', te: 'ఇత్తడి గంట' },
  { value: 'brass-stand', en: 'Brass Pooja Stand', te: 'ఇత్తడి పూజా స్టాండ్' },
  { value: 'kumkum-box', en: 'Wedding Kumkum Box', te: 'వివాహ కుంకుమ బాక్స్' },
  { value: 'mini-brass-gift', en: 'Mini Brass Set Gift', te: 'మినీ ఇత్తడి సెట్ గిఫ్ట్' },
  { value: 'diya-gift', en: 'Decorative Diya Gift', te: 'అలంకార దీపం గిఫ్ట్' },
  { value: 'bell-stand', en: 'Temple Bell Stand', te: 'గుడి గంట స్టాండ్' },
  { value: 'garland-holder', en: 'Garland Holder', te: 'దండ హోల్డర్' },
  { value: 'oil-lamp', en: 'Oil Lamp Stand', te: 'నూనె దీపం స్టాండ్' },
  { value: 'diwali-kit', en: 'Diwali Puja Kit', te: 'దీపావళి పూజా కిట్' },
  { value: 'navratri-set', en: 'Navratri Special Set', te: 'నవరాత్రి స్పెషల్ సెట్' },
  { value: 'sankranti-kit', en: 'Sankranti Puja Kit', te: 'సంక్రాంతి పూజా కిట్' },
  { value: 'vinayaka-set', en: 'Vinayaka Chavithi Set', te: 'వినాయక చవితి సెట్' },
  { value: 'other', en: 'Other (Specify in message)', te: 'ఇతర (సందేశంలో తెలపండి)' },
];

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isTe = i18n.language === 'te';
  const [formData, setFormData] = useState({ name: '', email: '', product: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedProduct = productOptions.find(p => p.value === formData.product);
    const productName = selectedProduct ? (isTe ? selectedProduct.te : selectedProduct.en) : '';
    const msg = `Name: ${formData.name}\nEmail: ${formData.email}\nProduct: ${productName}\nMessage: ${formData.message}`;
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
          <div className="rounded-xl border-2 border-gold bg-card p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-saffron" />
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.phone')}</p>
                <a href="tel:9133033225" className="font-semibold text-foreground hover:text-saffron transition-colors">9133033225</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-saffron" />
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                <a href="mailto:sampradayastores03@gmail.com" className="font-semibold text-foreground text-sm hover:text-saffron transition-colors">sampradayastores03@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-saffron mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.address')}</p>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  <strong>Sampradaya Stores (Puja samagri store)</strong><br />
                  FR7J+7CW, New Bus Stand Rd, Y.S.Nagar,<br />
                  Kadapa, Andhra Pradesh 516001
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-saffron" />
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.hours')}</p>
                <p className="text-sm font-medium text-foreground">10:00 AM - 9:00 PM (Daily)</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/sampradaya_stores_kadapa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:shadow-lg active:scale-95"
          >
            <Instagram className="h-5 w-5" /> {t('contact.instagram')}
          </a>

          {/* Targeted Map Highlight for Sampradaya Stores */}
          <div className="rounded-xl overflow-hidden border-2 border-border shadow-md h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.4764836798835!2d78.82857597525357!3d14.463276886008851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37300193ce853%3A0x26a671ab9f693244!2sSampradaya%20Stores%20(Puja%20samagri%20store)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sampradaya Stores Map"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border-2 border-gold bg-card p-6 shadow-sm">
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
              <label className="block text-sm font-medium text-foreground mb-1">{t('contact.product')}</label>
              <div className="relative">
                <select
                  required
                  value={formData.product}
                  onChange={e => setFormData(p => ({ ...p, product: e.target.value }))}
                  className="w-full appearance-none rounded-lg border border-input bg-background px-4 py-2.5 pr-10 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="">{isTe ? '-- ఉత్పత్తిని ఎంచుకోండి --' : '-- Select a Product --'}</option>
                  {productOptions.map(p => (
                    <option key={p.value} value={p.value}>
                      {isTe ? p.te : p.en}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t('contact.message')}</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-secondary active:scale-[0.98]"
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