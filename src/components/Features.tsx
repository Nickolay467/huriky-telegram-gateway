
import { Shield, Zap, Globe, Wifi, MessageSquare } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 bg-telegram-darker" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-telegram-card px-3 py-1 text-sm">
              <span className="text-telegram-yellow font-medium">Премиум функции</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Преимущества VLESS VPN доступа
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Испытайте лучшие технологии VPN с нашими премиум-функциями, разработанными для максимальной конфиденциальности и производительности.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:py-12 px-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Globe className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">Стабильность во всех регионах</h3>
            <p className="text-gray-400 mt-2">
              Стабильное и надежное соединение, где бы вы ни находились.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <MessageSquare className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">Поддержка 24/7</h3>
            <p className="text-gray-400 mt-2">
              Наша команда всегда готова помочь с любыми вопросами.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Wifi className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">Высокая скорость</h3>
            <p className="text-gray-400 mt-2">
              Скорость до 150 Мб/с для стриминга и загрузок.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Shield className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">Поддержка всех устройств</h3>
            <p className="text-gray-400 mt-2">
              Совместимость с мобильными устройствами, компьютерами и планшетами.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Shield className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">Без логов активности</h3>
            <p className="text-gray-400 mt-2">
              Ваша конфиденциальность гарантирована нашей политикой отсутствия логов.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Zap className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">100 ГБ трафика в месяц</h3>
            <p className="text-gray-400 mt-2">
              Щедрый объем данных для всех ваших потребностей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
