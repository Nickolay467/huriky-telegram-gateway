
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 bg-telegram-darker/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-white">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-4 text-gray-400 md:text-lg">
            Узнайте больше о нашем VPN сервисе
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-telegram-card bg-telegram-darker rounded-lg px-4">
              <AccordionTrigger className="text-white hover:text-telegram-yellow">Что такое VLESS VPN?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                VLESS VPN - это современный, легкий и безопасный протокол VPN, обеспечивающий высокую скорость и надежное шифрование данных. Он оптимизирован для стабильной работы и обхода ограничений.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-telegram-card bg-telegram-darker rounded-lg px-4">
              <AccordionTrigger className="text-white hover:text-telegram-yellow">Какая максимальная скорость?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Наш сервис обеспечивает скорость до 150 Мб/с, что позволяет комфортно смотреть видео в HD качестве, играть в онлайн игры и работать с любыми приложениями без задержек.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-telegram-card bg-telegram-darker rounded-lg px-4">
              <AccordionTrigger className="text-white hover:text-telegram-yellow">Как начать использовать VPN?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Просто перейдите в наш Telegram бот, выберите подходящий тариф и следуйте инструкциям. Бот автоматически создаст для вас конфигурацию и предоставит все необходимые данные для подключения.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-telegram-card bg-telegram-darker rounded-lg px-4">
              <AccordionTrigger className="text-white hover:text-telegram-yellow">Безопасно ли использовать ваш VPN?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Да, мы используем современные протоколы шифрования и не ведем логов активности пользователей. Ваша приватность - наш главный приоритет.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
