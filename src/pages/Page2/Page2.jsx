import { useState } from "react";
import { usePageMeta } from "../../hooks/usePageMeta";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  FileSignature,
  Gift,
  HeartHandshake,
  Home,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

export default function Page2() {
  const [openFaq, setOpenFaq] = useState(0);

  usePageMeta({
    title: "資產傳承規劃・遺產規劃・信託規劃｜守信顧問",
    description:
      "資產傳承規劃、遺產規劃、信託規劃：整合遺產、贈與、信託、保險與遺囑，協助家庭把重要的傳承安排提前規劃清楚。守信顧問，台中資產傳承顧問團隊。",
  });

  const concerns = [
    {
      no: "01",
      title: "財產怎麼分才適合？",
      desc: "不同子女、不同家庭狀況，不一定適合單純平均分配。",
    },
    {
      no: "02",
      title: "房子只有一間怎麼分？",
      desc: "不動產難以切割，未安排好可能產生共有、變現與家庭溝通問題。",
    },
    {
      no: "03",
      title: "生前給還是身後留？",
      desc: "贈與與繼承各有不同考量，需要同時評估生活保障、稅務與控制權。",
    },
    {
      no: "04",
      title: "失能後誰來管理？",
      desc: "若未來無法自行處理財產，管理與照護安排應提早思考。",
    },
    {
      no: "05",
      title: "保單、信託、遺囑怎麼搭配？",
      desc: "工具很多，但若彼此沒有整合，可能無法真正完成原本的家庭安排。",
    },
    {
      no: "06",
      title: "怎麼降低家人爭議？",
      desc: "很多爭議不是財產少，而是安排不清楚、資訊不對稱或執行方式不明確。",
    },
  ];

  const assets = [
    {
      title: "不動產",
      desc: "自住房、出租房、土地、共有不動產及其他房地資產。",
      icon: Home,
    },
    {
      title: "現金與金融資產",
      desc: "存款、股票、ETF、基金、債券及其他投資。",
      icon: WalletCards,
    },
    {
      title: "保險",
      desc: "壽險、年金及其他具有家庭保障或資產安排功能的保單。",
      icon: ShieldCheck,
    },
    {
      title: "企業與股權",
      desc: "公司股權、家族企業、未上市股份及其他事業權益。",
      icon: Building2,
    },
    {
      title: "退休與年金資產",
      desc: "退休金、年金與其他持續性收入來源。",
      icon: Landmark,
    },
    {
      title: "家庭特殊安排",
      desc: "未成年子女、特殊照護需求、再婚家庭或其他需要特別安排的情況。",
      icon: Users,
    },
  ];

  const tools = [
    {
      title: "贈與規劃",
      subtitle: "GIFT PLANNING",
      desc: "釐清哪些資產適合生前移轉、移轉時機與家庭生活保障。",
      icon: Gift,
    },
    {
      title: "遺囑規劃",
      subtitle: "WILL PLANNING",
      desc: "把財產分配與重要安排留下清楚、可以執行的意思表示。",
      icon: FileSignature,
    },
    {
      title: "信託規劃",
      subtitle: "TRUST PLANNING",
      desc: "針對財產管理、照護、給付條件與長期安排建立制度。",
      icon: HeartHandshake,
    },
    {
      title: "保險與資金安排",
      subtitle: "LIQUIDITY PLANNING",
      desc: "思考家庭未來可能需要的現金、保障與資產流動性。",
      icon: ShieldCheck,
    },
  ];

  const steps = [
    {
      no: "01",
      title: "家庭與資產盤點",
      desc: "先了解家庭成員、資產類型、持有方式、負債及重要關係。",
    },
    {
      no: "02",
      title: "確認真正想完成的事",
      desc: "釐清誰需要被照顧、哪些資產希望保留，以及哪些事情希望提前安排。",
    },
    {
      no: "03",
      title: "找出傳承風險",
      desc: "檢視房產分割、現金不足、管理權、家庭溝通與執行上的風險。",
    },
    {
      no: "04",
      title: "設計整合架構",
      desc: "依需求搭配贈與、遺囑、信託、保險及其他適合的工具。",
    },
    {
      no: "05",
      title: "安排執行順序",
      desc: "把整體方案拆成現在可以做、未來再做與需要持續追蹤的事項。",
    },
  ];

  const reports = [
    {
      title: "家庭資產盤點表",
      desc: "整理主要財產、持有方式及家庭關係。",
      icon: WalletCards,
    },
    {
      title: "傳承風險清單",
      desc: "找出分配、流動性、管理與執行上的風險。",
      icon: FileCheck2,
    },
    {
      title: "財產分配架構",
      desc: "把不同資產與家庭成員安排放在同一張圖上。",
      icon: Users,
    },
    {
      title: "工具整合建議",
      desc: "說明贈與、遺囑、信託、保險等工具的可能角色。",
      icon: Scale,
    },
    {
      title: "執行行動清單",
      desc: "清楚列出下一步、執行順序與需配合的專業事項。",
      icon: CheckCircle2,
    },
  ];

  const faqs = [
    {
      q: "一定要資產很多才需要做傳承規劃嗎？",
      a: "不一定。只要涉及房產、保單、投資、家族財產、特殊照護需求，或希望降低未來家人處理上的困難，就可以提早盤點。",
    },
    {
      q: "生前贈與一定比繼承好嗎？",
      a: "不一定。除了稅務，還要考量贈與後自己的退休生活、資產控制權、家庭關係及未來變化。適合哪一種方式需要依個案判斷。",
    },
    {
      q: "有寫遺囑就代表傳承問題全部解決了嗎？",
      a: "不一定。遺囑是重要工具，但有時還需要搭配資產持有方式、信託、保險、現金安排或其他執行機制。",
    },
    {
      q: "信託是不是只有有錢人才需要？",
      a: "不是。若家庭有失能管理、長期照護、未成年子女、特殊需求家人或希望資金依條件給付，都可以評估信託是否適合。",
    },
    {
      q: "可以一起做遺產稅與贈與稅試算嗎？",
      a: "可以納入整體規劃。不過實際稅負與法律效果仍需依當時法規、資產內容與個案資料確認。",
    },
    {
      q: "如果家人彼此意見不同，也可以先諮詢嗎？",
      a: "可以。很多傳承問題的第一步不是馬上決定怎麼分，而是先把資產、需求與不同家庭成員的考量整理清楚。",
    },
  ];

  return (
    <div className="bg-[#F7F4EE] text-[#102D4D]">
      {/* =====================================================
          01 HERO
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#DDBB78]/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#AFC4CF]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B1813D]/20 bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-[#A87535] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#B1813D]" />
              LEGACY & ESTATE PLANNING
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.2] tracking-tight sm:text-5xl lg:text-[58px]">
              傳承不是
              <br />
              把財產留下來，
              <span className="mt-2 block text-[#B1813D]">
                而是把未來
                <br />
                安排清楚。
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64717E]">
              從家庭資產、房產、保單、公司股權，
              到贈與、遺囑、信託與未來管理，
              把原本分散的問題整理成一套家人看得懂、
              未來也能執行的安排。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["資產盤點", "分配安排", "工具整合", "執行落地"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#102D4D]/10 bg-white px-4 py-2 text-sm font-bold shadow-sm"
                  >
                    ✓ {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-9">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#102D4D] px-7 py-4 font-black text-white shadow-[0_18px_40px_rgba(16,45,77,0.20)] transition hover:-translate-y-1 hover:bg-[#183C63]"
              >
                開始家庭傳承盤點
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[34px] border border-white bg-white p-2 shadow-[0_30px_80px_rgba(16,45,77,0.16)]">
              <div className="relative h-[520px] overflow-hidden rounded-[28px]">
                <img
                  src="https://images.pexels.com/photos/8441866/pexels-photo-8441866.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="家庭進行傳承與文件規劃的情境示意"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4D]/80 via-transparent to-transparent" />

                <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold backdrop-blur">
                  情境示意
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/20 bg-[#102D4D]/80 p-5 text-white backdrop-blur-md">
                  <p className="text-xs font-bold tracking-[0.16em] text-[#E5C689]">
                    FAMILY LEGACY BLUEPRINT
                  </p>

                  <p className="mt-2 text-xl font-black">
                    不只決定留下多少，更要安排怎麼留下
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 六大問題
      ===================================================== */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
              FAMILY CONCERNS
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              真正困難的，
              <br />
              往往不是財產有多少。
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#697581]">
              而是怎麼分、誰來管、什麼時候給，
              以及未來發生變化時是否還能照原本的想法執行。
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {concerns.map((item) => (
              <div
                key={item.no}
                className="rounded-[28px] border border-[#102D4D]/10 bg-[#FAF8F3] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#102D4D] text-sm font-black text-[#DDBB78]">
                  {item.no}
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#697581]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 資產盤點
      ===================================================== */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                FAMILY ASSET MAP
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                先把家庭資產，
                <br />
                放回同一張地圖。
              </h2>

              <p className="mt-6 leading-8 text-[#697581]">
                傳承規劃的第一步，不是先決定用哪個工具，
                而是先知道家庭目前有哪些財產、
                由誰持有，以及這些財產未來希望完成什麼功能。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {assets.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[25px] border border-[#102D4D]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE4D1] text-[#A87535]">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-5 text-lg font-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#697581]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 傳承工具
      ===================================================== */}
      <section className="bg-[#102D4D] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#DDBB78]">
              PLANNING TOOLS
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              工具沒有最好，
              <br />
              只有適不適合。
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              贈與、遺囑、信託與保險不是互相取代，
              而是依照家庭需要分別扮演不同角色。
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {tools.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[30px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDBB78] text-[#102D4D]">
                    <Icon size={27} />
                  </div>

                  <p className="mt-7 text-xs font-black tracking-[0.18em] text-[#DDBB78]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/65">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-[28px] border border-[#DDBB78]/30 bg-[#DDBB78]/10 px-8 py-7 text-center">
            <p className="text-lg font-black leading-8">
              真正重要的是：
              <span className="text-[#EAD2A2]">
                先確認家庭目標，再決定使用哪些工具。
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 傳承邏輯
      ===================================================== */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[34px] bg-[#F2ECE1] p-8 md:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#AE8040]">
                BEFORE
              </p>

              <h3 className="mt-4 text-2xl font-black">
                很多家庭原本是這樣：
              </h3>

              <div className="mt-7 space-y-4">
                {[
                  "房子想留給子女，但不知道怎麼分",
                  "有保單，但不知道是否與整體安排一致",
                  "想先贈與，又擔心自己退休生活",
                  "想寫遺囑，但不知道其他工具是否要一起調整",
                  "擔心家人未來彼此不知道自己的想法",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFE4D1] text-xs font-black text-[#A87535]">
                      ?
                    </span>

                    <p className="leading-7 text-[#65717D]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                AFTER PLANNING
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                把「有工具」
                <br />
                變成
                <span className="text-[#B1813D]">
                  「有架構」。
                </span>
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  ["誰需要被照顧", "確認家庭真正需要保障與安排的人。"],
                  ["哪些資產留下", "決定房產、現金、股權、保單等不同資產的角色。"],
                  ["什麼時候移轉", "思考生前、身後或分階段安排。"],
                  ["誰來管理與執行", "確認未來財產管理、照護與執行機制。"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle2
                      size={22}
                      className="mt-1 shrink-0 text-[#B1813D]"
                    />

                    <div>
                      <p className="font-black">
                        {title}
                      </p>

                      <p className="mt-1 leading-7 text-[#697581]">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 五步驟
      ===================================================== */}
      <section className="bg-[#EEE8DD] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                OUR APPROACH
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                傳承不是一次決定，
                <br />
                而是一套
                <span className="text-[#B1813D]">
                  執行流程。
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#697581]">
                從盤點、分析、架構設計到後續執行，
                每一步都要與家庭現況彼此連結。
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.no}
                  className="flex gap-6 rounded-[26px] border border-[#102D4D]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#102D4D] font-black text-[#DDBB78]">
                    {step.no}
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#697581]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 交付成果
      ===================================================== */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
              WHAT YOU RECEIVE
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              最後得到的，
              <br />
              不是一堆零散工具。
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#697581]">
              而是一套可以讓自己、家人與後續專業人士共同理解的傳承架構。
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {reports.map((report) => {
              const Icon = report.icon;

              return (
                <div
                  key={report.title}
                  className="rounded-[26px] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <Icon
                    size={30}
                    className="text-[#B1813D]"
                  />

                  <h3 className="mt-6 text-lg font-black">
                    {report.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#697581]">
                    {report.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-[28px] bg-[#102D4D] px-8 py-7 text-center text-white">
            <p className="text-lg font-black leading-8">
              讓重要的安排從「我心裡有想法」
              <span className="text-[#E3C78F]">
                變成家人看得懂、未來做得到的方案。
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 情境案例
      ===================================================== */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                PLANNING CASE
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                70歲父親，
                <br />
                二女一子。
              </h2>

              <span className="mt-6 inline-block rounded-full bg-[#F1E8D8] px-4 py-2 text-xs font-bold text-[#A87535]">
                規劃情境示意
              </span>

              <blockquote className="mt-7 border-l-4 border-[#B1813D] pl-6 text-xl font-black leading-8">
                「我不是怕孩子拿不到，
                我是怕以後為了財產有意見。」
              </blockquote>
            </div>

            <div className="rounded-[34px] border border-[#102D4D]/10 bg-[#F7F4EE] p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["主要房產", "自住房＋出租房"],
                  ["金融資產", "存款＋投資"],
                  ["家庭成員", "二女一子"],
                  ["主要需求", "退休保障＋財產分配"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white p-5"
                  >
                    <p className="text-sm text-[#7C8791]">
                      {title}
                    </p>

                    <p className="mt-2 text-xl font-black">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <p className="font-black text-[#A87535]">
                  真正需要一起思考的問題：
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    "自己的退休生活是否先保留足夠資產",
                    "不同房產如何避免未來形成複雜共有",
                    "現金與其他資產如何協助平衡分配",
                    "遺囑、贈與、保險與其他工具如何彼此配合",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-[#B1813D]"
                      />

                      <p className="leading-7 text-[#65717D]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-[#102D4D] p-6 text-white">
                <p className="text-lg font-black leading-8">
                  傳承真正要處理的不是：
                  <br />
                  「每個人拿多少？」
                  <br />
                  而是：
                  <span className="text-[#E4C78E]">
                    「怎麼安排，才能更接近原本想照顧家人的心意？」
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          09 FAQ
      ===================================================== */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
              FAQ
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              傳承規劃常見問題
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-[22px] border border-[#102D4D]/10 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-black">
                      {faq.q}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1E8D8] text-[#A87535]">
                      {isOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#102D4D]/10 px-6 py-5">
                      <p className="leading-8 text-[#697581]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-[#8A939C]">
            實際法律、稅務及財產效果，
            仍應依個案資料與當時法規進一步確認。
          </p>
        </div>
      </section>

      {/* =====================================================
          10 CTA
      ===================================================== */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[38px] bg-[#102D4D] px-8 py-14 text-white shadow-[0_35px_80px_rgba(16,45,77,0.22)] md:px-14 lg:px-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#DDBB78]/10" />

            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="text-xs font-black tracking-[0.24em] text-[#DDBB78]">
                  START YOUR LEGACY PLAN
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                  最好的傳承，
                  <br />
                  是自己還能決定的時候，
                  <br />
                  先安排清楚。
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  不需要一開始就決定要用什麼工具，
                  先把家庭、資產與真正想完成的事情整理清楚。
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "初步了解需求",
                    "資料保密",
                    "不強迫推銷",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:text-right">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#DDBB78] px-8 py-5 text-lg font-black text-[#102D4D] shadow-xl transition hover:-translate-y-1 hover:bg-[#E8CF9E]"
                >
                  預約初步諮詢
                  <ArrowRight size={19} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}