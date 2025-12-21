import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const validateINN = (inn: string): boolean => {
    const cleanINN = inn.replace(/\D/g, '');
    if (cleanINN.length !== 10 && cleanINN.length !== 12) return false;
    
    if (cleanINN.length === 10) {
      const coefficients = [2, 4, 10, 3, 5, 9, 4, 6, 8];
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cleanINN[i]) * coefficients[i];
      }
      const checkDigit = (sum % 11) % 10;
      return checkDigit === parseInt(cleanINN[9]);
    }
    
    if (cleanINN.length === 12) {
      const coefficients1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
      const coefficients2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
      
      let sum1 = 0;
      for (let i = 0; i < 10; i++) {
        sum1 += parseInt(cleanINN[i]) * coefficients1[i];
      }
      const checkDigit1 = (sum1 % 11) % 10;
      
      let sum2 = 0;
      for (let i = 0; i < 11; i++) {
        sum2 += parseInt(cleanINN[i]) * coefficients2[i];
      }
      const checkDigit2 = (sum2 % 11) % 10;
      
      return checkDigit1 === parseInt(cleanINN[10]) && checkDigit2 === parseInt(cleanINN[11]);
    }
    
    return false;
  };

  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 11 && cleanPhone.startsWith('7');
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formatPhoneInput = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    
    if (digits.length === 0) return '';
    
    let formatted = '+7';
    if (digits.length > 1) {
      formatted += ' (' + digits.substring(1, 4);
    }
    if (digits.length >= 5) {
      formatted += ') ' + digits.substring(4, 7);
    }
    if (digits.length >= 8) {
      formatted += '-' + digits.substring(7, 9);
    }
    if (digits.length >= 10) {
      formatted += '-' + digits.substring(9, 11);
    }
    
    return formatted;
  };

  const formatINNInput = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    return digits.substring(0, 12);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneInput(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleINNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatINNInput(e.target.value);
    setFormData({ ...formData, company: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateINN(formData.company)) {
      toast({
        title: 'Ошибка валидации',
        description: 'ИНН должен содержать 10 или 12 цифр и быть корректным.',
        variant: 'destructive',
      });
      return;
    }
    
    if (!validatePhone(formData.phone)) {
      toast({
        title: 'Ошибка валидации',
        description: 'Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX.',
        variant: 'destructive',
      });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      toast({
        title: 'Ошибка валидации',
        description: 'Введите корректный email адрес.',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш специалист свяжется с вами в ближайшее время.',
    });
    setFormData({ name: '', company: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-secondary to-secondary/90">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Свяжитесь с нами</h2>
          <p className="text-base sm:text-xl text-white/90">
            Оставьте заявку — обсудим ваши задачи и подберем оптимальное решение
          </p>
        </div>

        <Card className="shadow-2xl">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
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
                    placeholder="ИНН *"
                    value={formData.company}
                    onChange={handleINNChange}
                    required
                    maxLength={12}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__ *"
                    value={formData.phone}
                    onChange={handlePhoneChange}
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

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          <div className="text-center text-white">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Icon name="Phone" size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Телефон</h3>
            <a href="tel:88007751376" className="text-white/90 hover:text-white transition-colors">
              8 800 775 13 76
            </a>
          </div>
          <div className="text-center text-white">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Icon name="Mail" size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Email</h3>
            <a href="mailto:sales@gx2invest.ru" className="text-white/90 hover:text-white transition-colors">
              sales@gx2invest.ru
            </a>
          </div>
          <div className="text-center text-white">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Офисы</h3>
            <a 
              href="https://gx2invest.ru/contacts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
            >
              Екатеринбург, Москва
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;