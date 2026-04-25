import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from './components/Header';
import HomePage from './components/HomePage';
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import CartPage from './components/CartPage';
import ContactsPage from './components/ContactsPage';
import DeliveryPage from './components/DeliveryPage';

export type Page = 'home' | 'catalog' | 'about' | 'cart' | 'contacts' | 'delivery';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

const PAGE_LABELS: Record<Page, string> = {
  home: 'Главная',
  catalog: 'Каталог',
  about: 'О магазине',
  delivery: 'Доставка',
  contacts: 'Контакты',
  cart: 'Корзина',
};

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'qty'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) return removeFromCart(id);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background">
        <Header currentPage={page} onNavigate={setPage} cartCount={totalItems} />
        <main>
          {page === 'home' && <HomePage onNavigate={setPage} onAddToCart={addToCart} />}
          {page === 'catalog' && <CatalogPage onAddToCart={addToCart} />}
          {page === 'about' && <AboutPage />}
          {page === 'cart' && <CartPage cart={cart} onRemove={removeFromCart} onUpdateQty={updateQty} />}
          {page === 'contacts' && <ContactsPage />}
          {page === 'delivery' && <DeliveryPage />}
        </main>
        <footer className="bg-[hsl(10,15%,15%)] text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">🍄</span>
                  <span className="font-display text-2xl text-[hsl(350,60%,80%)]">Мухомор</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Авторские букеты и цветы<br />в Калининграде с любовью
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg text-[hsl(350,60%,80%)] mb-4">Навигация</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  {(['home', 'catalog', 'about', 'delivery', 'contacts'] as Page[]).map(p => (
                    <li key={p}>
                      <button onClick={() => setPage(p)} className="hover:text-white transition-colors">
                        {PAGE_LABELS[p]}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg text-[hsl(350,60%,80%)] mb-4">Контакты</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>📍 Калининград</li>
                  <li>📞 +7 (4012) 000-000</li>
                  <li>🕐 Пн–Вс: 9:00–21:00</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/30">
              © 2024 Мухомор. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
