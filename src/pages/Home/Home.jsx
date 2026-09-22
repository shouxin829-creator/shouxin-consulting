import { useState } from "react";
import { usePageMeta } from "../../hooks/usePageMeta";

const WEB3FORMS_ACCESS_KEY = "bce13169-625a-47b0-8144-535b5575bcc2";

const services = [
  {
    number: "01",
    title: "資產管理",
    desc: "盤點不動產、現金、保單、投資與企業資產，建立清楚完整的家庭資產架構。",
    image:
      "https://images.pexels.com/photos/7821671/pexels-photo-7821671.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    title: "退休規劃",
    desc: "從退休生活支出、退休金流與風險保障出發，提前安排退休後的財務生活。",
    image:
      "https://images.pexels.com/photos/8441774/pexels-photo-8441774.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    title: "傳承規劃",
    desc: "整合遺產、贈與、信託、保險與遺囑，協助家庭把重要的事情提前安排清楚。",
    image:
      "https://images.pexels.com/photos/8441866/pexels-photo-8441866.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "04",
    title: "婚姻與家庭財務權益",
    desc: "針對婚姻財產、繼承分配與家庭財務安排，協助釐清權益與可執行方向。",
    image:
      "https://images.pexels.com/photos/7876295/pexels-photo-7876295.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const steps = [
  ["01", "全面盤點", "了解家庭成員、資產、負債、保單、現金流，以及真正想解決的問題。"],
  ["02", "找出風險", "釐清退休、傳承、稅務、財產分配與家庭溝通上的潛在問題。"],
  ["03", "設計架構", "依照實際需求整合法律、稅務、信託、保險與財務工具。"],
  ["04", "協助執行", "把規劃轉化成明確執行步驟，並依需求串接相關專業人士。"],
];

export default function Home() {
  const [status, setStatus] = useState("idle");

  usePageMeta({
    title: "守信顧問｜資產傳承規劃・遺產信託・婚姻財產權益｜台中",
    description:
      "守信顧問提供資產傳承規劃、遺產規劃、信託規劃、退休理財規劃與婚姻財產權益諮詢，位於台中西屯，協助您把複雜的財務與傳承問題一次說清楚。",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append(
      "subject",
      `守信顧問｜初步諮詢需求｜${data.get("name") || ""}`
    );

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section id="top" className="relative overflow-hidden">
        <h1 className="sr-only">
          守信顧問｜資產傳承規劃・遺產規劃・信託規劃・退休理財規劃・婚姻財產權益諮詢
        </h1>
        <div className="mx-auto max-w-[1500px] px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
          <div className="overflow-hidden rounded-[24px] border border-[#102D4D]/10 bg-white shadow-[0_30px_80px_rgba(20,43,70,0.14)]">
            <div className="relative">
              <img
                src="/images/hero-home.png"
                alt="守信顧問資產退休與傳承規劃"
                className="block h-auto w-full"
              />

              <a
                href="#contact"
                aria-label="預約初步諮詢"
                className="absolute left-[5.5%] top-[64.5%] h-[10%] w-[23%] rounded-full transition hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
            OUR SERVICES
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            從現在的生活，規劃到未來的交代。
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-[30px] border border-[#102D4D]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-[270px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title}情境示意`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D4D]/85 via-transparent to-transparent" />
                  <span className="absolute right-5 top-5 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-bold">
                    情境示意
                  </span>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm font-bold text-[#EACF9B]">
                      SERVICE {service.number}
                    </p>
                    <h3 className="mt-1 text-3xl font-black text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="leading-8 text-[#697581]">{service.desc}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 font-black text-[#102D4D]"
                  >
                    了解服務 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-[#EEE8DD] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-black tracking-[0.24em] text-[#AE8040]">
              OUR APPROACH
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              專業規劃，
              <br />
              從釐清開始。
            </h2>
          </div>

          <div className="grid gap-4">
            {steps.map(([number, title, desc]) => (
              <div
                key={number}
                className="flex gap-5 rounded-[24px] bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#102D4D] font-black text-[#E2C58C]">
                  {number}
                </div>
                <div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-[#697581]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-[#102D4D] shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 text-white md:p-12 lg:p-14">
              <p className="text-xs font-black tracking-[0.24em] text-[#DDBB78]">
                START PLANNING
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                最好的規劃，
                <br />
                就是趁早・即時・生效
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                可以先從一次初步需求盤點開始，了解目前最重要的問題。
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 lg:p-14">
              <h3 className="text-3xl font-black">預約初步諮詢</h3>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input
                  name="name"
                  required
                  placeholder="姓名"
                  className="w-full rounded-xl border border-[#102D4D]/15 bg-[#FAF8F3] px-4 py-3 outline-none"
                />
                <input
                  name="phone"
                  required
                  placeholder="聯絡電話"
                  className="w-full rounded-xl border border-[#102D4D]/15 bg-[#FAF8F3] px-4 py-3 outline-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-[#102D4D]/15 bg-[#FAF8F3] px-4 py-3 outline-none"
                />
                <select
                  name="topic"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-[#102D4D]/15 bg-[#FAF8F3] px-4 py-3 outline-none"
                >
                  <option value="" disabled>想諮詢的問題</option>
                  <option>資產管理</option>
                  <option>退休規劃</option>
                  <option>傳承規劃</option>
                  <option>婚姻與家庭財務權益</option>
                  <option>其他</option>
                </select>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="補充說明"
                  className="w-full resize-none rounded-xl border border-[#102D4D]/15 bg-[#FAF8F3] px-4 py-3 outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl bg-[#102D4D] px-6 py-4 font-black text-white disabled:opacity-60"
                >
                  {status === "sending" ? "傳送中…" : "送出諮詢需求 →"}
                </button>

                {status === "success" && (
                  <p className="text-center font-bold text-emerald-600">
                    已收到您的需求，我們會盡快與您聯繫！
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center font-bold text-red-600">
                    送出失敗，請稍後再試，或直接來信 shouxin829@gmail.com
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
