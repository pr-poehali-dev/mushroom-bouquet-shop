import { Page, CartItem } from '../App';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/86da9326-99ce-4ddd-b8c2-6e0e280e4329/files/4e82557e-0434-433a-a3ce-23d88f232687.jpg';
const IMG2 = 'https://cdn.poehali.dev/projects/86da9326-99ce-4ddd-b8c2-6e0e280e4329/files/9b96952f-84fb-4f0c-baad-95e06d6e882b.jpg';
const SHOP_IMG = 'https://cdn.poehali.dev/projects/86da9326-99ce-4ddd-b8c2-6e0e280e4329/files/0f2b9b5e-3ae9-4349-bf73-e94346cacd53.jpg';

const FEATURED = [
  { id: 1, name: 'Нежная весна', price: 3200, image: HERO_IMG, tag: 'Хит' },
  { id: 2, name: 'Красный бархат', price: 4500, image: IMG2, tag: 'Новинка' },
  { id: 3, name: 'Лесная сказка', price: 2900, image: SHOP_IMG, tag: 'Авторский' },
];

const REVIEWS = [
  { name: 'Анна К.', stars: 5, text: 'Потрясающие букеты! Заказывала на день рождения подруги — она была в восторге. Цветы простояли больше недели!', date: '15 апр 2024' },
  { name: 'Михаил В.', stars: 5, text: 'Быстрая доставка и очень красивое оформление. Жена была приятно удивлена. Однозначно буду заказывать снова!', date: '2 апр 2024' },
  { name: 'Светлана П.', stars: 5, text: 'Авторский букет получился именно таким, как я хотела. Флористы прислушались ко всем пожеланиям. Спасибо!', date: '28 мар 2024' },
];

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onAddToCart: (item: Omit<CartItem, 'qty'>) => void;
}

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Белые точки — как у мухомора */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-40 dot-pattern rounded-full translate-x-40 -translate-y-24 bg-[hsl(4,72%,50%)]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 opacity-25 dot-pattern rounded-full -translate-x-16 translate-y-10 bg-[hsl(4,72%,50%)]" />

        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 mb-6 border border-[hsl(100,15%,83%)]">
                <span className="text-sm">🍄</span>
                <span className="font-body text-xs text-[hsl(130,35%,30%)] font-medium tracking-wider uppercase">
                  Авторские букеты · Калининград
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-light text-foreground leading-[1.1] mb-6">
                Цветы,<br />
                <em className="text-[hsl(4,72%,50%)] not-italic font-normal">созданные</em><br />
                с душой
              </h1>

              <p className="font-body text-lg text-foreground/60 leading-relaxed mb-8 max-w-md">
                Авторские букеты ручной работы для каждого особенного момента.
                Доставка по Калининграду в день заказа.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('catalog')}
                  className="bg-[hsl(4,72%,50%)] text-white font-body font-medium px-8 py-3.5 rounded-full hover:bg-[hsl(4,72%,43%)] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[hsl(4,72%,50%)]/25"
                >
                  Смотреть каталог
                </button>
                <button
                  onClick={() => onNavigate('delivery')}
                  className="border border-[hsl(100,15%,78%)] text-[hsl(130,35%,30%)] font-body font-medium px-8 py-3.5 rounded-full hover:bg-[hsl(120,18%,90%)] transition-all duration-300"
                >
                  Условия доставки
                </button>
              </div>

              <div className="flex gap-8 mt-10 pt-8 border-t border-[hsl(100,15%,83%)]">
                {[['500+', 'букетов создано'], ['4.9★', 'средний рейтинг'], ['1–2ч', 'доставка']].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-2xl text-[hsl(4,72%,50%)]">{v}</div>
                    <div className="font-body text-xs text-foreground/50 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative animate-slide-up delay-200">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[hsl(130,35%,20%)]/15 aspect-[4/5]">
                <img src={HERO_IMG} alt="Авторский букет" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(130,30%,15%)]/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
                <span className="text-2xl">🌹</span>
                <div>
                  <div className="font-body text-xs text-foreground/50">Сегодня заказали</div>
                  <div className="font-display text-lg text-[hsl(4,72%,48%)]">12 букетов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-sm text-[hsl(130,35%,30%)] uppercase tracking-widest mb-2">Популярное</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Авторские букеты
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="hidden md:flex items-center gap-2 font-body text-sm text-[hsl(130,35%,30%)] hover:gap-3 transition-all"
          >
            Весь каталог <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((item, i) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[hsl(100,15%,88%)] hover-lift animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10 bg-[hsl(4,72%,50%)] text-white text-xs font-body font-medium px-3 py-1.5 rounded-full">
                {item.tag}
              </div>

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-light text-foreground mb-1">{item.name}</h3>
                <p className="font-body text-sm text-foreground/45 mb-4">Авторская композиция</p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xl font-semibold text-[hsl(4,72%,48%)]">
                    {item.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <button
                    onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                    className="flex items-center gap-2 bg-[hsl(120,18%,91%)] text-[hsl(130,35%,28%)] font-body text-sm font-medium px-4 py-2 rounded-full hover:bg-[hsl(4,72%,50%)] hover:text-white transition-all duration-300"
                  >
                    <Icon name="Plus" size={14} />
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-mushroom-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-body text-sm text-[hsl(130,35%,30%)] uppercase tracking-widest mb-2">Наши преимущества</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: 'Flower2', title: 'Авторский дизайн', desc: 'Каждый букет создаётся вручную нашими флористами' },
              { icon: 'Clock', title: 'Быстрая доставка', desc: 'Доставляем по Калининграду от 1 до 2 часов' },
              { icon: 'Leaf', title: 'Свежие цветы', desc: 'Ежедневные поставки от проверенных поставщиков' },
              { icon: 'Heart', title: 'С заботой', desc: 'Красивая упаковка и персональная открытка в подарок' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center border border-[hsl(100,15%,86%)] hover-lift">
                <div className="w-14 h-14 bg-[hsl(4,60%,93%)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={icon} fallback="Star" size={24} className="text-[hsl(4,72%,50%)]" />
                </div>
                <h3 className="font-display text-xl font-light text-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-foreground/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-sm text-[hsl(130,35%,30%)] uppercase tracking-widest mb-2">Отзывы</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Говорят клиенты
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className="bg-white border border-[hsl(100,15%,86%)] rounded-3xl p-8 hover-lift animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-[hsl(4,72%,55%)] text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-foreground/60 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[hsl(120,20%,87%)] rounded-full flex items-center justify-center">
                    <span className="font-display text-[hsl(130,35%,30%)] text-sm font-medium">{r.name[0]}</span>
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{r.name}</span>
                </div>
                <span className="font-body text-xs text-foreground/35">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 mb-10 rounded-3xl overflow-hidden relative bg-[hsl(130,25%,12%)]">
        {/* Мухоморный узор — белые точки */}
        <div className="absolute inset-0 dot-pattern opacity-10" />
        {/* Красный акцент-круг */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[hsl(4,72%,50%)] opacity-20 rounded-full blur-3xl" />
        <div className="relative py-16 px-8 text-center">
          <span className="text-5xl mb-6 block">🍄</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            Создадим букет вашей <em className="text-[hsl(4,65%,68%)] not-italic">мечты</em>
          </h2>
          <p className="font-body text-white/50 mb-8 max-w-md mx-auto">
            Напишите нам — флористы помогут подобрать идеальный букет для любого случая
          </p>
          <button
            onClick={() => onNavigate('contacts')}
            className="bg-[hsl(4,72%,50%)] text-white font-body font-medium px-8 py-4 rounded-full hover:bg-[hsl(4,72%,43%)] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[hsl(4,72%,30%)]/40"
          >
            Связаться с флористом
          </button>
        </div>
      </section>
    </div>
  );
}
