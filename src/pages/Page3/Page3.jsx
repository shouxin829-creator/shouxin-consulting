import { useState } from "react";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  FileSignature,
  HeartHandshake,
  Home,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

export default function Page3() {
  const [openFaq, setOpenFaq] = useState(0);

  const concerns = [
    {
      no: "01",
      title: "婚前財產要不要整理？",
      desc: "房產、存款、投資與原有資產若沒有清楚紀錄，未來可能增加認定與溝通上的困難。",
    },
    {
      no: "02",
      title: "夫妻共同出資，權益怎麼看？",
      desc: "房屋、公司、投資或家庭支出由雙方共同投入時，需要釐清實際出資與持有安排。",
    },
    {
      no: "03",
      title: "一方掌握全部財務資訊",
      desc: "家庭若只有一人知道帳戶、保單、貸款與投資狀況，遇到重大事件時容易措手不及。",
    },
    {
      no: "04",
      title: "離婚時財產怎麼整理？",
      desc: "真正需要處理的不只是房子歸誰，還包括財產資料、債務、資金流與後續生活安排。",
    },
    {
      no: "05",
      title: "配偶過世後怎麼辦？",
      desc: "可能同時涉及財產盤點、繼承、保單、稅務與家庭成員間的權益整理。",
    },
    {
      no: "06",
      title: "再婚家庭如何安排？",
      desc: "前段婚姻子女、現任配偶與不同資產來源交錯時，更需要提早建立清楚架構。",
    },
  ];

  const assetItems = [
    {
      title: "不動產",
      desc: "婚前房屋、婚後購屋、共同出資、貸款及不同登記方式。",
      icon: Home,
    },
    {
      title: "現金與存款",
      desc: "個人帳戶、共同生活資金、家庭備用金與大額資金往來。",
      icon: Banknote,
    },
    {
      title: "投資與金融資產",
      desc: "股票、ETF、基金、債券及其他投資資產。",
      icon: WalletCards,
    },
    {
      title: "保單",
      desc: "要保人、被保險人、受益人與保費來源都可能影響家庭安排。",
      icon: ShieldCheck,
    },
    {
      title: "事業與股權",
      desc: "公司股權、事業投入、盈餘與家庭資金之間的關係。",
      icon: BriefcaseBusiness,
    },
    {
      title: "負債與家庭責任",
      desc: "房貸、信貸、共同債務、扶養及其他長期家庭責任。",
      icon: Landmark,
    },
  ];

  const keyAreas = [
    {
      title: "婚姻財產整理",
      subtitle: "MARITAL PROPERTY",
      desc: "先了解婚前、婚後資產與資金來源，建立完整財務資料。",
      icon: WalletCards,
    },
    {
      title: "家庭財務資訊透明",
      subtitle: "FAMILY FINANCE",
      desc: "把帳戶、保單、房產、貸款與重要文件整理成家人找得到的資訊。",
      icon: FileCheck2,
    },
    {
      title: "權益與分配規劃",
      subtitle: "RIGHTS & DISTRIBUTION",
      desc: "依家庭狀況釐清可能涉及的財產、繼承與分配議題。",
      icon: Scale,
    },
    {
      title: "重大事件預先安排",
      subtitle: "CONTINGENCY PLANNING",
      desc: "提前思考離婚、失能、死亡或再婚等情況下，家庭財務應如何銜接。",
      icon: HeartHandshake,
    },
  ];

  const steps = [
    {
      no: "01",
      title: "家庭關係盤點",
      desc: "了解婚姻狀態、子女、前段婚姻、扶養責任及重要家庭成員。",
    },
    {
      no: "02",
      title: "資產與負債盤點",
      desc: "整理房產、現金、投資、保單、公司股權及相關負債。",
    },
    {
      no: "03",
      title: "釐清資金來源",
      desc: "確認重要資產取得時間、出資來源及目前持有方式。",
    },
    {
      no: "04",
      title: "找出權益風險",
      desc: "辨識資訊不完整、財產安排不清、現金流不足或家庭溝通上的問題。",
    },
    {
      no: "05",
      title: "建立執行方案",
      desc: "依需求安排文件整理、財務調整、專業諮詢及後續追蹤。",
    },
  ];

  const deliverables = [
    {
      title: "家庭關係圖",
      desc: "整理配偶、子女與重要家庭成員之間的關係。",
      icon: Users,
    },
    {
      title: "家庭資產總表",
      desc: "把主要財產、負債與持有狀況集中整理。",
      icon: WalletCards,
    },
    {
      title: "財務風險清單",
      desc: "找出資料不完整、流動性與家庭財務上的重要缺口。",
      icon: ShieldCheck,
    },
    {
      title: "權益整理架構",
      desc: "依家庭事件與需求整理需要進一步確認的權益議題。",
      icon: Scale,
    },
    {
      title: "後續行動清單",
      desc: "列出現在可以做、需要專業協助及後續追蹤的事項。",
      icon: FileSignature,
    },
  ];

  const faqs = [
    {
      q: "結婚後，婚前財產是不是就變成夫妻共同財產？",
      a: "不能只用『結婚後就全部共有』來理解。實際權益仍要依財產取得時間、來源、婚姻財產制度及個案資料判斷，因此婚前與婚後資產最好都保留清楚紀錄。",
    },
    {
      q: "房子登記在一方名下，另一方就一定沒有權益嗎？",
      a: "不能只看登記名稱就直接下結論。實際情況還可能涉及出資來源、取得時間、婚姻財產制度及其他事實，因此需要依個案資料進一步整理。",
    },
    {
      q: "夫妻有需要彼此知道對方所有資產嗎？",
      a: "不一定要把所有資產完全混在一起，但至少重要房產、貸款、保單、帳戶與重大財務責任應有基本資訊整理，避免突發事件發生時家人完全不知道從哪裡開始處理。",
    },
    {
      q: "如果正在考慮離婚，可以先做財產盤點嗎？",
      a: "可以。先整理資產、負債、重要資金紀錄與家庭支出，可以讓後續諮詢更有效率。若涉及具體法律權利義務，仍應由合格法律專業人士依個案判斷。",
    },
    {
      q: "再婚家庭為什麼更需要提前規劃？",
      a: "因為可能同時存在現任配偶、前段婚姻子女、不同來源的房產或保單等安排。若沒有提前整理，未來更容易出現資訊不清或家人理解不同的情況。",
    },
    {
      q: "你們可以直接替我判斷法律上誰一定能拿多少嗎？",
      a: "我們可以先協助整理家庭財務、資產與問題架構；涉及具體法律權利、訴訟或法律意見時，應再由律師等合格專業人士依當時法律及個案事實確認。",
    },
  ];

  return (
    <div className="bg-[#F7F4EE] text-[#102D4D]">

      {/* =====================================================
          01 HERO
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#DDBB78]/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B8C8CF]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">

          {/* 左側 */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B1813D]/20 bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-[#A87535] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#B1813D]" />
              FAMILY & MARITAL FINANCE
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.2] tracking-tight sm:text-5xl lg:text-[58px]">
              家庭財務，
              <br />
              不只是誰賺得多，
              <span className="mt-2 block text-[#B1813D]">
                而是重要時刻，
                <br />
                權益能不能說清楚。
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64717E]">
              從婚前財產、婚後資產、房產、保單、
              公司股權到繼承與家庭重大事件，
              先把財務與關係整理清楚，
              才有機會在真正需要做決定時保有選擇。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "家庭財務盤點",
                "婚姻權益整理",
                "重大事件預備",
                "跨專業協作",
              ].map((item) => (
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
                開始家庭財務盤點
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* 右側圖片 */}
          <div className="relative">
            <div className="overflow-hidden rounded-[34px] border border-white bg-white p-2 shadow-[0_30px_80px_rgba(16,45,77,0.16)]">
              <div className="relative h-[520px] overflow-hidden rounded-[28px]">
                <img
                  src="https://images.pexels.com/photos/7876295/pexels-photo-7876295.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="夫妻與專業人士討論家庭財務權益情境示意"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4D]/80 via-transparent to-transparent" />

                <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold backdrop-blur">
                  情境示意
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/20 bg-[#102D4D]/80 p-5 text-white backdrop-blur-md">
                  <p className="text-xs font-bold tracking-[0.16em] text-[#E5C689]">
                    FAMILY FINANCIAL MAP
                  </p>

                  <p className="mt-2 text-xl font-black">
                    把家庭關係與財務，放回同一張地圖
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          02 六大情境
      ===================================================== */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
              FAMILY SITUATIONS
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              很多家庭問題，
              <br />
              都是在事情發生後才開始問。
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#697581]">
              如果能在關係穩定、資訊完整、自己還能做決定的時候先整理，
              往往會有更多處理空間。
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
          03 家庭資產地圖
      ===================================================== */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                FAMILY ASSET MAP
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                權益整理之前，
                <br />
                先知道家庭真正
                <span className="text-[#B1813D]">
                  擁有什麼。
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#697581]">
                很多問題並不是沒有資料，
                而是房產在一個地方、保單在另一個地方、
                投資與公司資產又只有其中一個人知道。
              </p>

              <div className="mt-8 rounded-[26px] bg-[#102D4D] p-7 text-white">
                <p className="text-lg font-black leading-8">
                  家庭財務整理的第一步：
                  <span className="text-[#E4C78E]">
                    讓重要資訊不只存在某一個人的腦袋裡。
                  </span>
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {assetItems.map((item) => {
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
          04 四大權益整理
      ===================================================== */}
      <section className="bg-[#102D4D] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#DDBB78]">
              FOUR KEY AREAS
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              不是等出事後才算，
              <br />
              而是平常就先整理。
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              家庭財務權益不是只在離婚或繼承時才重要，
              平時的資料、持有方式與家庭財務透明度都會影響後續處理。
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {keyAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10"
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

        </div>
      </section>


      {/* =====================================================
          05 四種人生事件
      ===================================================== */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
              LIFE EVENTS
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              同一份家庭資產，
              <br />
              在不同人生事件下，
              <span className="text-[#B1813D]">
                問題完全不同。
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                no: "01",
                title: "婚前／新婚",
                items: [
                  "婚前資產紀錄",
                  "房產出資安排",
                  "家庭共同支出",
                  "重要財務資訊整理",
                ],
              },
              {
                no: "02",
                title: "婚姻進行中",
                items: [
                  "家庭資產更新",
                  "保單與受益安排",
                  "房貸與負債管理",
                  "夫妻財務資訊透明",
                ],
              },
              {
                no: "03",
                title: "婚姻關係變動",
                items: [
                  "資產與負債盤點",
                  "重要資金紀錄",
                  "生活現金流安排",
                  "法律專業轉介",
                ],
              },
              {
                no: "04",
                title: "配偶死亡／再婚",
                items: [
                  "遺產與資產盤點",
                  "保單與現金整理",
                  "家庭成員權益",
                  "後續傳承安排",
                ],
              },
            ].map((event) => (
              <div
                key={event.no}
                className="rounded-[30px] border border-[#102D4D]/10 bg-[#F7F4EE] p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102D4D] font-black text-[#DDBB78]">
                    {event.no}
                  </span>

                  <h3 className="text-2xl font-black">
                    {event.title}
                  </h3>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {event.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 rounded-xl bg-white px-4 py-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-[#B1813D]"
                      />

                      <p className="text-sm font-bold leading-6">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          06 五步驟流程
      ===================================================== */}
      <section className="bg-[#EEE8DD] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
                OUR APPROACH
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                先整理事實，
                <br />
                再談
                <span className="text-[#B1813D]">
                  權益與方案。
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#697581]">
                家庭財務議題很容易牽涉情緒，
                所以第一步不是急著判斷誰對誰錯，
                而是先把關係、資產與重要資料整理完整。
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
              把原本很亂的家庭問題，
              <br />
              變成一份可以討論的資料。
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {deliverables.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <Icon
                    size={30}
                    className="text-[#B1813D]"
                  />

                  <h3 className="mt-6 text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#697581]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-[28px] bg-[#102D4D] px-8 py-7 text-center text-white">
            <p className="text-lg font-black leading-8">
              先把事情整理清楚，
              <span className="text-[#E3C78F]">
                才知道下一步到底需要財務、稅務、法律，還是其他專業協助。
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
                再婚夫妻，
                <br />
                雙方都有前段婚姻子女。
              </h2>

              <span className="mt-6 inline-block rounded-full bg-[#F1E8D8] px-4 py-2 text-xs font-bold text-[#A87535]">
                規劃情境示意
              </span>

              <blockquote className="mt-7 border-l-4 border-[#B1813D] pl-6 text-xl font-black leading-8">
                「我想照顧現在的配偶，
                但也不希望孩子以後有疑問。」
              </blockquote>
            </div>

            <div className="rounded-[34px] border border-[#102D4D]/10 bg-[#F7F4EE] p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["家庭型態", "再婚家庭"],
                  ["主要資產", "房產＋現金＋保單"],
                  ["家庭成員", "夫妻＋雙方子女"],
                  ["主要需求", "生活保障＋未來分配"],
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
                  真正需要整理的問題：
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    "哪些資產屬於各自原有累積",
                    "現在共同生活需要多少安全資金",
                    "房產與保單目前如何安排",
                    "現任配偶與雙方子女的需求如何同時看見",
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
                  家庭權益規劃不是：
                  <br />
                  「先站哪一邊？」
                  <br />
                  而是：
                  <span className="text-[#E4C78E]">
                    「先把每一個人的位置與財務事實整理清楚。」
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
              婚姻與家庭財務常見問題
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

          <div className="mt-8 rounded-2xl border border-[#B1813D]/20 bg-[#F1E8D8] px-6 py-5 text-center">
            <p className="text-sm leading-7 text-[#6D675C]">
              本頁內容為一般性的家庭財務與規劃資訊。
              涉及具體法律權利、訴訟、財產制度或稅務效果時，
              應依個案資料及當時法規由相關專業人士進一步確認。
            </p>
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
                  FAMILY FINANCIAL REVIEW
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                  很多權益問題，
                  <br />
                  越早整理，
                  <br />
                  選擇就越多。
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  如果家庭財務、房產、保單或資產關係已經開始變得複雜，
                  可以先從一次資料與需求盤點開始。
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "先了解問題",
                    "資料保密",
                    "依需求串接專業",
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