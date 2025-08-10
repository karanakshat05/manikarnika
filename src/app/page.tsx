import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
import AboutUs from "@/components/about_us";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <Navbar></Navbar>
       <AboutUs></AboutUs>
       <Footer></Footer>
      </main>
    </div>
  );
}
