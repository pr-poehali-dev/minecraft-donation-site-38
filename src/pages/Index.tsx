import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/a8104276-6a06-4b00-9373-5768caca0c67/files/e892bacc-e933-481b-b65d-19b224286e20.jpg';

const packages = [
  {
    id: 'vip',
    name: 'VIP',
    emoji: '⚔️',
    price: '199',
    color: 'green',
    borderClass: 'pixel-border-green',
    btnClass: 'mc-btn-green',
    badge: null,
    description: 'Идеально для начала',
    features: [
      'Префикс [VIP] в чате',
      'Зелёный ник',
      'Доступ к /kit vip каждые 24ч',
      '3 дома (/sethome)',
      'Приоритет при входе на сервер',
      'Доступ к /fly в лобби',
      '/nick — смена ника',
      'Доступ к 5 цветам чата',
    ],
    glow: 'rgba(90, 173, 63, 0.15)',
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    emoji: '🏆',
    price: '499',
    color: 'gold',
    borderClass: 'pixel-border-gold',
    btnClass: 'mc-btn-gold',
    badge: '🔥 ХИТ',
    description: 'Самый популярный выбор',
    features: [
      'Всё из VIP',
      'Префикс [PREMIUM] золотом',
      'Золотой ник + эффекты',
      '/kit premium каждые 12ч',
      '7 домов (/sethome)',
      '/fly везде (кроме PvP зон)',
      'Доступ к /workbench, /anvil',
      'Экзотические питомцы',
      '/hat — надеть блок на голову',
      'Все 16 цветов чата',
    ],
    glow: 'rgba(245, 197, 66, 0.15)',
  },
  {
    id: 'diamond',
    name: 'DIAMOND',
    emoji: '💎',
    price: '999',
    color: 'diamond',
    borderClass: 'pixel-border-diamond',
    btnClass: 'mc-btn-diamond',
    badge: null,
    description: 'Максимальные привилегии',
    features: [
      'Всё из PREMIUM',
      'Префикс [DIAMOND] сияние',
      'Особый эффект частиц',
      '/kit diamond каждые 6ч',
      'Безлимитные дома',
      '/fly везде без ограничений',
      'Доступ к /gm 1 (творческий)',
      '/heal и /feed без кд',
      'Персональный питомец дракон',
      'Личный регион 500×500',
      '/sudo — выполнить от игрока',
      'Полный доступ к /enderchest',
    ],
    glow: 'rgba(66, 212, 230, 0.15)',
  },
];

const floatingBlocks = [
  { emoji: '🧱', size: 36, x: 8, y: 15, delay: 0, cls: 'animate-float' },
  { emoji: '💎', size: 28, x: 88, y: 20, delay: 1, cls: 'animate-float2' },
  { emoji: '⛏️', size: 32, x: 5, y: 60, delay: 2, cls: 'animate-float3' },
  { emoji: '🌿', size: 30, x: 92, y: 65, delay: 0.5, cls: 'animate-float' },
  { emoji: '🗡️', size: 26, x: 15, y: 80, delay: 1.5, cls: 'animate-float2' },
  { emoji: '🔥', size: 24, x: 82, y: 40, delay: 2.5, cls: 'animate-float3' },
  { emoji: '🧨', size: 22, x: 50, y: 5, delay: 1.2, cls: 'animate-float' },
  { emoji: '🪙', size: 28, x: 70, y: 88, delay: 0.8, cls: 'animate-float2' },
];

const stars = Array.from({ length: 30 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 50,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
}));

