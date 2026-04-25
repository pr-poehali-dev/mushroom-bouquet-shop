const SHOP_IMG = 'https://cdn.poehali.dev/projects/86da9326-99ce-4ddd-b8c2-6e0e280e4329/files/0f2b9b5e-3ae9-4349-bf73-e94346cacd53.jpg';

const TEAM = [
  { name: 'Анастасия', role: 'Главный флорист', emoji: '🌸', exp: '8 лет опыта' },
  { name: 'Марина', role: 'Флорист-дизайнер', emoji: '🌿', exp: '5 лет опыта' },
  { name: 'Дмитрий', role: 'Курьер-флорист', emoji: '🚗', exp: '3 года опыта' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <p className="font-body text-sm text-[hsl(130,35%,30%)] uppercase tracking-widest mb-4">О нас</p>
              <h1 className="font-display text-5xl md:text-6xl font-light text-foreground leading-tight mb-6">
                История<br />
                <em className="text-[hsl(4,72%,50%)] not-italic">«Мухомора»</em>
              </h1>
              <p className="font-body text-base text-foreground/60 leading-relaxed mb-4">
                Мы — маленький авторский цветочный магазин в сердце Калининграда, где каждый букет создаётся с искренней любовью к своему делу.
              </p>
              <p className="font-body text-base text-foreground/60 leading-relaxed">
                Название «Мухомор» — это про яркость, смелость и неожиданную красоту. Как сам гриб, который снаружи кажется простым, а при взгляде вблизи поражает своим узором — так и наши букеты: каждый уникален и несёт в себе историю.
              </p>
            </div>

            <div className="relative animate-slide-up delay-200">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl shadow-[hsl(130,30%,15%)]/10">
                <img src={SHOP_IMG} alt="Наш магазин" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 max-w-[180px]">
                <div className="font-display text-3xl text-[hsl(4,72%,50%)] mb-1">2018</div>
                <div className="font-body text-xs text-foreground/55">год основания магазина</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Наши ценности</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { emoji: '🍄', title: 'Уникальность', text: 'Ни один наш букет не повторяется. Каждая работа — это авторское произведение, созданное специально для вас.' },
            { emoji: '🌱', title: 'Свежесть', text: 'Мы работаем только с проверенными поставщиками и получаем цветы каждое утро, чтобы ваш букет радовал как можно дольше.' },
            { emoji: '💛', title: 'Забота', text: 'Мы помним своих клиентов и их вкусы. Наш сервис — это не просто продажа, а настоящие отношения с каждым.' },
          ].map(({ emoji, title, text }) => (
            <div key={title} className="bg-white border border-[hsl(100,15%,86%)] rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-5">{emoji}</div>
              <h3 className="font-display text-2xl font-light text-foreground mb-3">{title}</h3>
              <p className="font-body text-sm text-foreground/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-mushroom-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-body text-sm text-[hsl(130,35%,30%)] uppercase tracking-widest mb-2">Люди</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Наша команда</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {TEAM.map(({ name, role, emoji, exp }) => (
              <div key={name} className="bg-white rounded-3xl p-8 text-center border border-[hsl(100,15%,86%)] hover-lift">
                <div className="w-20 h-20 bg-[hsl(120,20%,88%)] rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                  {emoji}
                </div>
                <h3 className="font-display text-xl font-light text-foreground mb-1">{name}</h3>
                <p className="font-body text-sm text-[hsl(4,72%,50%)] font-medium mb-1">{role}</p>
                <p className="font-body text-xs text-foreground/40">{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '6', label: 'лет на рынке' },
            { num: '500+', label: 'букетов в год' },
            { num: '4.9', label: 'средний рейтинг' },
            { num: '1000+', label: 'счастливых клиентов' },
          ].map(({ num, label }) => (
            <div key={label} className="bg-white border border-[hsl(100,15%,86%)] rounded-2xl p-8">
              <div className="font-display text-5xl font-light text-[hsl(4,72%,50%)] mb-2">{num}</div>
              <div className="font-body text-sm text-foreground/50">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
