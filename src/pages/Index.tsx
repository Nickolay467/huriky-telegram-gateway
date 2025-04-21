
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-telegram-dark flex flex-col">
      <Helmet>
        <title>HurikyNetwork - Безопасный VLESS VPN доступ через Telegram</title>
        <meta name="description" content="Получите быстрый и безопасный доступ к VLESS VPN через Telegram бота HurikyNetwork. Наслаждайтесь высокой скоростью до 150 Мб/с, без логирования активности и с поддержкой 24/7." />
        <meta name="keywords" content="VLESS VPN, Telegram бот, VPN подписка, безопасный VPN, приватный VPN, HurikyNetwork" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hurikynetwork.com/" />
        <meta property="og:title" content="HurikyNetwork - Безопасный VLESS VPN доступ через Telegram" />
        <meta property="og:description" content="Получите быстрый и безопасный доступ к VLESS VPN через Telegram бота HurikyNetwork. Наслаждайтесь высокой скоростью до 150 Мб/с, без логирования активности и с поддержкой 24/7." />
        <meta property="og:image" content="/lovable-uploads/dfc813fb-1801-4c81-96f6-31e392411529.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hurikynetwork.com/" />
        <meta property="twitter:title" content="HurikyNetwork - Безопасный VLESS VPN доступ через Telegram" />
        <meta property="twitter:description" content="Получите быстрый и безопасный доступ к VLESS VPN через Telegram бота HurikyNetwork. Наслаждайтесь высокой скоростью до 150 Мб/с, без логирования активности и с поддержкой 24/7." />
        <meta property="twitter:image" content="/lovable-uploads/dfc813fb-1801-4c81-96f6-31e392411529.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hurikynetwork.com/" />
      </Helmet>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
