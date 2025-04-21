
export default function Footer() {
  return (
    <footer className="w-full py-6 bg-telegram-darker border-t border-telegram-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-1">
            <span className="text-telegram-yellow font-bold">Huriky</span>
            <span className="text-white font-bold">Network</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 HurikyNetwork. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-telegram-yellow">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-telegram-yellow">
              Privacy
            </a>
            <a href="https://t.me/hurikynetwork_bot" className="text-gray-500 hover:text-telegram-yellow">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