export default function Index() {
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen pixel-bg relative overflow-x-hidden"
      style={{ backgroundColor: 'var(--mc-dark)', color: '#e0e8f0' }}
    >
      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute animate-star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              backgroundColor: '#fff',
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating blocks */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {floatingBlocks.map((b, i) => (
          <div
            key={i}
            className={`absolute ${b.cls} select-none`}
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              fontSize: b.size,
              animationDelay: `${b.delay}s`,
              opacity: 0.4,
            }}
          >
            {b.emoji}
          </div>
        ))}
      </div>

      {/* HERO */}
      <section
        className="relative scanlines"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        {/* Hero background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            imageRendering: 'pixelated',
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(13,17,23,0.2) 0%, rgba(13,17,23,0.6) 60%, var(--mc-dark) 100%)',
          }}
        />

        {/* Hero content */}
        <div
          className="relative text-center px-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* Server name */}
          <div
            className="inline-block mb-6 px-4 py-2"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '11px',
              backgroundColor: 'rgba(13,17,23,0.8)',
              border: '2px solid var(--mc-green)',
              color: 'var(--mc-green)',
              letterSpacing: '3px',
            }}
          >
            ▶ CRAFTWORLD.RU ◀
          </div>

          <h1
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(20px, 5vw, 52px)',
              lineHeight: 1.3,
              marginBottom: '16px',
              textShadow: '4px 4px 0 #000, 6px 6px 0 rgba(0,0,0,0.5)',
            }}
          >
            <span className="shimmer-text">ДОНАТ</span>
            <br />
            <span style={{ color: '#e0e8f0' }}>МАГАЗИН</span>
          </h1>

          <p
            style={{
              fontFamily: "'Rubik', sans-serif",
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: 'var(--mc-gray)',
              marginBottom: '40px',
              maxWidth: 480,
              margin: '0 auto 40px',
            }}
          >
            Поддержи сервер и получи уникальные привилегии.<br />
            Моментальная выдача после оплаты 🚀
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#donate">
              <button className="mc-btn mc-btn-green" style={{ fontSize: '9px' }}>
                🎮 ВЫБРАТЬ ПАКЕТ
              </button>
            </a>
            <a href="#how">
              <button
                className="mc-btn"
                style={{
                  fontSize: '9px',
                  backgroundColor: 'var(--mc-stone)',
                  borderColor: 'var(--mc-border)',
                  color: '#e0e8f0',
                  boxShadow: 'inset -3px -3px 0 0 rgba(0,0,0,0.5), inset 3px 3px 0 0 rgba(255,255,255,0.1)',
                }}
              >
                ❓ КАК КУПИТЬ
              </button>
            </a>
          </div>

          {/* Live counter */}
          <div
            className="mt-12 flex gap-8 justify-center flex-wrap"
            style={{ opacity: 0.9 }}
          >
            {[
              { label: 'ИГРОКОВ ОНЛАЙН', value: '247' },
              { label: 'ДОНАТОВ СЕГОДНЯ', value: '31' },
              { label: 'ДНЕЙ РАБОТЫ', value: '412' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '22px',
                    color: 'var(--mc-green)',
                    textShadow: '2px 2px 0 var(--mc-green-dark)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '7px',
                    color: 'var(--mc-gray)',
                    marginTop: '6px',
                    letterSpacing: '1px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 animate-bounce"
          style={{ transform: 'translateX(-50%)', color: 'var(--mc-green)', opacity: 0.7 }}
        >
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* DONATE PACKAGES */}
      <section id="donate" className="relative py-20 px-4" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                color: 'var(--mc-green)',
                letterSpacing: '4px',
                marginBottom: '12px',
              }}
            >
              ══ ПАКЕТЫ ══
            </div>
            <h2
              style={{
                fontFamily: "'Russo One', sans-serif",
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: '#e0e8f0',
                textShadow: '3px 3px 0 rgba(0,0,0,0.8)',
              }}
            >
              ВЫБЕРИ СВОЙ ПАКЕТ
            </h2>
            <p style={{ color: 'var(--mc-gray)', marginTop: '8px', fontFamily: "'Rubik', sans-serif" }}>
              Все привилегии выдаются автоматически после оплаты
            </p>
          </div>

          {/* Cards */}
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {packages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className={`donate-card relative ${pkg.borderClass}`}
                style={{
                  backgroundColor: 'var(--mc-stone)',
                  border: '4px solid',
                  padding: '32px 24px',
                  animationDelay: `${idx * 0.15}s`,
                  background: `linear-gradient(135deg, var(--mc-stone) 0%, var(--mc-stone-light) 100%)`,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveCard(activeCard === pkg.id ? null : pkg.id)}
              >
                {/* Glow bg */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(ellipse at 50% 0%, ${pkg.glow} 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Pixel corner decorations */}
                <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, backgroundColor: pkg.color === 'green' ? 'var(--mc-green)' : pkg.color === 'gold' ? 'var(--mc-gold)' : 'var(--mc-diamond)', opacity: 0.6 }} />
                <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, backgroundColor: pkg.color === 'green' ? 'var(--mc-green)' : pkg.color === 'gold' ? 'var(--mc-gold)' : 'var(--mc-diamond)', opacity: 0.6 }} />
                <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, backgroundColor: pkg.color === 'green' ? 'var(--mc-green)' : pkg.color === 'gold' ? 'var(--mc-gold)' : 'var(--mc-diamond)', opacity: 0.6 }} />
                <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, backgroundColor: pkg.color === 'green' ? 'var(--mc-green)' : pkg.color === 'gold' ? 'var(--mc-gold)' : 'var(--mc-diamond)', opacity: 0.6 }} />

                {/* Badge */}
                {pkg.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -2,
                      right: 24,
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '8px',
                      backgroundColor: 'var(--mc-gold)',
                      color: '#1a0a00',
                      padding: '4px 10px',
                      boxShadow: '2px 2px 0 var(--mc-gold-dark)',
                    }}
                  >
                    {pkg.badge}
                  </div>
                )}

                <div className="relative" style={{ zIndex: 1 }}>
                  {/* Package icon */}
                  <div className="text-center mb-4" style={{ fontSize: '48px' }}>
                    {pkg.emoji}
                  </div>

                  {/* Name */}
                  <div className="text-center mb-2">
                    <span
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '14px',
                        ...(pkg.color === 'green' && { color: 'var(--mc-green)' }),
                        ...(pkg.color === 'gold' && { color: 'var(--mc-gold)' }),
                        ...(pkg.color === 'diamond' && { color: 'var(--mc-diamond)' }),
                        textShadow: '2px 2px 0 rgba(0,0,0,0.8)',
                      }}
                    >
                      {pkg.name}
                    </span>
                  </div>

                  <p
                    className="text-center mb-6"
                    style={{
                      fontFamily: "'Rubik', sans-serif",
                      fontSize: '13px',
                      color: 'var(--mc-gray)',
                    }}
                  >
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div
                    className="text-center mb-6 py-3"
                    style={{
                      borderTop: '2px solid var(--mc-border)',
                      borderBottom: '2px solid var(--mc-border)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '28px',
                        ...(pkg.color === 'green' && { color: 'var(--mc-green)' }),
                        ...(pkg.color === 'gold' && { color: 'var(--mc-gold)' }),
                        ...(pkg.color === 'diamond' && { color: 'var(--mc-diamond)' }),
                        textShadow: '2px 2px 0 rgba(0,0,0,0.8)',
                      }}
                    >
                      {pkg.price}₽
                    </span>
                    <div
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '7px',
                        color: 'var(--mc-gray)',
                        marginTop: '4px',
                      }}
                    >
                      / НАВСЕГДА
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 space-y-2">
                    {pkg.features.map((f, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: "'Rubik', sans-serif",
                          fontSize: '13px',
                          color: '#c8d8e8',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            marginTop: '1px',
                            ...(pkg.color === 'green' && { color: 'var(--mc-green)' }),
                            ...(pkg.color === 'gold' && { color: 'var(--mc-gold)' }),
                            ...(pkg.color === 'diamond' && { color: 'var(--mc-diamond)' }),
                            fontFamily: "'Press Start 2P', monospace",
                            fontSize: '8px',
                          }}
                        >
                          ✔
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Buy button */}
                  <button className={`mc-btn ${pkg.btnClass} w-full`} style={{ fontSize: '9px', width: '100%', textAlign: 'center' }}>
                    🛒 КУПИТЬ {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section id="how" className="py-20 px-4 relative" style={{ zIndex: 2 }}>
        <div
          className="max-w-4xl mx-auto"
          style={{
            backgroundColor: 'var(--mc-stone)',
            border: '4px solid var(--mc-border)',
            padding: '48px 32px',
            position: 'relative',
            boxShadow: 'inset -4px -4px 0 0 rgba(0,0,0,0.4), inset 4px 4px 0 0 rgba(255,255,255,0.05)',
          }}
        >
          <div className="text-center mb-12">
            <div
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                color: 'var(--mc-gold)',
                letterSpacing: '3px',
                marginBottom: '12px',
              }}
            >
              ══ ИНСТРУКЦИЯ ══
            </div>
            <h2
              style={{
                fontFamily: "'Russo One', sans-serif",
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: '#e0e8f0',
              }}
            >
              КАК ПОЛУЧИТЬ ПРИВИЛЕГИЮ?
            </h2>
          </div>

          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
          >
            {[
              { step: '01', icon: '🎮', title: 'Зайди на сервер', desc: 'Подключись к серверу и скопируй свой ник' },
              { step: '02', icon: '🛒', title: 'Выбери пакет', desc: 'Нажми кнопку купить и введи свой ник' },
              { step: '03', icon: '💳', title: 'Оплати', desc: 'Оплати любым удобным способом — карта, СБП' },
              { step: '04', icon: '⚡', title: 'Получи', desc: 'Привилегии выданы автоматически за 1 минуту' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '32px',
                    color: 'rgba(90,173,63,0.2)',
                    marginBottom: '-8px',
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '9px',
                    color: 'var(--mc-green)',
                    marginBottom: '8px',
                    lineHeight: 1.5,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    fontSize: '13px',
                    color: 'var(--mc-gray)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICE BANNER */}
      <section className="py-12 px-4 relative" style={{ zIndex: 2 }}>
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            backgroundColor: 'rgba(90,173,63,0.1)',
            border: '4px solid var(--mc-green-dark)',
            padding: '24px 32px',
            boxShadow: '0 0 30px rgba(90,173,63,0.2)',
          }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }} className="animate-glow-pulse">⚡</div>
          <h3
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '11px',
              color: 'var(--mc-green)',
              marginBottom: '10px',
            }}
          >
            АВТОВЫДАЧА ПРИВИЛЕГИЙ
          </h3>
          <p
            style={{
              fontFamily: "'Rubik', sans-serif",
              fontSize: '14px',
              color: '#c8d8e8',
              lineHeight: 1.7,
            }}
          >
            После оплаты система автоматически выдаёт привилегии прямо в игре.<br />
            Не нужно писать администраторам — всё происходит мгновенно!<br />
            <span style={{ color: 'var(--mc-gold)' }}>Поддержка: Discord · VK · Telegram</span>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-4 text-center relative"
        style={{
          zIndex: 2,
          borderTop: '4px solid var(--mc-border)',
          backgroundColor: 'var(--mc-darker)',
        }}
      >
        <div
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '14px',
            color: 'var(--mc-green)',
            marginBottom: '8px',
          }}
        >
          CRAFTWORLD.RU
        </div>
        <p style={{ fontFamily: "'Rubik', sans-serif", fontSize: '12px', color: 'var(--mc-gray)' }}>
          © 2024 CraftWorld · Все права защищены · Не является публичной офертой
        </p>
        <div className="mt-6 flex justify-center gap-4">
          {['💬 Discord', '📘 VK', '✈️ Telegram'].map((link) => (
            <button
              key={link}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '7px',
                backgroundColor: 'var(--mc-stone)',
                border: '2px solid var(--mc-border)',
                color: 'var(--mc-gray)',
                padding: '8px 12px',
                cursor: 'pointer',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
