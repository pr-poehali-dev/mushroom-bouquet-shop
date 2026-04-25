import { CartItem, Page } from '../App';
import Icon from '@/components/ui/icon';

interface CartPageProps {
  cart: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
}

export default function CartPage({ cart, onRemove, onUpdateQty }: CartPageProps) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20 px-4">
        <div className="text-7xl mb-6 animate-float">🛒</div>
        <h2 className="font-display text-4xl font-light text-foreground mb-3">Корзина пуста</h2>
        <p className="font-body text-foreground/50 max-w-sm">
          Добавьте букеты из каталога, чтобы оформить заказ
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <p className="font-body text-sm text-[hsl(355,65%,55%)] uppercase tracking-widest mb-2">Покупки</p>
      <h1 className="font-display text-5xl font-light text-foreground mb-10">Моя корзина</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white border border-[hsl(350,30%,92%)] rounded-2xl p-5 flex gap-5 items-center animate-slide-up">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl font-light text-foreground mb-1">{item.name}</h3>
                <p className="font-body text-sm text-[hsl(355,65%,55%)] font-medium">
                  {item.price.toLocaleString('ru-RU')} ₽ / шт
                </p>
              </div>

              {/* Qty */}
              <div className="flex items-center gap-2 bg-[hsl(350,30%,96%)] rounded-full px-2 py-1">
                <button
                  onClick={() => onUpdateQty(item.id, item.qty - 1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors text-foreground/60"
                >
                  <Icon name="Minus" size={14} />
                </button>
                <span className="font-body font-medium text-sm w-5 text-center">{item.qty}</span>
                <button
                  onClick={() => onUpdateQty(item.id, item.qty + 1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors text-foreground/60"
                >
                  <Icon name="Plus" size={14} />
                </button>
              </div>

              <div className="text-right min-w-[80px]">
                <div className="font-body font-semibold text-foreground">
                  {(item.price * item.qty).toLocaleString('ru-RU')} ₽
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="p-2 rounded-full hover:bg-red-50 text-foreground/30 hover:text-red-400 transition-all"
              >
                <Icon name="Trash2" size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-[hsl(350,30%,92%)] rounded-3xl p-6 sticky top-24">
            <h2 className="font-display text-2xl font-light text-foreground mb-6">Итого</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between font-body text-sm text-foreground/60">
                <span>Товары ({cart.reduce((s, i) => s + i.qty, 0)} шт)</span>
                <span>{total.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="flex justify-between font-body text-sm text-foreground/60">
                <span>Доставка</span>
                <span className="text-green-600 font-medium">Рассчитывается</span>
              </div>
              <div className="border-t border-[hsl(350,30%,92%)] pt-3 flex justify-between">
                <span className="font-body font-semibold text-foreground">Итого</span>
                <span className="font-body font-bold text-[hsl(355,65%,50%)] text-xl">
                  {total.toLocaleString('ru-RU')} ₽
                </span>
              </div>
            </div>

            <button className="w-full bg-[hsl(355,65%,55%)] text-white font-body font-medium py-4 rounded-full hover:bg-[hsl(355,65%,48%)] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[hsl(355,65%,55%)]/20 mb-3">
              Оформить заказ
            </button>

            <div className="flex items-center justify-center gap-2 text-foreground/40 font-body text-xs">
              <Icon name="Lock" size={12} />
              <span>Безопасная оплата</span>
            </div>

            <div className="mt-6 pt-6 border-t border-[hsl(350,30%,92%)]">
              <div className="flex items-start gap-3">
                <Icon name="Truck" size={18} className="text-[hsl(355,65%,55%)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium text-foreground">Доставка по Калининграду</p>
                  <p className="font-body text-xs text-foreground/50 mt-0.5">от 1 до 2 часов после подтверждения заказа</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
