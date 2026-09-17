import { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigation, site } from "../config/site";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#102D4D]/10 bg-[#FAF8F3]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <NavLink to="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102D4D] text-lg font-black text-[#DDBB78] shadow-md">
              守
            </div>

            <div>
              <p className="text-lg font-black tracking-[0.08em] text-[#102D4D]">
                {site.brand}
              </p>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[#A47C43]">
                {site.brandEn}
              </p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    isActive
                      ? "bg-[#EEE6D8] text-[#A97735]"
                      : "text-[#102D4D] hover:bg-[#F0E9DE]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="/#contact"
              className="rounded-full bg-[#102D4D] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#183C63]"
            >
              預約初步諮詢
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="開啟選單"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#102D4D]/10 bg-white text-[#102D4D] shadow-sm lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <HamburgerMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
