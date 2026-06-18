import { AudioLines, FolderHeart, Keyboard, Upload, X } from "lucide-react";
import Image from "next/image";

export const Scribe = () => {
  const tabs = [
    {
      title: "Auto Notes",
      icon: <AudioLines className="w-4 h-4" />,
      active: true,
    },
    {
      title: "Type",
      icon: <Keyboard className="w-4 h-4" />,
      active: false,
    },
    {
      title: "Upload",
      icon: <Upload className="w-4 h-4" />,
      active: false,
    },
    {
      title: "Saved",
      icon: <FolderHeart className="w-4 h-4" />,
      active: false,
    },
  ];

  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.06)] border border-slate-100 p-5 relative select-none">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-archivo text-base font-semibold text-slate-800 tracking-tight">
          Scribeo is creating notes from meeting...
        </span>
        <button
          type="button"
          className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-50"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-slate-100 pb-2">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.title}
            className={`flex items-center gap-1.5 pb-2 text-sm font-medium transition-all duration-200 border-b-2 -mb-[9px] ${
              tab.active
                ? "border-violet-600 text-violet-600 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab.icon}
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative mt-5 h-64 bg-[#dfd6ff] rounded-2xl flex items-center justify-center overflow-visible">
        <p className="font-caveat text-4xl text-white/95 font-medium tracking-wide">
          Notes are being created
        </p>

        {/* Cute purple writing character */}
        <div className="absolute -bottom-1 -right-6 w-44 h-44 z-10">
          <Image
            src="/skribee.png"
            alt="Scribee writing character"
            width={180}
            height={180}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
