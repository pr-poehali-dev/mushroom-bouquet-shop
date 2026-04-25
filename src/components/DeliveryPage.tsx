import Icon from '@/components/ui/icon';

const ZONES = [
  { zone: 'Центр', time: '1–1.5 часа', price: 'от 300 ₽' },
  { zone: 'Ближние районы', time: '1.5–2 часа', price: 'от 400 ₽' },
  { zone: 'Окраины', time: '2–3 часа', price: 'от 500 ₽' },
  { zone: 'Область', time: 'по договорённости', price: 'от 700 ₽' },
];

const FAQ = [
  { q: 'Можно ли заказать доставку к точному времени?', a: 'Да, при оформлении заказа вы можете указать желаемое время доставки. Мы постараемся его соблюсти, уточнив детали по телефону.' },
  { q: 'Как долго букет сохранит свежесть?', a: 'При правильном уходе (свежая вода, прохладное место) наши букеты из свежих цветов хранятся от 5 до 10 дней.' },
  { q: 'Можно ли заказать самовывоз?', a: 'Конечно! Вы можете забрать заказ самостоятельно из нашего магазина в любое удобное время в часы работы.' },
  { q: 'Что если получатель не дома?', a: 'Курьер свяжется с вами и договорится о повторной доставке или оставит букет у соседей по вашему согласию.' },
];

export default function DeliveryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <p className="font-body text-sm text-[hsl(130,35%,30%)] uppercase tracking-widest mb-4">Логистика</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-6">
            Доставка<br />
            <em className="text-[hsl(4,72%,50%)] not-italic">по Калининграду</em>
          </h1>
          <p className="font-body text-lg text-foreground/60 max-w-lg">
            Доставляем свежие букеты прямо к двери — быстро, бережно и с улыбкой.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-light text-foreground">Как это работает</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '01', icon: 'ShoppingBag', title: 'Выбираете', desc: 'Выбираете букет из каталога или заказываете авторскую композицию' },
            { step: '02', icon: 'Phone', title: 'Подтверждаем', desc: 'Мы перезваниваем для уточнения деталей заказа и адреса' },
            { step: '03', icon: 'Flower2', title: 'Создаём', desc: 'Флорист собирает свежий букет специально для вашего заказа' },
            { step: '04', icon: 'Truck', title: 'Доставляем', desc: 'Курьер аккуратно доставит букет по указанному адресу' },
          ].map(({ step, icon, title, desc }) => (
            <div key={step} className="bg-white border border-[hsl(100,15%,86%)] rounded-2xl p-6 text-center hover-lift">
              <div className="font-display text-4xl text-[hsl(100,15%,83%)] mb-3">{step}</div>
              <div className="w-12 h-12 bg-[hsl(4,60%,93%)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={icon} fallback="Star" size={20} className="text-[hsl(4,72%,50%)]" />
              </div>
              <h3 className="font-display text-xl font-light text-foreground mb-2">{title}</h3>
              <p className="font-body text-xs text-foreground/55 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zones */}
      <section className="bg-mushroom-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-light text-foreground">Зоны и стоимость</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {ZONES.map(({ zone, time, price }) => (
              <div key={zone} className="bg-white rounded-2xl p-5 flex items-center justify-between border border-[hsl(100,15%,86%)] hover-lift">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[hsl(120,18%,88%)] rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={18} className="text-[hsl(130,35%,30%)]" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-foreground">{zone}</div>
                    <div className="font-body text-xs text-foreground/50">{time}</div>
                  </div>
                </div>
                <div className="font-body font-semibold text-[hsl(4,72%,48%)]">{price}</div>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-foreground/40 text-center mt-6">
            * При заказе от 5000 ₽ доставка по центру города бесплатно
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: 'Clock', title: 'Часы доставки', lines: ['Пн–Пт: 9:00–21:00', 'Сб–Вс: 9:00–22:00'] },
            { icon: 'Gift', title: 'Бесплатно', lines: ['Открытка в подарок', 'Красивая упаковка'] },
            { icon: 'Phone', title: 'Экспресс', lines: ['Доставка за 2 часа', 'По предварительной договорённости'] },
          ].map(({ icon, title, lines }) => (
            <div key={title} className="bg-white border border-[hsl(100,15%,86%)] rounded-2xl p-6 hover-lift">
              <div className="w-12 h-12 bg-[hsl(120,18%,88%)] rounded-xl flex items-center justify-center mb-4">
                <Icon name={icon} fallback="Star" size={20} className="text-[hsl(130,35%,30%)]" />
              </div>
              <h3 className="font-display text-xl font-light text-foreground mb-2">{title}</h3>
              {lines.map(l => <p key={l} className="font-body text-sm text-foreground/60">{l}</p>)}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-light text-foreground mb-8 text-center">Частые вопросы</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[hsl(100,15%,86%)] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-body font-medium text-foreground hover:text-[hsl(130,35%,28%)] transition-colors">
                  {q}
                  <Icon name="ChevronDown" size={18} className="text-foreground/40 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 font-body text-sm text-foreground/60 leading-relaxed border-t border-[hsl(100,15%,86%)] pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
