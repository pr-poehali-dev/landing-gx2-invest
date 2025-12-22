import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Solution {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    icon: 'Banknote',
    title: 'Доверительное управление',
    description: 'Профессиональное управление вашими активами с максимальной доходностью',
    features: [
      'Индивидуальная стратегия',
      'Управление рисками',
      'Прозрачная отчетность',
      'Гибкий вывод средств'
    ]
  },
  {
    icon: 'PiggyBank',
    title: 'Структурные продукты',
    description: 'Инновационные решения для диверсификации портфеля',
    features: [
      'Гарантия возврата до 100% капитала',
      'Доход до 18% годовых',
      'Валютная защита',
      'Простое оформление'
    ]
  },
  {
    icon: 'TrendingUp',
    title: 'Брокерское обслуживание',
    description: 'Доступ к торгам на российских и международных биржах',
    features: [
      'Низкие комиссии',
      'Торговля акциями и облигациями',
      'Квалифицированная поддержка',
      'Аналитика и рекомендации'
    ]
  }
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-secondary to-secondary/90">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-16 text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Наши решения</h2>
          <p className="text-base sm:text-xl text-white/90">
            Индивидуальный подход к размещению средств вашей компании
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title} 
              className="bg-white/95 backdrop-blur hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <Icon name={solution.icon as any} className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg sm:text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">Узнать подробнее</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
