// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { ShoppingCart, Menu, X } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import LanguageToggle from './LanguageToggle';
// import logo from '@/assets/apple-touch-icon.png';

// const Navbar = () => {
//   const { t } = useTranslation();
//   const { itemCount, setIsOpen } = useCart();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const links = [
//     { to: '/', label: t('nav.home') },
//     { to: '/products', label: t('nav.products') },
//     { to: '/auspicious', label: t('nav.auspicious') },
//     { to: '/about', label: t('nav.about') },
//     { to: '/contact', label: t('nav.contact') },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="sticky top-0 z-50 border-b-2 border-gold bg-card/95 backdrop-blur-md">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-2">
//         {/* Logo & Name Section */}
//         <Link to="/" className="flex items-center gap-2 min-w-0 flex-shrink">
//           <img 
//             src={logo} 
//             alt="Sampradaya Stores" 
//             className="h-10 w-10 sm:h-12 sm:w-12 rounded-full gold-border flex-shrink-0" 
//           />
//           <div className="min-w-0">
//             {/* Added 'text-base' for mobile and 'sm:text-lg' for larger screens */}
//             <h1 className="font-heading text-base sm:text-lg font-bold text-primary leading-tight truncate">
//               Sampradaya Stores
//             </h1>
//             <p className="font-telugu text-[10px] sm:text-xs text-muted-foreground truncate">
//               సాంప్రదాయ స్టోర్స్
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center gap-6">
//           {links.map(link => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 isActive(link.to) ? 'text-primary border-b-2 border-gold pb-1' : 'text-foreground'
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Right side Actions */}
//         <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
//           <LanguageToggle />
//           <button
//             onClick={() => setIsOpen(true)}
//             className="relative rounded-full p-2 text-primary transition-all hover:bg-muted"
//           >
//             <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
//             {itemCount > 0 && (
//               <span className="absolute right-0 top-0 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-saffron text-[10px] font-bold text-accent-foreground">
//                 {itemCount}
//               </span>
//             )}
//           </button>
//           <button
//             className="lg:hidden rounded-md p-2 text-foreground"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="border-t border-border bg-card lg:hidden">
//           <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
//             {links.map(link => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 onClick={() => setMobileOpen(false)}
//                 className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
//                   isActive(link.to) ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;








import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import LanguageToggle from './LanguageToggle';
import logo from '@/assets/apple-touch-icon.png';

const Navbar = () => {
  const { t } = useTranslation();
  const { itemCount, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/auspicious', label: t('nav.auspicious') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-gold bg-card/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-1 sm:gap-2">
        {/* Logo & Name Section */}
        {/* Changed 'min-w-0 flex-shrink' to 'flex-1 min-w-0' to allow it to occupy available space properly */}
        <Link to="/" className="flex items-center gap-2 flex-1 min-w-0">
          <img 
            src={logo} 
            alt="Sampradaya Stores" 
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full gold-border flex-shrink-0" 
          />
          <div className="min-w-0 overflow-hidden">
            <h1 className="font-heading text-sm sm:text-base lg:text-lg font-bold text-primary leading-tight truncate">
              Sampradaya Stores
            </h1>
            <p className="font-telugu text-[9px] sm:text-xs text-muted-foreground truncate">
              సాంప్రదాయ స్టోర్స్
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.to) ? 'text-primary border-b-2 border-gold pb-1' : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side Actions */}
        {/* Reduced mobile gap from gap-1 to gap-0.5 to prevent overlapping */}
        <div className="flex items-center gap-0.5 sm:gap-3 flex-shrink-0">
          <div className="scale-90 sm:scale-100 transform-gpu">
            <LanguageToggle />
          </div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="relative rounded-full p-1.5 sm:p-2 text-primary transition-all hover:bg-muted"
          >
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            {itemCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-saffron text-[10px] font-bold text-accent-foreground">
                {itemCount}
              </span>
            )}
          </button>
          
          <button
            className="lg:hidden rounded-md p-1.5 sm:p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.to) ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;