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
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

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
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Эффективное размещение свободных средств
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональные решения на фондовом рынке для юридических лиц. Размещайте деньги под проценты, которые компенсируют текущие издержки компании.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#solutions">Посмотреть решения</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span className="text-sm font-medium">Лицензия ЦБ РФ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="text-sm font-medium">На рынке с 2006</span>
                </div>
              </div>
            </div>

            <Card className="shadow-xl animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Быстрая заявка</CardTitle>
                <CardDescription>Оставьте контакты — мы свяжемся в течение часа</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Название компании"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
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
                  Размещение денег под процент, компенсирующий текущие издержки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Ежемесячные купонные выплаты на расчетный счет компании</p>
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
                  <p className="text-sm">Полное сопровождение и отчетность</p>
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
                  Краткосрочное размещение с высокой ликвидностью
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Быстрый доступ к средствам в любой момент</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Минимальные сроки размещения от 1 дня</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm">Конкурентная доходность при полной ликвидности</p>
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