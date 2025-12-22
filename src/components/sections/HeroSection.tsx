import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const [amount, setAmount] = useState<string>('1000000');

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

  return (
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

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-5 sm:p-6 rounded-xl border-2 border-primary/20">
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <p className="text-base sm:text-sm text-muted-foreground font-medium">Ежемесячный доход</p>
                    <p className="text-3xl sm:text-4xl font-bold text-primary break-all">
                      {formatCurrency(monthlyIncome)}
                    </p>
                  </div>
                  <div className="border-t border-primary/20 pt-4">
                    <div className="text-center space-y-2">
                      <p className="text-base sm:text-sm text-muted-foreground font-medium">Годовой доход</p>
                      <p className="text-2xl sm:text-2xl font-bold text-accent break-all">
                        {formatCurrency(annualIncome)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Icon name="TrendingUp" className="text-accent" size={20} />
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
  );
};

export default HeroSection;