import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <p className="font-body text-sm text-[hsl(130,35%,30%)] uppercase tracking-widest mb-4">Связь</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
            Свяжитесь<br />
            <em className="text-[hsl(4,72%,50%)] not-italic">с нами</em>
          </h1>
          <p className="font-body text-lg text-foreground/60 max-w-lg">
            Ответим на любые вопросы, поможем подобрать букет и оформить заказ
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="font-display text-3xl font-light text-foreground mb-8">Наши контакты</h2>

            <div className="space-y-4 mb-10">
              {[
                { icon: 'MapPin', title: 'Адрес', value: 'г. Калининград, ул. Цветочная, 12', sub: 'Работаем без выходных' },
                { icon: 'Phone', title: 'Телефон', value: '+7 (4012) 000-000', sub: 'Пн–Вс: 9:00–21:00' },
                { icon: 'MessageCircle', title: 'WhatsApp / Telegram', value: '+7 (911) 000-0000', sub: 'Ответим быстро' },
                { icon: 'Mail', title: 'Email', value: 'hello@mukhamor.ru', sub: 'Ответим в течение часа' },
              ].map(({ icon, title, value, sub }) => (
                <div key={title} className="flex gap-4 items-start bg-white border border-[hsl(100,15%,86%)] rounded-2xl p-5 hover-lift">
                  <div className="w-12 h-12 bg-[hsl(120,18%,88%)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={icon} fallback="Star" size={20} className="text-[hsl(130,35%,30%)]" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-foreground/40 mb-0.5">{title}</div>
                    <div className="font-body font-medium text-foreground">{value}</div>
                    <div className="font-body text-xs text-foreground/50 mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <h3 className="font-display text-xl font-light text-foreground mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: 'Instagram', label: 'Instagram' },
                  { icon: 'Send', label: 'Telegram' },
                  { icon: 'MessageCircle', label: 'VK' },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    className="flex items-center gap-2 bg-white border border-[hsl(100,15%,85%)] rounded-full px-4 py-2 font-body text-sm text-foreground/60 hover:text-[hsl(130,35%,28%)] hover:border-[hsl(130,35%,60%)] transition-all"
                  >
                    <Icon name={icon} fallback="Share2" size={16} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white border border-[hsl(100,15%,86%)] rounded-3xl p-8">
              {sent ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🍄</div>
                  <h3 className="font-display text-2xl font-light text-foreground mb-2">Спасибо!</h3>
                  <p className="font-body text-sm text-foreground/55">
                    Мы получили ваше сообщение и скоро свяжемся с вами
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', phone: '', message: '' }); }}
                    className="mt-6 font-body text-sm text-[hsl(4,72%,50%)] underline"
                  >
                    Отправить ещё раз
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-light text-foreground mb-6">Написать нам</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-body text-xs text-foreground/50 block mb-1.5">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Анна"
                        className="w-full border border-[hsl(100,15%,85%)] rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(130,35%,45%)]/25 focus:border-[hsl(130,35%,50%)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-foreground/50 block mb-1.5">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        placeholder="+7 (___) ___-____"
                        className="w-full border border-[hsl(100,15%,85%)] rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(130,35%,45%)]/25 focus:border-[hsl(130,35%,50%)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-foreground/50 block mb-1.5">Сообщение</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        placeholder="Хочу заказать авторский букет к свадьбе..."
                        className="w-full border border-[hsl(100,15%,85%)] rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(130,35%,45%)]/25 focus:border-[hsl(130,35%,50%)] transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[hsl(4,72%,50%)] text-white font-body font-medium py-4 rounded-full hover:bg-[hsl(4,72%,43%)] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[hsl(4,72%,50%)]/20"
                    >
                      Отправить сообщение
                    </button>
                    <p className="font-body text-xs text-foreground/35 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
