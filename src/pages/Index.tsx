
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-telegram-dark flex flex-col">
      <Helmet>
        <title>HurikyNetwork - Secure VLESS VPN Access via Telegram</title>
        <meta name="description" content="Get fast, secure VLESS VPN access with HurikyNetwork's Telegram bot. Enjoy high-speed connections up to 150 Mb/s, no activity logs, and 24/7 support." />
        <meta name="keywords" content="VLESS VPN, Telegram bot, VPN subscription, secure VPN, private VPN, HurikyNetwork" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hurikynetwork.com/" />
        <meta property="og:title" content="HurikyNetwork - Secure VLESS VPN Access via Telegram" />
        <meta property="og:description" content="Get fast, secure VLESS VPN access with HurikyNetwork's Telegram bot. Enjoy high-speed connections up to 150 Mb/s, no activity logs, and 24/7 support." />
        <meta property="og:image" content="/lovable-uploads/dfc813fb-1801-4c81-96f6-31e392411529.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hurikynetwork.com/" />
        <meta property="twitter:title" content="HurikyNetwork - Secure VLESS VPN Access via Telegram" />
        <meta property="twitter:description" content="Get fast, secure VLESS VPN access with HurikyNetwork's Telegram bot. Enjoy high-speed connections up to 150 Mb/s, no activity logs, and 24/7 support." />
        <meta property="twitter:image" content="/lovable-uploads/dfc813fb-1801-4c81-96f6-31e392411529.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hurikynetwork.com/" />
      </Helmet>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
