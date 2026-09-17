import { X, Mail, MessageCircle, CalendarDays } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigation, site } from "../config/site";

export default function HamburgerMenu({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[70] bg-slate-950/45 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-[86%] max-w-[360px] flex-col bg-[#FAF8F3] shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#102D4D]/10 px-6 py-5">
          <div>
            <p className="font-black text-[#102D4D]">{site.brand}</p>
            <p className="mt-0.5 text-[10px] tracking-[0.16em] text-[#A47C43]">
              {site.brandEn}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="關閉選單"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#102D4D]/10 bg-white text-[#102D4D]"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-6 py-6">
          <div className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-2xl px-4 py-4 text-base font-black transition ${
                    isActive
                      ? "bg-[#102D4D] text-white"
                      : "text-[#102D4D] hover:bg-[#EEE8DD]"
                  }`
                }
              >
                {item.label}
                <span>→</span>
              </NavLink>
            ))}
          </div>

          <a
            href="/#contact"
            onClick={onClose}
            className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[#B1813D] px-5 py-4 font-black text-white shadow-lg"
          >
            <CalendarDays size={18} />
            預約初步諮詢
          </a>
        </nav>

        <div className="border-t border-[#102D4D]/10 px-6 py-6">
          <a
            href={site.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 flex items-center gap-3 text-sm font-bold text-[#102D4D]"
          >
            <MessageCircle size={18} />
            LINE 官方帳號 {site.lineId}
          </a>

          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 text-sm font-bold text-[#102D4D]"
          >
            <Mail size={18} />
            {site.email}
          </a>
        </div>
      </aside>
    </>
  );
}
