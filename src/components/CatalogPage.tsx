import { useState } from 'react';
import { CartItem } from '../App';
import Icon from '@/components/ui/icon';

const IMG1 = 'https://cdn.poehali.dev/projects/86da9326-99ce-4ddd-b8c2-6e0e280e4329/files/4e82557e-0434-433a-a3ce-23d88f232687.jpg';
const IMG2 = 'https://cdn.poehali.dev/projects/86da9326-99ce-4ddd-b8c2-6e0e280e4329/files/9b96952f-84fb-4f0c-baad-95e06d6e882b.jpg';
const IMG3 = 'https://cdn.poehali.dev/projects/86da9326-99ce-4ddd-b8c2-6e0e280e4329/files/0f2b9b5e-3ae9-4349-bf73-e94346cacd53.jpg';

const PRODUCTS = [
  { id: 1, name: 'Нежная весна', price: 3200, image: IMG1, category: 'Розы', rating: 4.9, reviews: 34, desc: 'Нежные розы с зеленью и сухоцветами' },
  { id: 2, name: 'Красный бархат', price: 4500, image: IMG2, category: 'Пионы', rating: 5.0, reviews: 21, desc: 'Роскошные пионы в насыщенной палитре' },
  { id: 3, name: 'Лесная сказка', price: 2900, image: IMG3, category: 'Смешанные', rating: 4.8, reviews: 18, desc: 'Авторская композиция в лесном стиле' },
  { id: 4, name: 'Облако', price: 3600, image: IMG1, category: 'Розы', rating: 4.9, reviews: 27, desc: 'Белые розы и эустомы в воздушной подаче' },
  { id: 5, name: 'Алый закат', price: 5200, image: IMG2, category: 'Пионы', rating: 5.0, reviews: 15, desc: 'Премиум букет из алых пионов' },
  { id: 6, name: 'Полевые', price: 2200, image: IMG3, category: 'Полевые', rating: 4.7, reviews: 42, desc: 'Букет в деревенском стиле из полевых цветов' },
  { id: 7, name: 'Свадебный', price: 8900, image: IMG1, category: 'Свадебные', rating: 5.0, reviews: 9, desc: 'Элегантный свадебный букет для невесты' },
  { id: 8, name: 'Коралловый', price: 3900, image: IMG2, category: 'Смешанные', rating: 4.8, reviews: 23, desc: 'Яркие оранжевые и коралловые цветы' },
  { id: 9, name: 'Монобукет роз', price: 2600, image: IMG3, category: 'Розы', rating: 4.9, reviews: 55, desc: 'Классический монобукет из чайных роз' },
];

const CATEGORIES = ['Все', 'Розы', 'Пионы', 'Смешанные', 'Полевые', 'Свадебные'];

interface CatalogPageProps {
  onAddToCart: (item: Omit<CartItem, 'qty'>) => void;
}

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [active, setActive] = useState('Все');
  const [added, setAdded] = useState<number[]>([]);

  const filtered = active === 'Все' ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  const handleAdd = (item: typeof PRODUCTS[0]) => {
    onAddToCart({ id: item.id, name: item.name, price: item.price, image: item.image });
    setAdded(prev => [...prev, item.id]);
    setTimeout(() => setAdded(prev => prev.filter(id => id !== item.id)), 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="font-body text-sm text-[hsl(130,35%,30%)] uppercase tracking-widest mb-2">Наш ассортимент</p>
        <h1 className="font-display text-5xl font-light text-foreground mb-6">Каталог букетов</h1>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm font-medium px-5 py-2 rounded-full transition-all duration-200
                ${active === cat
                  ? 'bg-[hsl(4,72%,50%)] text-white shadow-md shadow-[hsl(4,72%,50%)]/20'
                  : 'bg-white border border-[hsl(100,15%,85%)] text-foreground/60 hover:border-[hsl(130,35%,55%)] hover:text-[hsl(130,35%,28%)]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl overflow-hidden border border-[hsl(100,15%,88%)] hover-lift animate-slide-up"
            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                <span className="text-[hsl(4,72%,50%)] text-xs">★</span>
                <span className="font-body text-xs font-medium text-foreground">{item.rating}</span>
                <span className="font-body text-xs text-foreground/40">({item.reviews})</span>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-1">
                <span className="font-body text-xs text-[hsl(130,35%,32%)] font-medium">{item.category}</span>
              </div>
              <h3 className="font-display text-xl font-light text-foreground mb-1">{item.name}</h3>
              <p className="font-body text-xs text-foreground/50 mb-4">{item.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-body text-lg font-semibold text-[hsl(4,72%,48%)]">
                  {item.price.toLocaleString('ru-RU')} ₽
                </span>
                <button
                  onClick={() => handleAdd(item)}
                  className={`flex items-center gap-1.5 font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-300
                    ${added.includes(item.id)
                      ? 'bg-[hsl(120,30%,90%)] text-[hsl(130,40%,30%)]'
                      : 'bg-[hsl(120,18%,91%)] text-[hsl(130,35%,28%)] hover:bg-[hsl(4,72%,50%)] hover:text-white'
                    }`}
                >
                  <Icon name={added.includes(item.id) ? 'Check' : 'ShoppingBag'} size={14} />
                  {added.includes(item.id) ? 'Добавлено' : 'В корзину'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
