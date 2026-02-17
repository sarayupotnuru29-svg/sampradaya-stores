import { useTranslation } from 'react-i18next';
import { useCart } from '@/context/CartContext';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const CartDrawer = () => {
  const { t } = useTranslation();
  const { items, removeItem, isOpen, setIsOpen, checkoutWhatsApp, itemCount } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="border-l-2 border-gold bg-card">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-heading text-primary">
            <ShoppingBag className="h-5 w-5" />
            {t('cart.title')} ({itemCount} {t('cart.items')})
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-1 flex-col gap-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">{t('cart.empty')}</p>
          ) : (
            <>
              <div className="flex-1 space-y-3 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-3 rounded-lg border border-border bg-background p-3">
                    <img src={item.image} alt={item.name} className="h-14 w-14 rounded-md object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground font-telugu">{item.nameTe}</p>
                      <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-destructive hover:text-destructive/80">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={checkoutWhatsApp}
                className="w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-green-700 gold-glow"
              >
                {t('cart.checkout')} 💬
              </button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
