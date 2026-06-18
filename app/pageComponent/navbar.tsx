import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const navbarItems = [
    { name: "Home", href: "#", hasDropdown: false },
    { name: "Features", href: "#", hasDropdown: true },
    { name: "Pricing", href: "#", hasDropdown: false },
    { name: "Resources", href: "#", hasDropdown: true },
    { name: "Get App", href: "#", hasDropdown: true },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md px-6 py-3.5 justify-between w-full max-w-5xl border border-slate-100/80 mt-6 rounded-full shadow-sm">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-md shadow-slate-900/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-5 h-5 text-white"
              role="img"
              aria-label="Scribeo Logo"
            >
              <title>Scribeo Logo</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold font-archivo text-slate-900 tracking-tight">
            Scribeo
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-slate-500 font-archivo font-medium text-[14px]">
          {navbarItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-slate-900 transition-colors duration-200 flex items-center gap-1 py-1"
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
              )}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="font-archivo font-medium text-[14px] flex items-center gap-5">
          <Link
            href="#"
            className="text-slate-700 hover:text-slate-900 transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="bg-slate-950 hover:bg-slate-900 text-white font-medium text-[13px] px-5 py-2.5 rounded-full flex items-center gap-1 shadow-sm transition-all duration-200 hover:scale-[1.02]"
          >
            Sign up
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
