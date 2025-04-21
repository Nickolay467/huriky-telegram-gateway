
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    { duration: "30 дней", price: "150 ₽", popular: false },
    { duration: "90 дней", price: "400 ₽", popular: true },
    { duration: "180 дней", price: "700 ₽", popular: false },
  ];

  return (
    <section id="pricing" className="w-full py-12 bg-telegram-darker">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Тарифные планы
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
            Выберите подходящий вам тариф с оптимальным соотношением цены и качества
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {plans.map((plan) => (
            <Card key={plan.duration} className={`relative bg-telegram-card border-telegram-card ${plan.popular ? 'border-telegram-yellow' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-telegram-popular px-3 py-1 rounded-full text-xs font-semibold text-black">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-center text-white">{plan.duration}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-telegram-yellow mb-6">
                    {plan.price}
                  </p>
                  <Button className="w-full bg-telegram-blue hover:bg-telegram-blue/90" asChild>
                    <a href="https://t.me/hurikynetwork_bot" target="_blank" rel="noopener noreferrer">
                      Подключить
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
