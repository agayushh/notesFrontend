import { Apple, ChevronRight } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4 text-center">
      {/* Accent script font */}
      <span className="font-caveat text-2xl text-slate-500 italic mb-4 tracking-wide">
        Awesome notes everywhere
      </span>

      {/* Main Hero Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#090d1a] tracking-tight leading-[1.1] font-archivo max-w-3xl mb-4">
        Every Conversation into <br />
        <span className="bg-linear-to-r from-slate-900 to-slate-850 bg-clip-text text-transparent">
          Actionable Notes
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-500 font-archivo font-medium max-w-xl mb-8 leading-relaxed">
        Your Meetings. Your Chats. All Turned Into Actionable Notes.
      </p>

      {/* Main CTA */}
      <button
        type="button"
        className="bg-slate-950 hover:bg-slate-900 text-white px-7 py-3 rounded-full font-archivo font-semibold text-[14px] flex items-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        Get started Free
        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
      </button>

      {/* Chrome & App Store buttons */}
      <div className="flex flex-row items-center justify-center gap-4 mt-10">
        <div className="flex items-center gap-2.5 bg-white/90 border border-slate-100 rounded-2xl px-4 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)] hover:border-slate-200 transition-all duration-200 cursor-pointer select-none">
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-slate-700 leading-tight">
              Add to Chrome
            </span>
            <span className="text-[9px] text-slate-400 font-medium leading-none mt-0.5">
              Make note taker browser
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 bg-white/90 border border-slate-100 rounded-2xl px-4 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)] hover:border-slate-200 transition-all duration-200 cursor-pointer select-none">
          <Apple className="w-5 h-5 text-slate-800 fill-slate-800" />
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-slate-700 leading-tight">
              Download from App store
            </span>
            <span className="text-[9px] text-slate-400 font-medium leading-none mt-0.5">
              Add to App device
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
