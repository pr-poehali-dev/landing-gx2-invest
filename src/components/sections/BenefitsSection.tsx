import Icon from '@/components/ui/icon';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'Shield',
      title: 'Лицензия ЦБ РФ',
      description: 'Работаем в соответствии с законодательством РФ',
      link: 'https://www.cbr.ru/finorg/foinfo/?ogrn=1069670122829'
    },
    {
      icon: 'TrendingUp',
      title: 'Высокая доходность',
      description: 'До 18% годовых — выше банковских ставок'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Персональный менеджер для каждого клиента'
    },
    {
      icon: 'FileText',
      title: 'Прозрачность',
      description: 'Регулярная отчетность по всем операциям'
    },
    {
      icon: 'Award',
      title: 'Опыт с 2006 года',
      description: 'Более 18 лет успешной работы на рынке'
    },
    {
      icon: 'Lock',
      title: 'Безопасность',
      description: 'Защита активов и конфиденциальность данных'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-secondary">
            Почему выбирают нас
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Надежный партнер для инвестиций вашего бизнеса
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {benefit.link ? (
                <a 
                  href={benefit.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={benefit.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-secondary group-hover:text-primary transition-colors underline decoration-transparent group-hover:decoration-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </a>
              ) : (
                <>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={benefit.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-secondary group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
