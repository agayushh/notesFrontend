import { Laptop, MailOpen } from "lucide-react";
import Image from "next/image";
import { Scribe } from "./homePageScribe";

export const LowerHeader = () => {
  return (
    <div className="relative w-full min-h-125 flex flex-col items-center justify-center pt-8 pb-32 overflow-hidden z-10">
      {/* Background Clouds */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/cloudsss.png"
          alt="cloud background"
          fill
          priority
          className="object-cover opacity-95"
        />
      </div>

      {/* Scribe Card & Floaties Container */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex items-center justify-center mt-6">
        {/* Floating Line-Art Icons (Left Side) */}
        <div className="absolute left-2 md:left-12 lg:left-4 top-12 flex flex-col gap-32 sm:flex select-none pointer-events-none">
          <MailOpen
            size={76}
            strokeWidth={0.8}
            className="rotate-28 text-slate-800/80 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
          />
          <Laptop
            size={76}
            strokeWidth={0.8}
            className="-rotate-12 text-slate-800/80 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
          />
        </div>

        {/* Center Card */}
        <div className="w-full flex justify-center">
          <Scribe />
        </div>
      </div>
    </div>
  );
};
