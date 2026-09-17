import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  FileText,
  HeartPulse,
  Home,
  Landmark,
  LineChart,
  ReceiptText,
  ShieldCheck,
  Timer,
  TrendingUp,
  WalletCards,
} from "lucide-react";

export default function Page1() {
  const [openFaq, setOpenFaq] = useState(0);

  const assetItems = [
    {
      title: "不動產",
      desc: "自住房、出租房、土地、預售屋及共有財產。",
      icon: Home,
    },
    {
      title: "現金與存款",
      desc: "活存、定存、外幣與家庭短期備用資金。",
      icon: CircleDollarSign,
    },
    {
      title: "投資資產",
      desc: "股票、ETF、基金、債券及其他金融資產。",
      icon: TrendingUp,
    },
    {
      title: "保險保障",
      desc: "壽險、醫療、長照、年金及儲蓄型保單。",
      icon: ShieldCheck,
    },
    {
      title: "退休收入",
      desc: "勞保、勞退、公保、退撫、年金與其他固定收入。",
      icon: Landmark,
    },
    {
      title: "負債與責任",
      desc: "房貸、信貸、扶養責任、子女教育及長期支出。",
      icon: ReceiptText,
    },
  ];

  const risks = [
    {
      title: "長壽風險",
      desc: "退休後真正需要準備的，不只是十年、二十年，而可能是三十年以上的生活。",
      icon: Timer,
    },
    {
      title: "市場風險",
      desc: "若退休初期遇到市場大幅波動，又需要持續提款，可能加速資產消耗。",
      icon: LineChart,
    },
    {
      title: "醫療與長照風險",
      desc: "疾病、失能或長期照護，都可能使原本的退休支出大幅增加。",
      icon: HeartPulse,
    },
    {
      title: "流動性風險",
      desc: "資產集中在房地產，不代表需要生活費或醫療費時就能立即使用。",
      icon: Building2,
    },
  ];

  const planningSteps = [
    {
      no: "01",
      title: "家庭資產盤點",
      desc: "把房產、現金、投資、保單、退休收入與負債集中整理。",
    },
    {
      no: "02",
      title: "退休生活需求試算",
      desc: "估算基本生活、旅遊、醫療、照護與家庭支援等長期支出。",
    },
    {
      no: "03",
      title: "找出現金流缺口",
      desc: "比較退休收入與未來支出，確認真正需要補足的金額。",
    },
    {
      no: "04",
      title: "重新配置資產角色",
      desc: "讓現金、投資、房產、保單與退休收入各自承擔適合的功能。",
    },
    {
      no: "05",
      title: "建立執行方案",
      desc: "把規劃轉成現在、未來與不同人生階段可以執行的步驟。",
    },
  ];

  const reports = [
    {
      title: "家庭資產總表",
      desc: "一張表看清楚家庭目前擁有哪些資產與負債。",
      icon: WalletCards,
    },
    {
      title: "退休現金流試算",
      desc: "整理退休收入、支出及不同年齡階段的資金變化。",
      icon: LineChart,
    },
    {
      title: "資產配置分析",
      desc: "檢視房產、現金、投資與保單是否過度集中。",
      icon: TrendingUp,
    },
    {
      title: "風險缺口清單",
      desc: "找出退休、長照、醫療與家庭責任上的關鍵缺口。",
      icon: ShieldCheck,
    },
    {
      title: "退休執行建議書",
      desc: "清楚標示現在做什麼、未來做什麼，以及哪些暫時不用做。",
      icon: FileText,
    },
  ];

  const faqs = [
    {
      q: "幾歲開始做退休規劃比較適合？",
      a: "越早開始越有調整空間，但即使已經接近退休，也很適合做完整盤點。50歲之後，通常更需要把資產累積逐步轉向退休現金流、風險管理與資產使用順序。",
    },
    {
      q: "已經60歲才開始規劃，會不會太晚？",
      a: "不會。只是規劃重點會不同。接近或已經退休時，會更重視固定收入、現金流、資產流動性、醫療長照支出，以及哪些資產應優先使用。",
    },
    {
      q: "我有房子、有股票，還需要退休規劃嗎？",
      a: "仍然需要。資產總額與退休現金流是不同的概念。有房產不代表每月有足夠生活費，有股票也需要考量市場波動與退休提款順序。",
    },
    {
      q: "退休規劃一定要買保險嗎？",
      a: "不一定。保險只是風險管理工具之一。規劃會先看家庭現有資產、保障、退休收入與實際需求，再判斷是否有需要補強，而不是先以商品為出發點。",
    },
    {
      q: "可以一起檢視我原本的保單嗎？",
      a: "可以。既有保單會一起放入家庭整體資產與保障架構中檢視，確認目前保障功能、退休功能與其他資產是否重複或存在缺口。",
    },
    {
      q: "如果同時有傳承需求，可以一起規劃嗎？",
      a: "可以，而且通常更適合一起思考。同一筆資產可能同時肩負退休生活、醫療照護與未來傳承功能，因此需要先確保自己的退休生活，再安排後續傳承。",
    },
  ];

  return (
    <div className="bg-[#F7F4EE] text-[#102D4D]">

      {/* =====================================================
          01 HERO
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#DDBB78]/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#AFC4CF]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">

          {/* 左側文案 */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B1813D]/20 bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-[#A87535] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#B1813D]" />
              ASSET & RETIREMENT PLANNING
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.2] tracking-tight sm:text-5xl lg:text-[58px]">
              退休不是存到
              <br />
              一個數字，
              <span className="mt-2 block text-[#B1813D]">
                而是知道未來的錢，
                <br />
                從哪裡來。
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64717E]">
              從房產、現金、投資、保單到退休收入，
              把散落各處的資產重新整理，
              看清楚未來每一年需要多少、還差多少，
              以及現在應該怎麼準備。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["看懂資產", "算清現金流", "提早補缺口"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#102D4D]/10 bg-white px-4 py-2 text-sm font-bold shadow-sm"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="mt-9">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#102D4D] px-7 py-4 font-black text-white shadow-[0_18px_40px_rgba(16,45,77,0.20)] transition hover:-translate-y-1 hover:bg-[#183C63]"
              >
                開始退休財務盤點
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* 右側圖片 */}
          <div className="relative">
            <div className="overflow-hidden rounded-[34px] border border-white bg-white p-2 shadow-[0_30px_80px_rgba(16,45,77,0.16)]">
              <div className="relative h-[520px] overflow-hidden rounded-[28px]">
                <img
                  src="https://images.pexels.com/photos/8441774/pexels-photo-8441774.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="退休夫妻與專業顧問討論規劃情境示意"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4D]/70 via-transparent to-transparent" />

                <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold backdrop-blur">
                  情境示意
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/20 bg-[#102D4D]/80 p-5 text-white backdrop-blur-md">
                  <p className="text-xs font-bold tracking-[0.16em] text-[#E5C689]">
                    RETIREMENT BLUEPRINT
                  </p>
                  <p className="mt-2 text-xl font-black">
                    把資產變成可以陪伴退休生活的現金流
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          02 痛點
      ===================================================== */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                THE REAL QUESTION
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                有資產，
                <br />
                <span className="text-[#B1813D]">
                  不代表退休後一定有現金。
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#687581]">
                很多人到了準備退休的階段，
                才發現真正需要回答的，
                不是「我有多少資產」，
                而是退休後每個月到底有多少錢可以使用。
              </p>
            </div>

            <div className="rounded-[34px] bg-[#102D4D] p-8 text-white shadow-xl md:p-10">
              <p className="text-sm font-bold text-[#DDBB78]">
                如果明天開始沒有工作收入……
              </p>

              <p className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                每個月的生活費，
                <br />
                要從哪裡來？
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "房子很多，但不能直接支付生活費",
                  "有退休金，但不知道可以支撐多久",
                  "投資不少，但擔心退休後遇到市場大跌",
                  "保單很多，卻不知道功能是否重複",
                  "還想支援子女，但不知道能幫多少",
                  "長照與醫療費用沒有真正計算過",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#DDBB78]"
                    />
                    <p className="text-sm leading-6 text-white/75">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          03 家庭資產盤點
      ===================================================== */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
              ASSET OVERVIEW
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              第一步不是投資，
              <br />
              是先知道自己到底擁有什麼。
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#697581]">
              把原本分散在不同地方的財產與責任，
              集中到同一張家庭資產地圖。
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {assetItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-[#102D4D]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFE4D1] text-[#A87535]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#697581]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-[26px] border border-[#B1813D]/20 bg-[#F1E8D8] px-7 py-6 text-center">
            <p className="text-lg font-black leading-8">
              資產不是越多越好，
              <span className="text-[#A87535]">
                而是每一項資產，都要知道它在家庭裡負責什麼。
              </span>
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          04 退休現金流
      ===================================================== */}
      <section className="bg-[#102D4D] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#DDBB78]">
                RETIREMENT CASH FLOW
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                退休夠不夠，
                <br />
                不靠感覺，
                <br />
                要靠現金流。
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-white/65">
                把退休後可能取得的固定收入，
                與未來生活、醫療、旅遊、照護等支出放在一起，
                才能真正知道退休資金是否足夠。
              </p>
            </div>

            <div className="rounded-[34px] bg-white p-7 text-[#102D4D] shadow-2xl md:p-10">
              <div className="grid gap-7 md:grid-cols-3 md:items-center">

                {/* 收入 */}
                <div>
                  <p className="text-xs font-black tracking-[0.18em] text-[#A87535]">
                    RETIREMENT INCOME
                  </p>

                  <h3 className="mt-3 text-xl font-black">
                    退休收入
                  </h3>

                  <div className="mt-5 space-y-3">
                    {[
                      "退休金 / 年金",
                      "投資收益",
                      "租金收入",
                      "保單給付",
                      "其他固定收入",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-[#F7F4EE] px-4 py-3 text-sm font-bold"
                      >
                        ＋ {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 中間 */}
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#102D4D] text-white shadow-xl">
                    <div>
                      <p className="text-xs text-white/50">RETIRE</p>
                      <p className="mt-1 text-xl font-black">
                        退休
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto my-4 h-10 w-px bg-[#D8C49E]" />

                  <p className="text-sm font-black text-[#A87535]">
                    現金流缺口
                  </p>
                </div>

                {/* 支出 */}
                <div>
                  <p className="text-xs font-black tracking-[0.18em] text-[#A87535]">
                    FUTURE EXPENSE
                  </p>

                  <h3 className="mt-3 text-xl font-black">
                    未來支出
                  </h3>

                  <div className="mt-5 space-y-3">
                    {[
                      "每月生活費",
                      "旅遊休閒",
                      "醫療支出",
                      "長期照護",
                      "家庭支援",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-[#F7F4EE] px-4 py-3 text-sm font-bold"
                      >
                        − {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 border-t border-[#102D4D]/10 pt-7 sm:grid-cols-2">
                {[
                  "退休後每月需要多少？",
                  "固定收入可以提供多少？",
                  "真正的資金缺口是多少？",
                  "如果活到90～100歲是否足夠？",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm font-bold"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#B1813D]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          05 四大退休風險
      ===================================================== */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
              RETIREMENT RISKS
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              退休真正怕的，
              <br />
              不只是錢不夠。
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {risks.map((risk, index) => {
              const Icon = risk.icon;

              return (
                <div
                  key={risk.title}
                  className="group flex gap-6 rounded-[30px] border border-[#102D4D]/10 bg-[#FAF8F3] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#102D4D] text-[#DDBB78]">
                    <Icon size={26} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-[#B1813D]">
                      RISK {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      {risk.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#697581]">
                      {risk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-4xl text-center">
            <p className="text-xl font-black leading-8">
              好的退休規劃，不是只追求最高報酬，
              <span className="text-[#B1813D]">
                而是避免在人生最需要錢的時候沒有現金。
              </span>
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          06 五步驟
      ===================================================== */}
      <section className="bg-[#EEE8DD] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                OUR APPROACH
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                不是推薦單一商品，
                <br />
                而是重新安排
                <span className="text-[#B1813D]">
                  資產的角色。
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#697581]">
                現金、房產、投資、保單與退休收入，
                都有不同功能。
                真正重要的是知道每一筆資產應該負責什麼。
              </p>
            </div>

            <div className="space-y-4">
              {planningSteps.map((step) => (
                <div
                  key={step.no}
                  className="group flex gap-6 rounded-[26px] border border-[#102D4D]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
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

          {/* 資產角色 */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["現金", "緊急預備"],
              ["保險", "大額風險"],
              ["投資", "中長期成長"],
              ["不動產", "居住・收益・傳承"],
              ["固定收入", "基本生活現金流"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-[22px] bg-[#102D4D] p-6 text-center text-white"
              >
                <p className="text-xl font-black">
                  {title}
                </p>
                <p className="mt-2 text-sm text-white/60">
                  {desc}
                </p>
              </div>
            ))}
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
              最後不是得到一堆建議，
              <br />
              而是一張可以執行的退休藍圖。
            </h2>
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
              每項規劃都會盡量整理成：
              <span className="text-[#E3C78F]">
                現在做什麼、未來做什麼、哪些事情暫時不用做。
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

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                PLANNING CASE
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                58歲夫妻，
                <br />
                準備60歲退休。
              </h2>

              <span className="mt-6 inline-block rounded-full bg-[#F1E8D8] px-4 py-2 text-xs font-bold text-[#A87535]">
                規劃情境示意
              </span>

              <blockquote className="mt-7 border-l-4 border-[#B1813D] pl-6 text-xl font-black leading-8">
                「我們資產應該不少，
                退休應該夠吧？」
              </blockquote>
            </div>

            <div className="rounded-[34px] border border-[#102D4D]/10 bg-[#F7F4EE] p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["房產", "2戶"],
                  ["現金", "300萬元"],
                  ["股票／基金", "500萬元"],
                  ["退休生活費", "預計每月8萬元"],
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
                  盤點後真正需要處理的是：
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    "房產占家庭資產比重過高",
                    "退休後固定現金流不足",
                    "既有保單保障功能重複",
                    "尚未預留未來長照與醫療支出",
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
                  真正重要的不是：
                  <br />
                  「現在有多少錢？」
                  <br />
                  而是：
                  <span className="text-[#E4C78E]">
                    「這些錢要怎麼陪你走過未來30年？」
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
              常見問題
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
                  START YOUR PLAN
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                  退休之前，
                  <br />
                  先把未來30年看清楚。
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  不確定自己準備得夠不夠沒關係，
                  可以先從家庭資產與退休現金流盤點開始。
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