import Image from "next/image";
import { Scribe } from "./homePageScribe";
import { MailOpen, Laptop } from "lucide-react";
export const LowerHeader = () => {
  return (
    <div className="flex flex-col items-center overflow-y-hidden justify-center h-[130vh] -mt-70 z-[-1]">
      <div className="absolute flex mr-10">
        <div className="flex flex-col gap-y-64">
          <MailOpen size={80} strokeWidth={0.9} className="rotate-28" />
          <Laptop size={80} strokeWidth={0.9} className="-rotate-12" />
        </div>
        <Scribe />
      </div>
      <Image
        src="/cloudsss.png"
        alt="clouds"
        width={1900}
        height={1000}
        className="w-screen h-[130vh] overflow-y-hidden"
      />
    </div>
  );
};
