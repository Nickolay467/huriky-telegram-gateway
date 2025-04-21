
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-telegram-dark to-telegram-darker">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Готовы начать?
            </h2>
            <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Присоединяйтесь к тысячам довольных пользователей, наслаждающихся безопасным и приватным доступом в интернет.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md space-y-4">
            <Button className="w-full bg-telegram-blue hover:bg-telegram-blue/90 text-white rounded-xl py-6 text-lg font-medium" asChild>
              <a href="https://t.me/hurikynetwork_bot" target="_blank" rel="noopener noreferrer">
                Открыть Telegram бота <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-xs text-gray-500">
              Используя наш сервис, вы соглашаетесь с Условиями использования и Политикой конфиденциальности.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
