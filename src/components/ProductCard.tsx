import { useTranslation } from 'react-i18next';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  nameTe: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, nameTe, image, category }: ProductCardProps) => {
  const { t, i18n } = useTranslation();
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-xl border-2 border-border bg-card transition-all hover:border-gold hover:gold-glow"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-base font-semibold text-foreground">
          {i18n.language === 'te' ? nameTe : name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{category}</p>
        <button
          onClick={() => addItem({ id, name, nameTe, image })}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-secondary"
        >
          <ShoppingCart className="h-4 w-4" />
          {t('products.addToCart')}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
