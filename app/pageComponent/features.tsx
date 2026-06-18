import { Check, Copy, Share2 } from "lucide-react";

export const Features = () => {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 z-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col text-left">
          {/* Subheading */}
          <span className="font-caveat text-2xl text-slate-500 italic mb-4 tracking-wide">
            You Talk. Scribeo Listens.
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#090d1a] tracking-tight leading-[1.15] font-archivo mb-8">
            Tired of switching <br />
            between apps to <br />
            take notes?
          </h2>

          {/* Paragraphs */}
          <p className="text-lg text-slate-400 font-archivo font-medium mb-4 max-w-md leading-relaxed">
            Scribeo captures everything{" "}
            <span className="font-caveat text-3xl text-violet-600 font-semibold italic inline-block mx-1">
              automatically
            </span>{" "}
            meetings, messages, and action items.
          </p>

          <p className="text-[15px] text-slate-600 font-archivo font-medium max-w-sm leading-relaxed">
            And delivers clean, structured notes ready to share with your team.
          </p>
        </div>

        {/* Right Content - Clean Notes Mockup */}
        <div className="bg-slate-50/50 rounded-3xl border border-slate-100 p-6 md:p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-90">
          <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-5 relative select-none">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-slate-800 tracking-tight flex items-center gap-1">
                  ✨ Product Alignment Sync
                </span>
                <span className="text-[10px] text-slate-400 font-semibold mt-0.5">
                  June 18 • 10:30 AM
                </span>
              </div>
              <button
                type="button"
                className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200/50 hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>

            {/* Note Content Mockup */}
            <div className="space-y-4">
              {/* Summary */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Summary
                </span>
                <p className="text-xs text-slate-600 leading-relaxed mt-1 font-medium">
                  Aligned on the new styling architecture using Tailwind v4. The
                  key priority is achieving a pixel-perfect, responsive layout.
                </p>
              </div>

              {/* Action Items */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Action Items
                </span>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <div className="w-4 h-4 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                      <Check className="w-3 h-3 stroke-3" />
                    </div>
                    <span>Refactor layout.tsx fonts and meta</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <div className="w-4 h-4 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                      <Check className="w-3 h-3 stroke-3" />
                    </div>
                    <span>Redesign Scribe mockup component</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-400 line-through font-medium">
                    <div className="w-4 h-4 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-slate-400 mt-0.5 shrink-0">
                      <Check className="w-3 h-3 stroke-3" />
                    </div>
                    <span>Set up Next.js configuration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Note Footer */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
              >
                <Share2 className="w-3 h-3" />
                Share Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
