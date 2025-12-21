import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/m_logo-gx2-invest-blue-dark-768x128.png" 
              alt="Gx2 Invest" 
              className="h-8 w-auto object-contain brightness-0 invert mb-4"
            />
            <a 
              href="https://www.cbr.ru/finorg/foinfo/?ogrn=1069670122829" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-sm block"
            >
              Лицензия профессионального участника рынка ценных бумаг № 065-12598-001000
            </a>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <a 
                href="tel:88007751376" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Icon name="Phone" size={16} />
                <span>8 800 775 13 76</span>
              </a>
              <a 
                href="mailto:sales@gx2invest.ru" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Icon name="Mail" size={16} />
                <span>sales@gx2invest.ru</span>
              </a>
              <a 
                href="https://gx2invest.ru/contacts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Icon name="MapPin" size={16} />
                <span>Екатеринбург, Москва</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Ссылки</h3>
            <div className="space-y-2">
              <a 
                href="https://gx2invest.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Основной сайт
              </a>
              <a 
                href="https://gx2invest.ru/informations/protection-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a 
                href="https://t.me/gx2invest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
              <a 
                href="https://vk.com/gx2invest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="VK"
              >
                <Icon name="Share2" size={20} />
              </a>
              <a 
                href="https://dzen.ru/gx2invest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Дзен"
              >
                <Icon name="Rss" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-4 sm:pt-6 text-center text-white/70 text-xs sm:text-sm">
          <p>© 2025 Gx2 Invest. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;