import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Какая минимальная сумма для начала инвестирования?',
      answer: 'Минимальная сумма размещения составляет 100 000 рублей. Это позволяет начать инвестировать с комфортного уровня и получать стабильный доход.'
    },
    {
      question: 'Как я могу быть уверен в безопасности моих инвестиций?',
      answer: 'Мы работаем на основании лицензии Центрального Банка РФ, что гарантирует соблюдение всех законодательных норм. Ваши средства размещаются в надежные финансовые инструменты, а отчетность предоставляется регулярно.'
    },
    {
      question: 'Какая доходность гарантируется?',
      answer: 'Доходность зависит от выбранной стратегии инвестирования и может достигать до 18% годовых. Точные условия обсуждаются индивидуально с каждым клиентом в зависимости от суммы размещения и инвестиционных целей.'
    },
    {
      question: 'Как часто я получаю отчеты о состоянии моих инвестиций?',
      answer: 'Отчетность предоставляется ежемесячно. Также вы в любой момент можете запросить детальную информацию о текущем состоянии портфеля у вашего персонального менеджера.'
    },
    {
      question: 'Можно ли вывести средства досрочно?',
      answer: 'Да, возможность досрочного вывода средств предусмотрена условиями договора. Конкретные условия зависят от выбранной стратегии инвестирования и оговариваются индивидуально.'
    },
    {
      question: 'Какие налоги нужно уплачивать с дохода?',
      answer: 'Доход от инвестиций облагается налогом согласно законодательству РФ. Мы предоставляем всю необходимую документацию для налоговой отчетности и можем проконсультировать по вопросам налогообложения.'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-secondary">
            Часто задаваемые вопросы
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            Ответы на популярные вопросы об инвестировании
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-100 rounded-xl px-4 sm:px-6 bg-white hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-sm sm:text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
