import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import SlokaSection from '@/components/SlokaSection';

import pujaSamagriImg from '@/assets/products/puja-samagri.jpg';
import brassItemsImg from '@/assets/products/brass-items.jpg';
import returnGiftsImg from '@/assets/products/return-gifts.jpg';
import templeAccessoriesImg from '@/assets/products/temple-accessories.jpg';
import festivalSpecialImg from '@/assets/products/festival-special.jpg';
import diwalipujakitImg from '@/assets/products/diwali_puja_kit.webp';
import navaratripujakitImg from '@/assets/products/Navratri_puja_set.webp';
import sankranthipujakitImg from '@/assets/products/Sankranti_Puja_Kit.png';
import vinayakachavithipujakit from '@/assets/products/VinayakaChavithi_Pooja_Kit.jpg';
import varalakshivratapujakitImg from '@/assets/products/Varalakshmi_Vratham_Kit.jpg';
import ugadipujakitImg from '@/assets/products/Ugadi_Special_Set.webp';
import shivarathrikitImg from '@/assets/products/Shivaratri_Puja_Kit.webp';
import holipujakitImg from '@/assets/products/holi_set.jpg';
import garlandImg from '@/assets/products/Garland_Holder.webp';
import oillampstandImg from '@/assets/products/OilLampStand.webp';
import woodenstandImg from '@/assets/products/puja_mandir_wooden.jpg';
import coconutImg from '@/assets/products/coconut_breaker.jpg';
import HavanKundImg from '@/assets/products/Havan_Kund_Set.jpg';
import WeddingKumkumImg from '@/assets/products/Wedding_Kumkum_Box.jpg';
import minisetImg from '@/assets/products/Mini_Brass_Set.jpg';
import diyaImg from '@/assets/products/Decorative_Diya.jpg';
import PoojaGiftHamperImg from '@/assets/products/Pooja_Gift_Hamper.webp';
import silvercoatedImg from '@/assets/products/Silver_Coated_Gift_Set.webp';
import kumkumabarinaImg from '@/assets/products/KumkumBharaniGift.jpg';
import brassdiyalampImg from '@/assets/products/BrassDiyaLamp.jpg';
import brasskalashImg from '@/assets/products/BrassKalash.webp';
import brassbellImg from '@/assets/products/BrassBell.jpg';
import brasspoojastandImg from '@/assets/products/BrassPoojaStand.jpg';
import brassarathistnadImg from '@/assets/products/BrassAartiPlate.webp';
import brassstandImg from '@/assets/products/BrassIncenseHolder.jpg';
import brasspanchapatraImg from '@/assets/products/BrassPanchpatraSet.webp';
import brasskumkumaboxImg from '@/assets/products/BrassKumkumBox.jpg';
import poojatalisetImg from '@/assets/products/PujaThaliSet.webp';
import kumkumturmericsetImg from '@/assets/products/KumkumTurmericSet.jpg';
import insencestickImg from '@/assets/products/IncenseSticksPack.jpg';
import chamberboxImg from '@/assets/products/CamphorBox.jpg';
import cottonwicksImg from '@/assets/products/CottonWicksPack.webp';
import sandalwoodpowderImg from '@/assets/products/SandalwoodPowder.webp';
import sacredtheardImg from '@/assets/products/SacredThread.jpg';
import gheediyaImg from '@/assets/products/GheeDiyaWicks.jpg';
import vibhudikumkumasetImg from '@/assets/products/VibhutiKumkumSet.jpg';
import pujaoilImg from '@/assets/products/puja_oil.webp';
const categories = ['all', 'pujaSamagri', 'brassItems', 'returnGifts', 'templeAccessories', 'festivalSpecial'];

