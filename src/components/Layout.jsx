import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import FloatingConsultation from "./FloatingConsultation";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#102D4D]">
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingConsultation />
    </div>
  );
}
