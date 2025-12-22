import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import ChatWidget from '@/components/ChatWidget';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [amount, setAmount] = useState<string>('1000000');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const calculateMonthlyIncome = (investmentAmount: number): number => {
    const annualRate = 0.18;
    const monthlyIncome = (investmentAmount * annualRate) / 12;
    return monthlyIncome;
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setAmount(value);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleSliderChange = (value: number[]) => {
    setAmount(value[0].toString());
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const investmentAmount = Number(amount) || 0;
  const monthlyIncome = calculateMonthlyIncome(investmentAmount);
  const annualIncome = monthlyIncome * 12;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <ChatWidget />
      <Header />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-secondary leading-tight break-words">
                Профессиональные решения на фондовом рынке для юридических лиц
              </h1>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-xl text-muted-foreground">
                  Доход от размещения рублей и валюты выше, чем в банке
                </p>
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary/10 px-3 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-primary/20">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                  <span className="text-xl sm:text-3xl font-bold text-primary whitespace-nowrap">до 18%</span>
                  <span className="text-sm sm:text-lg text-muted-foreground whitespace-nowrap">годовых</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button size="lg" className="text-base sm:text-lg w-full sm:w-auto" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg w-full sm:w-auto" asChild>
                  <a href="#solutions">Посмотреть решения</a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 sm:pt-6">
                <a 
                  href="https://www.cbr.ru/finorg/foinfo/?ogrn=1069670122829" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <Icon name="Shield" className="text-primary group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
                  <span className="text-xs sm:text-sm font-medium underline decoration-transparent group-hover:decoration-primary transition-all">
                    Лицензия ЦБ РФ
                  </span>
                </a>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary flex-shrink-0" size={20} />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">На рынке с 2006</span>
                </div>
              </div>
            </div>

            <Card className="shadow-xl animate-scale-in w-full">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-2xl">Калькулятор дохода</CardTitle>
                <CardDescription className="text-base sm:text-sm">Рассчитайте ваш ежемесячный доход</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <label className="text-base sm:text-sm font-medium text-foreground">
                    Сумма размещения
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={amount ? Number(amount).toLocaleString('ru-RU') : ''}
                      onChange={handleAmountChange}
                      placeholder="1 000 000"
                      className="text-xl sm:text-lg pr-12 sm:pr-12 h-14 sm:h-auto"
                    />
                    <span className="absolute right-4 sm:right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg sm:text-base">
                      ₽
                    </span>
                  </div>
                  <div className="pt-2">
                    <Slider
                      value={[investmentAmount]}
                      onValueChange={handleSliderChange}
                      min={100000}
                      max={50000000}
                      step={100000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm sm:text-xs text-muted-foreground mt-3">
                      <span>100 тыс ₽</span>
                      <span>50 млн ₽</span>
                    </div>
                  </div>
                </div>

                <div className={`bg-gradient-to-br from-primary/10 to-accent/10 p-5 sm:p-6 rounded-xl border-2 border-primary/20 transition-all duration-300 ${isAnimating ? 'shadow-lg scale-[1.01]' : ''}`}>
                  <div className="space-y-4">
                    <div className="text-center space-y-2">
                      <p className="text-base sm:text-sm text-muted-foreground font-medium">Ежемесячный доход</p>
                      <p className={`text-3xl sm:text-4xl font-bold text-primary break-all transition-all duration-500 ease-out ${isAnimating ? 'animate-pulse-scale' : ''}`}>
                        {formatCurrency(monthlyIncome)}
                      </p>
                    </div>
                    <div className="border-t border-primary/20 pt-4">
                      <div className="text-center space-y-2">
                        <p className="text-base sm:text-sm text-muted-foreground font-medium">Годовой доход</p>
                        <p className={`text-2xl sm:text-2xl font-bold text-accent break-all transition-all duration-500 ease-out ${isAnimating ? 'animate-pulse-scale' : ''}`}>
                          {formatCurrency(annualIncome)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <Icon name="TrendingUp" className="text-accent transition-transform duration-300 hover:scale-110" size={20} />
                      <p className="text-sm sm:text-xs text-muted-foreground">при ставке 18% годовых</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full text-lg sm:text-base h-14 sm:h-auto" size="lg">
                  <a href="#contact">Оставить заявку</a>
                </Button>

                <div className="bg-muted/50 p-4 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-xs text-muted-foreground leading-relaxed">
                    <Icon name="Info" className="inline-block mr-1" size={16} />
                    Расчет является ориентировочным и не является офертой и индивидуальной инвестиционной рекомендацией. Чтобы получить более точный расчет оставьте Заявку и укажите в комментарии сумму, которую вы планируете разместить.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-16 text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Наши решения</h2>
            <p className="text-base sm:text-xl text-white/90">
              Индивидуальный подход к размещению средств вашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-2xl">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PieChart" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Портфель облигаций</CardTitle>
                <CardDescription className="text-base">
                  с рейтингом не ниже А (Высокий уровень надежности)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Ежемесячные выплаты купонов до 18% годовых в рублях</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Диверсифицированный портфель надежных эмитентов</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Прогнозируемая доходность выше банковских депозитов</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Облигации номинированные в долларах, евро и юанях с расчетами в рублях</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-2xl">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Инструменты денежного рынка</CardTitle>
                <CardDescription className="text-base">
                  Биржевые операции РЕПО(овернайт) и фонды денежного рынка
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Быстрый выход в деньги для любой суммы</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Ежедневная выплата процентов</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Доходность на уровне Ключевой ставки ЦБ</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Оперативное управление денежным потоком</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-3 sm:mb-4">
              Преимущества работы с нами
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground">Надежность и профессионализм на каждом этапе</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Лицензия Банка России, член НАУФОР, часть финансовой группы Gx2. На рынке с 2006 года.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Персональный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Индивидуальный менеджер, который помогает на всех этапах — от открытия счета до получения дохода.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calculator" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Простой расчет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Прозрачные условия, регулярная отчетность и контроль над активами.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="LineChart" size={40} className="text-accent" />
                </div>
                <CardTitle className="text-xl">Доходность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Конкурентная доходность выше банковских депозитов с возможностью регулярных выплат.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" size={40} className="text-accent" />
                </div>
                <CardTitle className="text-xl">Сопровождение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Согласование конкретного портфеля облигаций. Консультирование по бухгалтерскому и налоговому учету
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={40} className="text-accent" />
                </div>
                <CardTitle className="text-xl">Быстрый старт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Открытие счета и начало работы в кратчайшие сроки. Минимум бюрократии.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">О компании Gx2 Invest</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Лицензия Банка России, член НАУФОР с 2006 года. Часть финансовой группы Gx2 с активами под управлением более 42 млрд.руб
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      <a 
                        href="https://www.cbr.ru/finorg/foinfo/?ogrn=1069670122829"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary"
                      >
                        Лицензия Банка России
                      </a>
                    </h3>
                    <p className="text-muted-foreground">
                      Лицензия на деятельность по управлению ценными бумагами № 065-12598-001000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Член НАУФОР</h3>
                    <p className="text-muted-foreground">
                      Соблюдение высоких стандартов профессиональной деятельности на рынке
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Финансовая группа Gx2</h3>
                    <p className="text-muted-foreground">
                      Активы по управлением группы более 42 млрд. руб.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary">Ключевые цифры</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="border-l-4 border-primary pl-3 sm:pl-4">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">2006</div>
                  <div className="text-muted-foreground">Год основания компании</div>
                </div>
                <div className="border-l-4 border-accent pl-3 sm:pl-4">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">19+</div>
                  <div className="text-muted-foreground">Лет опыта на фондовом рынке</div>
                </div>
                <div className="border-l-4 border-primary pl-3 sm:pl-4">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">+140%</div>
                  <div className="text-muted-foreground">Доходность клиентов за 3 года</div>
                </div>
                <div className="border-l-4 border-accent pl-3 sm:pl-4">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">100%</div>
                  <div className="text-muted-foreground">Надежность и прозрачность</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-white to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-3 sm:mb-4">Как начать работу с нами</h2>
            <p className="text-base sm:text-xl text-muted-foreground">Простой путь к эффективному размещению средств</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="relative overflow-hidden hover:shadow-xl transition-all group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <CardTitle className="text-xl text-center">Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Мы с вами свяжемся и обсудим все детали
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-all group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <CardTitle className="text-xl text-center">Заключите договор ДУ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Мы определим ваш инвестиционный профиль и откроем инвестиционный счет
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-all group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <CardTitle className="text-xl text-center">Пополняйте счет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Мы сформируем портфель с учетом ваших пожеланий
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-all group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <CardTitle className="text-xl text-center">Выводите доход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Когда вам нужно — регулярно или по запросу
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button size="lg" className="text-lg" asChild>
              <a href="#contact">Начать сейчас</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-3 sm:mb-4">Часто задаваемые вопросы</h2>
            <p className="text-base sm:text-xl text-muted-foreground">Ответы на ключевые вопросы о размещении средств</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Какая минимальная сумма для размещения?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Минимальная сумма размещения — от 3 млн рублей. Мы готовы обсудить индивидуальные условия для вашей компании.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Какая доходность по облигациям?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Доходность портфеля облигаций зависит от текущей рыночной ситуации, сроков размещения и ключевой ставки Банка России. При формировании портфеля мы отдаем предпочтение облигациям с ежемесячной выплатой купонов. По состоянию на 17 декабря 2025 года можно было составить портфель облигаций с рейтингом А и выше, сроком погашения 2 года и доходностью 18,6% годовых. Это выше, чем по банковским депозитам. Купонные выплаты поступают ежемесячно на инвестиционный счет юридического лица. По усмотрению клиента, купоны могут выводить ему на расчетный счет в банке или реинвестироваться.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Насколько безопасно размещение?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Безопасность обеспечивается несколькими факторами. АО "Джи Экс Ту Инвест" (торговая марка Gx2 Invest) - доверительный управляющий с лицензией Банка России и член Национальной ассоциации участников фондового рынка (НАУФОР) c 2006 года. Все активы клиентов (ценные бумаги и денежные средства) находятся на обособленных от собственных активов АО "Джи Экс Ту Инвест" счетах и хранятся в независимых российских депозитариях и банках с высоким рейтингом надежности. Согласно статье 1018 Гражданского кодекса Российской Федерации (ГК РФ), для активов клиентов ведётся самостоятельный учёт. Активы клиентов не включаются в баланс АО "Джи Экс Ту Инвест" на них не распространяются взыскания по обязательствам доверительного управляющего. При управлении активами клиентов используется диверсификация портфеля между надежными эмитентами и постоянный риск-менеджмент.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Как быстро можно вывести средства?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для инструментов денежного рынка или вывод купонного дохода — в течение 1-2 рабочих дней. Если для вывода необходимо будет продать облигаций, то срок зависит от текущей ликвидности рынка, обычно 3-5 рабочих дней. Возможно частичное снятие средств без закрытия всего портфеля.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Какие документы нужны для открытия счета?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для открытия инвестиционного счета ДУ потребуются: стандартный набор учредительных документов, паспорта руководителя и бенефициаров, решение о назначении руководителя и т.д.. Наш специалист поможет собрать все документы и подготовить их корректно. Допускается подписание документов с использованием Электронной цифровой подписью через сервис электронного документооборота - Диадок.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Нужно ли платить комиссии?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Gx2 Invest берет плату только за фактическое управление инвестиционным счетом, то есть, только после его пополнения денежными средствами или ценными бумагами. Плата за управление составляет 1% годовых от средневзвешенной суммы внесенных активов (минимум 30 000 руб. в год).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Что такое операции РЕПО (овернайт)?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                РЕПО овернайт — это краткосрочная сделка по размещению средств на 1 день под залог ценных бумаг. 
                Это самый ликвидный инструмент денежного рынка: вы размещаете деньги сегодня, а на следующий день 
                получаете их обратно с процентами. Доходность составляет около ключевой ставки ЦБ РФ, что значительно 
                выше банковских депозитов до востребования.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Чем фонды денежного рынка отличаются от банковских депозитов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Фонды денежного рынка (ФДР) инвестируют в краткосрочные долговые инструменты и операции РЕПО. 
                В отличие от депозитов, они предлагают: более высокую доходность (обычно на уровне ключевой ставки ЦБ), 
                возможность вывода средств в любой день без потери процентов, диверсификацию вложений между надежными 
                эмитентами. При этом средства не застрахованы АСВ, но риски минимальны за счет краткосрочного характера вложений.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg px-4 sm:px-6 border">
              <AccordionTrigger className="text-base sm:text-lg font-semibold hover:text-primary">
                Как работает расчет дохода по операциям РЕПО?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Доход по РЕПО рассчитывается за каждый день размещения. Формула: (Сумма × Ставка × Количество дней) / 365. 
                Например, при размещении 1 млн рублей под 16% годовых на 1 день доход составит примерно 438 рублей. 
                При регулярном размещении (например, на месяц) средний доход будет около 13 000 рублей в месяц. 
                Проценты начисляются автоматически и доступны для вывода или реинвестирования на следующий день.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ContactForm />

      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 shadow-2xl hover:shadow-3xl transition-shadow">
            <CardContent className="p-6 sm:p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Handshake" size={40} className="text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-3 sm:mb-4">
                Станьте партнером Gx2 Invest
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Получайте агентскую комиссию от привлеченных клиентов
              </p>
              <Button size="lg" className="text-base sm:text-lg w-full sm:w-auto" asChild>
                <a href="https://partners.gx2invest.ru" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <span>Узнать подробнее</span>
                  <Icon name="ExternalLink" size={20} className="ml-2 flex-shrink-0" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;