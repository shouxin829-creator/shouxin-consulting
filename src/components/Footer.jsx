import { site } from "../config/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#102D4D]/10 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102D4D] font-black text-[#DDBB78]">
            守
          </div>

          <div>
            <p className="font-black text-[#102D4D]">{site.brand}</p>
            <p className="mt-1 text-xs text-[#7A8490]">
              資產・退休・傳承整合規劃
            </p>
          </div>
        </div>

        <div className="text-sm text-[#89929B] md:text-right">
          <p>© 2026 Shou Xin Consulting</p>
          <p className="mt-1">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
