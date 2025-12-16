import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>('1000000');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

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
  };

  const handleSliderChange = (value: number[]) => {
    setAmount(value[0].toString());
  };

  const investmentAmount = Number(amount) || 0;
  const monthlyIncome = calculateMonthlyIncome(investmentAmount);
  const annualIncome = monthlyIncome * 12;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш специалист свяжется с вами в ближайшее время.',
    });
    setFormData({ name: '', company: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Chat Widget */}
      {chatOpen && (
        <Card className="fixed bottom-24 right-6 w-[350px] shadow-2xl z-50 animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-white pb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <CardTitle className="text-lg">Онлайн-консультант</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setChatOpen(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">
                Здравствуйте! Меня зовут Анна, я помогу вам с вопросами по размещению средств.
              </p>
              <p className="text-sm text-muted-foreground">
                Свяжитесь с нами удобным способом:
              </p>
            </div>
            
            <div className="space-y-3">
              <Button asChild className="w-full justify-start" size="lg" variant="outline">
                <a href="tel:+74951234567" className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </a>
              </Button>
              
              <Button asChild className="w-full justify-start bg-[#25D366] hover:bg-[#20BD5A] text-white" size="lg">
                <a href="https://wa.me/74951234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={20} />
                  <span>WhatsApp</span>
                </a>
              </Button>
              
              <Button asChild className="w-full justify-start bg-[#0088cc] hover:bg-[#0077b3] text-white" size="lg">
                <a href="https://t.me/gx2invest" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Icon name="Send" size={20} />
                  <span>Telegram</span>
                </a>
              </Button>
              
              <Button asChild className="w-full justify-start" size="lg" variant="outline">
                <a href="mailto:info@gx2invest.ru" className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span>info@gx2invest.ru</span>
                </a>
              </Button>
            </div>
            
            <Button asChild className="w-full" size="lg">
              <a href="#contact">Оставить заявку</a>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Chat Button */}
      <Button
        size="lg"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
        onClick={() => setChatOpen(!chatOpen)}
      >
        {chatOpen ? (
          <Icon name="X" size={28} />
        ) : (
          <Icon name="MessageCircle" size={28} />
        )}
      </Button>

      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/m_logo-gx2-invest-blue-dark-768x128.png" 
              alt="Gx2 Invest" 
              className="h-10 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
              Решения
            </a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О компании
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <a href="#contact">Оставить заявку</a>
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#solutions" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Решения
                  </a>
                  <a 
                    href="#advantages" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Преимущества
                  </a>
                  <a 
                    href="#about" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={closeMobileMenu}
                  >
                    О компании
                  </a>
                  <a 
                    href="#faq" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={closeMobileMenu}
                  >
                    FAQ
                  </a>
                  <a 
                    href="#contact" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Контакты
                  </a>
                  <Button asChild className="mt-4" onClick={closeMobileMenu}>
                    <a href="#contact">Оставить заявку</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Профессиональные решения на фондовом рынке для юридических лиц
              </h1>
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground">
                  Доход от размещения рублей и валюты выше, чем в банке
                </p>
                <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-xl border-2 border-primary/20">
                  <Icon name="TrendingUp" className="text-primary" size={28} />
                  <span className="text-3xl font-bold text-primary">до 18%</span>
                  <span className="text-lg text-muted-foreground">годовых</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#solutions">Посмотреть решения</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <a 
                  href="https://www.cbr.ru/finorg/foinfo/?ogrn=1069670122829" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <Icon name="Shield" className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-sm font-medium underline decoration-transparent group-hover:decoration-primary transition-all">
                    Лицензия ЦБ РФ
                  </span>
                </a>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="text-sm font-medium">На рынке с 2006</span>
                </div>
              </div>
            </div>

            <Card className="shadow-xl animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Калькулятор дохода</CardTitle>
                <CardDescription>Рассчитайте ваш ежемесячный доход</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-medium text-foreground">
                    Сумма размещения
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={amount ? Number(amount).toLocaleString('ru-RU') : ''}
                      onChange={handleAmountChange}
                      placeholder="1 000 000"
                      className="text-lg pr-12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
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
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>100 тыс ₽</span>
                      <span>50 млн ₽</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl border-2 border-primary/20">
                  <div className="space-y-4">
                    <div className="text-center space-y-1">
                      <p className="text-sm text-muted-foreground">Ежемесячный доход</p>
                      <p className="text-4xl font-bold text-primary">
                        {formatCurrency(monthlyIncome)}
                      </p>
                    </div>
                    <div className="border-t border-primary/20 pt-3">
                      <div className="text-center space-y-1">
                        <p className="text-sm text-muted-foreground">Годовой доход</p>
                        <p className="text-2xl font-bold text-accent">
                          {formatCurrency(annualIncome)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-1">
                      <Icon name="TrendingUp" className="text-accent" size={18} />
                      <p className="text-xs text-muted-foreground">при ставке 18% годовых</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <a href="#contact">Оставить заявку</a>
                </Button>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <Icon name="Info" className="inline-block mr-1" size={14} />
                    Расчет является ориентировочным и не является офертой и индивидуальной инвестиционной рекомендацией. Чтобы получить более точный расчет оставьте Заявку и укажите в комментарии сумму, которую вы планируете разместить.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-4 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши решения</h2>
            <p className="text-xl text-white/90">
              Индивидуальный подход к размещению средств вашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
              Преимущества работы с нами
            </h2>
            <p className="text-xl text-muted-foreground">Надежность и профессионализм на каждом этапе</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                  Понятная система расчета доходности. Прозрачная отчетность и полный контроль над активами.
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
                  Полное юридическое и операционное сопровождение. Помощь в оформлении документов.
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

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary">О компании Gx2 Invest</h2>
              <p className="text-lg text-muted-foreground">
                Gx2 Invest — профессиональный участник рынка ценных бумаг с 2006 года. Мы специализируемся на
                управлении активами юридических лиц и предоставляем комплексные решения для эффективного
                размещения свободных денежных средств.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Лицензия Банка России</h3>
                    <p className="text-muted-foreground">
                      Профессиональный участник рынка ценных бумаг, деятельность под контролем регулятора
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
                      Часть крупной финансовой группы с устойчивым положением на рынке
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-secondary">Ключевые цифры</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-4xl font-bold text-primary mb-1">2006</div>
                  <div className="text-muted-foreground">Год основания компании</div>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <div className="text-4xl font-bold text-accent mb-1">19+</div>
                  <div className="text-muted-foreground">Лет опыта на фондовом рынке</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-4xl font-bold text-primary mb-1">500+</div>
                  <div className="text-muted-foreground">Корпоративных клиентов</div>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <div className="text-4xl font-bold text-accent mb-1">100%</div>
                  <div className="text-muted-foreground">Надежность и прозрачность</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-white to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">Как начать работу с нами</h2>
            <p className="text-xl text-muted-foreground">Простой путь к эффективному размещению средств</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg" asChild>
              <a href="#contact">Начать сейчас</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на ключевые вопросы о размещении средств</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Какая минимальная сумма для размещения?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Минимальная сумма размещения зависит от выбранного инструмента. Для портфеля облигаций — от 1
                млн рублей, для инструментов денежного рынка — от 500 тыс. рублей. Мы готовы обсудить
                индивидуальные условия для вашей компании.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Какая доходность по облигациям?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Доходность портфеля облигаций зависит от текущей рыночной ситуации и составляет в среднем
                10-14% годовых. Это выше, чем по банковским депозитам. Купонные выплаты поступают ежемесячно на
                расчетный счет компании.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Насколько безопасно размещение?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Безопасность обеспечивается несколькими факторами: лицензия Банка России, членство в НАУФОР,
                диверсификация портфеля между надежными эмитентами, постоянный риск-менеджмент. Ценные бумаги
                хранятся в депозитарии, отдельно от активов брокера.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как быстро можно вывести средства?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для инструментов денежного рынка — в течение 1-2 рабочих дней. Для портфеля облигаций срок
                зависит от текущей ликвидности рынка, обычно 3-5 рабочих дней. Возможно частичное снятие
                средств без разрыва всего портфеля.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Какие документы нужны для открытия счета?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для открытия брокерского счета потребуются: выписка из ЕГРЮЛ, учредительные документы, паспорта
                руководителя и бенефициаров, решение о назначении руководителя. Наш специалист поможет собрать
                все документы и подготовить их корректно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Нужно ли платить комиссии?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, взимается брокерская комиссия и плата за депозитарное обслуживание. Размер комиссии зависит
                от объема активов и выбранного тарифа. Все комиссии прозрачны и обсуждаются до заключения
                договора. Скрытых платежей нет.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Что такое операции РЕПО (овернайт)?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                РЕПО овернайт — это краткосрочная сделка по размещению средств на 1 день под залог ценных бумаг. 
                Это самый ликвидный инструмент денежного рынка: вы размещаете деньги сегодня, а на следующий день 
                получаете их обратно с процентами. Доходность составляет около ключевой ставки ЦБ РФ, что значительно 
                выше банковских депозитов до востребования.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Чем фонды денежного рынка отличаются от банковских депозитов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Фонды денежного рынка (ФДР) инвестируют в краткосрочные долговые инструменты и операции РЕПО. 
                В отличие от депозитов, они предлагают: более высокую доходность (обычно на уровне ключевой ставки ЦБ), 
                возможность вывода средств в любой день без потери процентов, диверсификацию вложений между надежными 
                эмитентами. При этом средства не застрахованы АСВ, но риски минимальны за счет краткосрочного характера вложений.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
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

      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-white/90">
              Оставьте заявку — обсудим ваши задачи и подберем оптимальное решение
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Ваше имя *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Название компании *"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о ваших задачах и планах по размещению средств"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-white/90">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-white/90">info@gx2invest.ru</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Офис</h3>
              <p className="text-white/90">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/m_logo-gx2-invest-blue-dark-768x128.png" 
                alt="Gx2 Invest" 
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="text-center md:text-left text-white/80">
              <p>© 2024 Gx2 Invest. Все права защищены.</p>
              <p className="text-sm mt-1">Лицензия профессионального участника рынка ценных бумаг</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;