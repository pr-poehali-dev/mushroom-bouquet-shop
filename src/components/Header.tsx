import { useState } from 'react';
import { Page } from '../App';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartCount: number;
}

const NAV_ITEMS: { page: Page; label: string }[] = [
  { page: 'home', label: 'Главная' },
  { page: 'catalog', label: 'Каталог' },
  { page: 'about', label: 'О нас' },
  { page: 'delivery', label: 'Доставка' },
  { page: 'contacts', label: 'Контакты' },
];

export default function Header({ currentPage, onNavigate, cartCount }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 nav-blur border-b border-[hsl(350,30%,90%)]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl group-hover:animate-float transition-all">🍄</span>
          <span className="font-display text-2xl font-semibold tracking-wide text-[hsl(355,65%,45%)]">
            Мухомор
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ page, label }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`font-body text-sm font-medium transition-all duration-200 relative pb-0.5
                ${currentPage === page
                  ? 'text-[hsl(355,65%,50%)]'
                  : 'text-foreground/70 hover:text-[hsl(355,65%,50%)]'
                }
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 
                after:bg-[hsl(355,65%,55%)] after:transition-all after:duration-300
                ${currentPage === page ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
              `}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Cart + Mobile */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('cart')}
            className="relative p-2 rounded-full hover:bg-[hsl(350,50%,95%)] transition-colors group"
          >
            <Icon name="ShoppingBag" size={22} className="text-[hsl(355,65%,50%)]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[hsl(355,65%,55%)] text-white text-xs rounded-full flex items-center justify-center font-body font-bold animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2 rounded-full hover:bg-[hsl(350,50%,95%)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} className="text-foreground/70" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[hsl(350,30%,90%)] bg-white/95 backdrop-blur-md animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map(({ page, label }) => (
              <button
                key={page}
                onClick={() => { onNavigate(page); setMobileOpen(false); }}
                className={`text-left px-4 py-3 rounded-xl font-body text-sm font-medium transition-all
                  ${currentPage === page
                    ? 'bg-[hsl(350,50%,94%)] text-[hsl(355,65%,50%)]'
                    : 'hover:bg-[hsl(350,50%,97%)] text-foreground/70'
                  }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
