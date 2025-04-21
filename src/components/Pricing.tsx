
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";

export default function Pricing() {
  return (
    <section className="w-full py-12 bg-telegram-darker">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Тарифные планы
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
            Выберите подходящий вам тариф с оптимальным соотношением цены и качества
          </p>
        </div>
        <div className="mt-8">
          <div className="rounded-xl border border-telegram-card overflow-hidden">
            <Table>
              <TableHeader className="bg-telegram-dark">
                <TableRow>
                  <TableHead className="text-telegram-yellow">Срок</TableHead>
                  <TableHead className="text-telegram-yellow text-right">Стоимость</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-white">30 дней</TableCell>
                  <TableCell className="text-white text-right">150 ₽</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">90 дней</TableCell>
                  <TableCell className="text-white text-right">400 ₽</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">180 дней</TableCell>
                  <TableCell className="text-white text-right">700 ₽</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
