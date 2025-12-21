import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {chatOpen && (
        <Card className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[350px] max-w-[350px] shadow-2xl z-50 animate-scale-in">
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
                <a href="tel:88007751376" className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span>8 800 775 13 76</span>
                </a>
              </Button>
              
              <Button asChild className="w-full justify-start bg-[#25D366] hover:bg-[#20BD5A] text-white" size="lg">
                <a href="https://wa.me/79122434435" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={20} />
                  <span>WhatsApp</span>
                </a>
              </Button>
              
              <Button asChild className="w-full justify-start bg-[#0088cc] hover:bg-[#0077b3] text-white" size="lg">
                <a href="https://t.me/+79122434435" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Icon name="Send" size={20} />
                  <span>Telegram</span>
                </a>
              </Button>
              
              <Button asChild className="w-full justify-start" size="lg" variant="outline">
                <a href="mailto:sales@gx2invest.ru" className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span>sales@gx2invest.ru</span>
                </a>
              </Button>
            </div>
            
            <Button asChild className="w-full" size="lg">
              <a href="#contact">Оставить заявку</a>
            </Button>
          </CardContent>
        </Card>
      )}

      <Button
        size="lg"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
        onClick={() => setChatOpen(!chatOpen)}
      >
        {chatOpen ? (
          <Icon name="X" size={24} className="sm:w-7 sm:h-7" />
        ) : (
          <Icon name="MessageCircle" size={24} className="sm:w-7 sm:h-7" />
        )}
      </Button>
    </>
  );
};

export default ChatWidget;