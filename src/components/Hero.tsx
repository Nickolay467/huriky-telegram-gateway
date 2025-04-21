
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-telegram-darker px-3 py-1 text-sm">
                <span className="text-telegram-yellow font-medium">Безопасный VPN доступ</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                <span className="text-telegram-yellow">Huriky</span>Network
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Быстрый, безопасный и надежный VLESS VPN доступ через нашего Telegram бота. Оставайтесь защищенными с приватным подключением в любой точке мира.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-telegram-blue hover:bg-telegram-blue/90 text-white rounded-xl px-8 py-6 text-lg font-medium" asChild>
                <a href="https://t.me/hurikynetwork_bot" target="_blank" rel="noopener noreferrer">
                  Подключить VPN сейчас <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative w-[280px] md:w-[320px] lg:w-[380px] h-[640px] overflow-hidden rounded-2xl bg-telegram-darker shadow-xl border border-telegram-card">
              <img 
                src="/lovable-uploads/dfc813fb-1801-4c81-96f6-31e392411529.png" 
                alt="Интерфейс Telegram бота HurikyNetwork" 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 border-t border-l border-r border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
