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
//       <div className="container mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo & Name Section */}
//         <Link to="/" className="flex items-center gap-2 min-w-0 mr-2">
//           <img 
//             src={logo} 
//             alt="Sampradaya Stores" 
//             className="h-10 w-10 sm:h-12 sm:w-12 rounded-full gold-border flex-shrink-0" 
//           />
//           <div className="min-w-0">
//             <h1 className="font-heading text-base sm:text-lg font-bold text-primary leading-tight truncate">
//               Sampradaya Stores
//             </h1>
//             <p className="font-telugu text-[10px] sm:text-xs text-muted-foreground truncate">
//               సాంప్రదాయ స్టోర్స్
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Nav Links */}
//         <div className="hidden lg:flex items-center gap-6 mx-4">
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
//         <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
//           {/* Language Toggle: Visible ONLY on Desktop (lg and up) */}
//           <div className="hidden lg:block">
//             <LanguageToggle />
//           </div>

//           {/* Cart Button */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="relative rounded-full p-2 text-primary transition-all hover:bg-muted"
//           >
//             <ShoppingCart className="h-6 w-6" />
//             {itemCount > 0 && (
//               <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-saffron text-[10px] font-bold text-accent-foreground">
//                 {itemCount}
//               </span>
//             )}
//           </button>

//           {/* Hamburger Menu Button */}
//           <button
//             className="lg:hidden rounded-md p-2 text-foreground"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {mobileOpen && (
//         <div className="border-t border-border bg-card lg:hidden animate-in fade-in slide-in-from-top-2">
//           <div className="container mx-auto flex flex-col gap-3 px-4 py-6">
            
//             {/* Language Toggle: Moved inside the Mobile Menu */}
//             <div className="flex items-center justify-between px-4 py-2 bg-muted/30 rounded-lg mb-2">
//               <span className="text-sm font-medium text-muted-foreground">Change Language</span>
//               <LanguageToggle />
//             </div>

//             <hr className="border-border/50 mb-2" />

//             {links.map(link => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 onClick={() => setMobileOpen(false)}
//                 className={`rounded-md px-4 py-3 text-base font-medium transition-colors ${
//                   isActive(link.to) ? 'bg-primary text-primary-foreground shadow-md' : 'text-foreground hover:bg-muted'
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
// Importing your specific image file
import teluguNameImg from '@/assets/telugu-name.jpeg';

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
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo & Name Section */}
        <Link to="/" className="flex items-center gap-2 min-w-0 mr-2">
          <img 
            src={logo} 
            alt="Sampradaya Stores" 
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full gold-border flex-shrink-0" 
          />
          <div className="flex flex-col min-w-0">
            <h1 className="font-heading text-base sm:text-lg font-bold text-primary leading-tight truncate">
              Sampradaya Stores
            </h1>
            {/* The artistic Telugu name image provided by the client */}
            <img 
              src={teluguNameImg} 
              alt="సాంప్రదాయ స్టోర్స్" 
              className="h-4 sm:h-5 w-auto object-contain object-left mt-0.5"
              style={{ mixBlendMode: 'multiply' }} 
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 mx-4">
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
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Language Toggle: Visible ONLY on Desktop */}
          <div className="hidden lg:block">
            <LanguageToggle />
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative rounded-full p-2 text-primary transition-all hover:bg-muted"
          >
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-saffron text-[10px] font-bold text-accent-foreground">
                {itemCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden rounded-md p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden animate-in fade-in slide-in-from-top-2">
          <div className="container mx-auto flex flex-col gap-3 px-4 py-6">
            
            {/* Language Toggle: Moved inside the Mobile Menu */}
            <div className="flex items-center justify-between px-4 py-2 bg-muted/30 rounded-lg mb-2">
              <span className="text-sm font-medium text-muted-foreground">Change Language</span>
              <LanguageToggle />
            </div>

            <hr className="border-border/50 mb-2" />

            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.to) ? 'bg-primary text-primary-foreground shadow-md' : 'text-foreground hover:bg-muted'
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