const products = [
  // Puja Samagri
  { id: '1', name: 'Puja Thali Set', nameTe: 'పూజా థాలి సెట్', category: 'pujaSamagri', image: poojatalisetImg },
  { id: '2', name: 'Kumkum & Turmeric Set', nameTe: 'కుంకుమ & పసుపు సెట్', category: 'pujaSamagri', image: kumkumturmericsetImg},
  { id: '3', name: 'Incense Sticks Pack', nameTe: 'అగరబత్తీల ప్యాక్', category: 'pujaSamagri', image: insencestickImg },
  { id: '4', name: 'Camphor Box', nameTe: 'కర్పూరం బాక్స్', category: 'pujaSamagri', image: chamberboxImg},
  { id: '5', name: 'Cotton Wicks Pack', nameTe: 'దూది వత్తుల ప్యాక్', category: 'pujaSamagri', image: cottonwicksImg },
  { id: '6', name: 'Sandalwood Powder', nameTe: 'గంధపు చెక్క పొడి', category: 'pujaSamagri', image: sandalwoodpowderImg },
  { id: '7', name: 'Sacred Thread (Janeu)', nameTe: 'యజ్ఞోపవీతం', category: 'pujaSamagri', image: sacredtheardImg },
  { id: '8', name: 'Ghee Diya Wicks', nameTe: 'నెయ్యి దీప వత్తులు', category: 'pujaSamagri', image: gheediyaImg },
  { id: '9', name: 'Vibhuti & Kumkum Set', nameTe: 'విభూతి & కుంకుమ సెట్', category: 'pujaSamagri', image: vibhudikumkumasetImg },
  { id: '10', name: 'Puja Oil Set', nameTe: 'పూజా నూనె సెట్', category: 'pujaSamagri', image: pujaoilImg },
  // Brass Items
  { id: '11', name: 'Brass Diya Lamp', nameTe: 'ఇత్తడి దీపం', category: 'brassItems', image: brassdiyalampImg },
  { id: '12', name: 'Brass Kalash', nameTe: 'ఇత్తడి కలశం', category: 'brassItems', image: brasskalashImg },
  { id: '13', name: 'Brass Bell', nameTe: 'ఇత్తడి గంట', category: 'brassItems', image: brassbellImg },
  { id: '14', name: 'Brass Pooja Stand', nameTe: 'ఇత్తడి పూజా స్టాండ్', category: 'brassItems', image: brasspoojastandImg },
  { id: '15', name: 'Brass Aarti Plate', nameTe: 'ఇత్తడి ఆరతి ప్లేట్', category: 'brassItems', image: brassarathistnadImg },
  { id: '16', name: 'Brass Incense Holder', nameTe: 'ఇత్తడి అగరబత్తి స్టాండ్', category: 'brassItems', image: brassstandImg },
  { id: '17', name: 'Brass Panchpatra Set', nameTe: 'ఇత్తడి పంచపాత్ర సెట్', category: 'brassItems', image: brasspanchapatraImg },
  { id: '18', name: 'Brass Kumkum Box', nameTe: 'ఇత్తడి కుంకుమ భరిణి', category: 'brassItems', image: brasskumkumaboxImg },
  // Return Gifts
  { id: '19', name: 'Wedding Kumkum Box', nameTe: 'వివాహ కుంకుమ బాక్స్', category: 'returnGifts', image: WeddingKumkumImg },
  { id: '20', name: 'Mini Brass Set Gift', nameTe: 'మినీ ఇత్తడి సెట్ గిఫ్ట్', category: 'returnGifts', image: minisetImg },
  { id: '21', name: 'Decorative Diya Gift', nameTe: 'అలంకార దీపం గిఫ్ట్', category: 'returnGifts', image: diyaImg },
  { id: '22', name: 'Pooja Gift Hamper', nameTe: 'పూజా గిఫ్ట్ హ్యాంపర్', category: 'returnGifts', image: PoojaGiftHamperImg },
  { id: '23', name: 'Silver Coated Gift Set', nameTe: 'సిల్వర్ కోటెడ్ గిఫ్ట్ సెట్', category: 'returnGifts', image: silvercoatedImg },
  { id: '24', name: 'Kumkum Bharani Gift', nameTe: 'కుంకుమ భరిణి గిఫ్ట్', category: 'returnGifts', image: kumkumabarinaImg },
  // Temple Accessories
  { id: '25', name: 'Temple Bell Stand', nameTe: 'గుడి గంట స్టాండ్', category: 'templeAccessories', image: templeAccessoriesImg },
  { id: '26', name: 'Garland Holder', nameTe: 'దండ హోల్డర్', category: 'templeAccessories', image: garlandImg },
  { id: '27', name: 'Oil Lamp Stand', nameTe: 'నూనె దీపం స్టాండ్', category: 'templeAccessories', image: oillampstandImg },
  { id: '28', name: 'Pooja Mandir (Wooden)', nameTe: 'పూజా మందిరం (చెక్క)', category: 'templeAccessories', image: woodenstandImg },
  { id: '29', name: 'Coconut Breaker Stand', nameTe: 'కొబ్బరికాయ కొట్టే స్టాండ్', category: 'templeAccessories', image: coconutImg },
  { id: '30', name: 'Havan Kund Set', nameTe: 'హవన కుండ సెట్', category: 'templeAccessories', image: HavanKundImg },
  // Festival Special
  { id: '31', name: 'Diwali Puja Kit', nameTe: 'దీపావళి పూజా కిట్', category: 'festivalSpecial', image: diwalipujakitImg},
  { id: '32', name: 'Navratri Special Set', nameTe: 'నవరాత్రి స్పెషల్ సెట్', category: 'festivalSpecial', image: navaratripujakitImg },
  { id: '33', name: 'Sankranti Puja Kit', nameTe: 'సంక్రాంతి పూజా కిట్', category: 'festivalSpecial', image: sankranthipujakitImg },
  { id: '34', name: 'Vinayaka Chavithi Set', nameTe: 'వినాయక చవితి సెట్', category: 'festivalSpecial', image: vinayakachavithipujakit },
  { id: '35', name: 'Varalakshmi Vratham Kit', nameTe: 'వరలక్ష్మీ వ్రతం కిట్', category: 'festivalSpecial', image: varalakshivratapujakitImg},
  { id: '36', name: 'Ugadi Special Set', nameTe: 'ఉగాది స్పెషల్ సెట్', category: 'festivalSpecial', image: ugadipujakitImg },
  { id: '37', name: 'Shivaratri Puja Kit', nameTe: 'శివరాత్రి పూజా కిట్', category: 'festivalSpecial', image: shivarathrikitImg },
  { id: '38', name: 'Holi Colors & Puja Set', nameTe: 'హోలీ రంగులు & పూజా సెట్', category: 'festivalSpecial', image: holipujakitImg },
];

const Products = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-heading text-3xl font-bold text-primary text-center mb-8"
      >
        {t('products.title')}
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4 border-b-2 border-gold pb-2">
            {t('products.categories')}
          </h3>
          <div className="flex flex-row flex-wrap lg:flex-col gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground border border-border hover:border-gold'
                }`}
              >
                {t(`products.${cat}`)}
              </button>
            ))}
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <SlokaSection sanskrit="सर्वे भवन्तु सुखिनः" meaning={t('quotes.shubham')} />
    </div>
  );
};

export default Products;
