
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-telegram-darker/80 border-b border-telegram-card">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-1">
          <span className="text-telegram-yellow text-xl font-bold">⚡ Huriky</span>
          <span className="text-white text-xl font-bold">Network</span>
        </div>
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
      </div>
    </header>
  ); // Added closing semicolon
}  // Added closing curly brace for the component function
