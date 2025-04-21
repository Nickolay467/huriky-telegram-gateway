
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-telegram-darker/80 border-b border-telegram-card">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center space-x-1 mr-4">
          <span className="text-telegram-yellow text-xl font-bold">⚡ Huriky</span>
          <span className="text-white text-xl font-bold">Network</span>
        </div>
        <div className="ml-auto">
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
  );
}
