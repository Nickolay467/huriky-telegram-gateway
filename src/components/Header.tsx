
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-telegram-darker/80 border-b border-telegram-card">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-1">
          <span className="text-telegram-yellow text-xl font-bold">⚡ Huriky</span>
          <span className="text-white text-xl font-bold">Network</span>
        </div>
        
        {isMobile ? (
          <div className="flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-telegram-yellow"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-white hover:text-telegram-yellow transition-colors cursor-pointer px-3"
                    onClick={() => scrollToSection('features')}
                  >
                    Возможности
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-white hover:text-telegram-yellow transition-colors cursor-pointer px-3"
                    onClick={() => scrollToSection('pricing')}
                  >
                    Тарифы
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-white hover:text-telegram-yellow transition-colors cursor-pointer px-3"
                    onClick={() => scrollToSection('faq')}
                  >
                    FAQ
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a
              href="https://t.me/hurikynetwork_support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-telegram-blue px-3 py-2 text-sm font-medium text-white hover:bg-telegram-blue/90 transition-colors"
            >
              Техническая поддержка
            </a>
          </div>
        )}
      </div>
      
      {/* Mobile menu dropdown */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-telegram-darker border-b border-telegram-card py-4 px-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5">
          <div 
            className="text-white hover:text-telegram-yellow transition-colors cursor-pointer py-2"
            onClick={() => scrollToSection('features')}
          >
            Возможности
          </div>
          <div 
            className="text-white hover:text-telegram-yellow transition-colors cursor-pointer py-2"
            onClick={() => scrollToSection('pricing')}
          >
            Тарифы
          </div>
          <div 
            className="text-white hover:text-telegram-yellow transition-colors cursor-pointer py-2"
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </div>
          <a
            href="https://t.me/hurikynetwork_support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-telegram-blue px-3 py-2 text-sm font-medium text-white hover:bg-telegram-blue/90 transition-colors"
          >
            Техническая поддержка
          </a>
        </div>
      )}
    </header>
  );
}
