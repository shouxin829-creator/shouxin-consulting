import { Mail, MessageCircle } from "lucide-react";
import { site } from "../config/site";

export default function TopBar() {
  return (
    <div className="bg-[#0B223B] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-xs lg:px-8">
        <p className="hidden text-white/75 sm:block">
          資產・退休・傳承・家庭財務權益整合規劃
        </p>

        <div className="flex w-full items-center justify-end gap-4 sm:w-auto">
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-1.5 text-white/75 transition hover:text-white md:flex"
          >
            <Mail size={14} />
            {site.email}
          </a>

          <a
            href={site.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold text-[#E8CC95] transition hover:text-white"
          >
            <MessageCircle size={14} />
            LINE {site.lineId}
          </a>
        </div>
      </div>
    </div>
  );
}
