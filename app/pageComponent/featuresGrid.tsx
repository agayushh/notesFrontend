"use client";

import {
  Box,
  Columns,
  Feather,
  FileText,
  Mail,
  Mic,
  MoreVertical,
  Share2,
  TrendingUp,
  User,
  Video,
} from "lucide-react";

export const FeaturesGrid = () => {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-12 z-20">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Sign Documents in Seconds (Col 1, Top) */}
          <div className="flex flex-col gap-4">
            <div className="h-[380px] bg-[#e8e6ff] rounded-3xl p-8 flex flex-col items-center justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Brand Floating Icons Illustration */}
              <div className="relative w-full h-[220px] flex items-center justify-center">
                {/* Background glow */}
                <div className="absolute w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />

                {/* Floating Icons */}
                {/* 1. Feather/Quill Icon (Top Middle) */}
                <div className="absolute top-2 w-12 h-12 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#2563eb] animate-float-slow">
                  <Feather className="w-6 h-6" />
                </div>

                {/* 2. Trello-like Columns Icon (Top Left) */}
                <div className="absolute top-10 left-10 w-11 h-11 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#0284c7] animate-float-medium">
                  <Columns className="w-5.5 h-5.5" />
                </div>

                {/* 3. Dropbox Icon (Top Right) */}
                <div className="absolute top-10 right-10 w-11 h-11 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#0ea5e9] animate-float-fast">
                  <Box className="w-5.5 h-5.5" />
                </div>

                {/* 4. Orange connection Icon (Center-ish/Hubspot style) */}
                <div className="absolute top-24 left-24 w-12 h-12 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#f97316] animate-float-slow">
                  <Share2 className="w-6 h-6" />
                </div>

                {/* 5. Red trend/chevron Icon (Middle Left) */}
                <div className="absolute bottom-16 left-6 w-10 h-10 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#ef4444] animate-float-medium">
                  <TrendingUp className="w-5 h-5" />
                </div>

                {/* 6. Evernote/Mint Icon (Middle Right) */}
                <div className="absolute bottom-16 right-6 w-10 h-10 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#10b981] animate-float-fast">
                  <FileText className="w-5 h-5" />
                </div>

                {/* Big Purple Folder at the bottom */}
                <div className="absolute bottom-[-10px] w-[180px] h-[120px] bg-[#a89eff] rounded-t-2xl shadow-lg flex items-center justify-center group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="w-[140px] h-[90px] bg-[#9387ff] rounded-t-xl mt-4 relative flex items-center justify-center shadow-inner">
                    <div className="w-10 h-1 bg-[#b2a9ff] rounded-full absolute top-3" />
                  </div>
                </div>
              </div>
            </div>
            {/* Heading below Card 1 */}
            <h3 className="text-xl font-bold text-[#090d1a] px-2 font-archivo leading-tight">
              Sign Documents in Seconds
            </h3>
          </div>

          {/* Card 2: Capture & Share with Ease (Col 2) */}
          <div className="bg-[#e2ebff] rounded-3xl p-8 h-[432px] flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
            {/* Top Illustration: Voice/Video recorder panel */}
            <div className="w-full flex flex-col items-center pt-4 relative">
              {/* Blur backdrop */}
              <div className="absolute w-36 h-36 bg-blue-400/10 rounded-full blur-xl pointer-events-none" />

              {/* Recorder Box */}
              <div className="w-full max-w-[200px] bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between gap-3 relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
                <span className="text-sm font-semibold text-slate-700 font-mono tracking-tight">
                  0:00
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <Mic className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Padlock Icon */}
              <div className="mt-8 flex items-center justify-center text-[#1e293b] group-hover:rotate-[-6deg] transition-transform duration-300">
                <div className="w-16 h-16 border-2.5 border-[#1e293b] rounded-2xl relative flex items-center justify-center">
                  <div className="absolute top-[-22px] w-10 h-10 border-2.5 border-b-0 border-[#1e293b] rounded-t-full" />
                  <div className="w-2 h-4 bg-[#1e293b] rounded-full mt-1" />
                </div>
              </div>
            </div>

            {/* Label inside Card 2 */}
            <h3 className="text-xl font-bold text-[#090d1a] font-archivo leading-tight mt-auto">
              Capture & Share <br />
              with Ease
            </h3>
          </div>

          {/* Card 3: Know Who Files Accesses (Col 3) */}
          <div className="bg-[#e1f0ec] rounded-3xl p-8 h-[432px] flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
            {/* Connection Diagram Illustration */}
            <div className="w-full flex flex-col items-center pt-2 relative z-10">
              {/* Document block */}
              <div className="bg-white rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.04)] p-3 border border-slate-100 flex items-center gap-2.5 w-full max-w-[210px] group-hover:translate-y-[-2px] transition-transform duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#e0f2fe] flex items-center justify-center text-blue-500">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-slate-700 truncate max-w-[110px]">
                    ProjectPlan_v1.0.docx
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    Doc
                  </span>
                </div>
              </div>

              {/* Connecting lines SVG */}
              <div className="w-full max-w-[210px] h-12 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Connecting diagram"
                >
                  <title>Connecting diagram</title>
                  {/* Central vertical line */}
                  <path d="M100 0 V16" stroke="#94a3b8" strokeWidth="1.5" />
                  {/* Branching horizontal line */}
                  <path d="M40 16 H160" stroke="#94a3b8" strokeWidth="1.5" />
                  {/* Left branch down */}
                  <path d="M40 16 V48" stroke="#94a3b8" strokeWidth="1.5" />
                  {/* Right branch down */}
                  <path d="M160 16 V48" stroke="#94a3b8" strokeWidth="1.5" />
                  {/* Black circle node at the center */}
                  <circle cx="100" cy="16" r="12" fill="#090d1a" />
                  {/* Eye symbol inside circle */}
                  <path
                    d="M96 16 C96 16 98 13 100 13 C102 13 104 16 104 16 C104 16 102 19 100 19 C98 19 96 16 96 16 Z"
                    stroke="white"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <circle cx="100" cy="16" r="2" fill="white" />
                </svg>
              </div>

              {/* User profile cards below */}
              <div className="flex gap-3 w-full justify-center mt-0.5">
                {/* Jordan */}
                <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-slate-100 p-2.5 flex items-center gap-2 max-w-[110px] group-hover:scale-[1.01] transition-transform duration-300">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-[10px] font-bold text-slate-800 truncate">
                      Jordan Lee
                    </span>
                    <span className="text-[8px] text-slate-400 truncate">
                      jordan@example.com
                    </span>
                  </div>
                </div>

                {/* Samira */}
                <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-slate-100 p-2.5 flex items-center gap-2 max-w-[110px] group-hover:scale-[1.01] transition-transform duration-300">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-[10px] font-bold text-slate-800 truncate">
                      Samira Patel
                    </span>
                    <span className="text-[8px] text-slate-400 truncate">
                      samira@example.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Label inside Card 3 */}
            <h3 className="text-xl font-bold text-[#090d1a] font-archivo leading-tight mt-auto">
              Know Who Files <br />
              Accesses
            </h3>
          </div>

          {/* Card 4: Instant Mail Notes Synced (Col 1, Bottom) */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#c3bcff] rounded-3xl p-8 h-[380px] flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
              {/* Heading/Icon block at top */}
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight font-archivo max-w-[160px]">
                  Instant mail <br />
                  notes synced
                </h3>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-slate-900 backdrop-blur-sm group-hover:rotate-12 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              {/* Browser Mockup window at bottom */}
              <div className="w-full bg-[#f8f7ff] rounded-t-2xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)] pt-3 px-4 pb-0 h-[170px] relative mt-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {/* Header title/bar */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/50 mb-3">
                  <span className="text-[10px] font-bold text-slate-500 tracking-tight truncate max-w-[150px]">
                    Scribeo is creating notes from mail...
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>
                </div>

                {/* Subheader Tabs */}
                <div className="flex gap-2.5 border-b border-slate-100 pb-2 mb-3">
                  <div className="flex items-center gap-1 text-[9px] font-extrabold text-violet-600 border-b-1.5 border-violet-500 pb-1 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
                    Auto Notes
                  </div>
                  <span className="text-[9px] font-bold text-slate-400">
                    Type
                  </span>
                  <span className="text-[9px] font-bold text-slate-400">
                    Upload
                  </span>
                  <span className="text-[9px] font-bold text-slate-400">
                    Saved
                  </span>
                </div>

                {/* Text lines mockup */}
                <div className="space-y-1.5">
                  <div className="w-full h-2 bg-slate-200/60 rounded-full" />
                  <div className="w-[85%] h-2 bg-slate-200/60 rounded-full" />
                  <div className="w-[60%] h-2 bg-slate-200/60 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Find Files Instantly (Col 2-3, Bottom, Spans 2) */}
          <div className="bg-[#f2f1fc] rounded-3xl p-8 h-[380px] md:col-span-2 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="flex justify-between items-start h-full">
              {/* Left Side: Document list & heading at bottom */}
              <div className="flex flex-col justify-between h-full w-[55%] z-10">
                {/* File list mockup */}
                <div className="space-y-3 pt-4">
                  {/* File 1 */}
                  <div className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] p-3 border border-slate-100/50 flex items-center justify-between w-full group-hover:translate-x-1 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center text-violet-500">
                        <FileText className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">
                        2023 Innovations Report
                      </span>
                    </div>
                    <MoreVertical className="w-4 h-4 text-slate-400" />
                  </div>

                  {/* File 2 */}
                  <div className="bg-white/60 rounded-xl p-3 border border-slate-100/40 flex items-center justify-between w-full opacity-80 group-hover:opacity-95 transition-opacity duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50/50 flex items-center justify-center text-violet-400">
                        <FileText className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-600">
                        Annual Review
                      </span>
                    </div>
                  </div>

                  {/* File 3 */}
                  <div className="bg-white/30 rounded-xl p-3 border border-slate-100/20 flex items-center justify-between w-full opacity-45 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50/30 flex items-center justify-center text-violet-300">
                        <FileText className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-500">
                        Trends Development
                      </span>
                    </div>
                  </div>
                </div>

                {/* Heading at bottom */}
                <h3 className="text-2xl font-bold text-[#090d1a] font-archivo leading-tight mt-auto">
                  Find Files Instantly
                </h3>
              </div>

              {/* Right Side: Mascot Character */}
              <div className="relative w-[45%] h-full flex items-center justify-center">
                {/* Speech Bubble */}
                <div className="absolute top-12 right-2 md:right-8 bg-black text-white text-[11px] font-bold py-1.5 px-3 rounded-full flex items-center justify-center shadow-lg animate-float-slow select-none">
                  m~
                  <div className="absolute bottom-[-4px] left-4 w-2 h-2 bg-black rotate-45" />
                </div>

                {/* Cute Mascot Mascot */}
                <div className="relative w-28 h-40 flex items-center justify-center animate-float-medium">
                  {/* Mascot shape using SVGs */}
                  <svg
                    className="w-full h-full drop-shadow-[0_10px_20px_rgba(139,92,246,0.15)]"
                    viewBox="0 0 120 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Mascot illustration"
                  >
                    <title>Mascot illustration</title>
                    {/* Wobbly double loop body */}
                    <path
                      d="M40 30 C40 15, 80 15, 80 30 C80 45, 40 55, 40 70 C40 85, 80 85, 80 100 C80 115, 40 125, 40 140 C40 155, 80 155, 80 140"
                      stroke="#8b5cf6"
                      strokeWidth="24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Eyes */}
                    <circle cx="50" cy="70" r="4.5" fill="#090d1a" />
                    <circle cx="70" cy="70" r="4.5" fill="#090d1a" />

                    {/* Eyeballs highlight */}
                    <circle cx="51.5" cy="68.5" r="1.5" fill="white" />
                    <circle cx="71.5" cy="68.5" r="1.5" fill="white" />

                    {/* Happy Mouth */}
                    <path
                      d="M56 78 Q60 82 64 78"
                      stroke="#090d1a"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
