
import { Shield, Zap, Globe, Wifi, MessageSquare } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 bg-telegram-darker">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-telegram-card px-3 py-1 text-sm">
              <span className="text-telegram-yellow font-medium">Premium Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Advantages of VLESS VPN Access
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the best in VPN technology with our premium features designed for ultimate privacy and performance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:py-12 px-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Globe className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">Stable in All Regions</h3>
            <p className="text-gray-400 mt-2">
              Consistent and reliable connection no matter where you are in the world.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <MessageSquare className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">24/7 User Support</h3>
            <p className="text-gray-400 mt-2">
              Our team is always available to assist you with any issues or questions.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Wifi className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">High Connection Speed</h3>
            <p className="text-gray-400 mt-2">
              Experience blazing fast speeds up to 150 Mb/s for streaming and downloads.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Shield className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">All Device Support</h3>
            <p className="text-gray-400 mt-2">
              Compatible with all your devices including mobile, desktop, and tablets.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Shield className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">No Activity Logs</h3>
            <p className="text-gray-400 mt-2">
              Your privacy is guaranteed with our strict no-logs policy.
            </p>
          </div>
          <div className="rounded-xl border border-telegram-card bg-telegram-card/70 p-6 shadow-lg">
            <Zap className="h-12 w-12 text-telegram-yellow mb-4" />
            <h3 className="text-xl font-bold text-white">100GB Monthly Traffic</h3>
            <p className="text-gray-400 mt-2">
              Generous data allocation for all your browsing, streaming, and download needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
