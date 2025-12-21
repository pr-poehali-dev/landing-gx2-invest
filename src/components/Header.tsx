import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
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
  );
};

export default Header;
