// // src/app/page.tsx
// "use client";
// import Image from "next/image";
// import { Navbar } from "@/components/layout/Navbar";
// import HeroWithFumeMaskedBand from "@/components/Hero";
// import Footer from "@/components/layout/footer";
// import AboutUs from "@/components/about_us";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center w-full overflow-x-hidden min-h-screen p-8 pb-10 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//        <Navbar></Navbar>
//       <HeroWithFumeMaskedBand navbarHeight={80}/>
//         <AboutUs></AboutUs>
//        <Footer></Footer> 
//       </main>
//     </div>
//   );
// }
"use client";
import { Navbar } from "@/components/layout/Navbar";
import HeroWithFumeMaskedBand from "@/components/Hero";
import Footer from "@/components/layout/footer";
import AboutUs from "@/components/about_us";
import OurWork from "@/components/ourwork";
import Brand from "@/components/brand";
import OurClients from "@/components/ourclients";

export default function Home() {
  return (
    <div className="font-sans w-full min-h-screen overflow-x-hidden">
      {/* Fixed navbar */}
      <Navbar />

      {/* Full-width hero */}
      <HeroWithFumeMaskedBand navbarHeight={80} />

      {/* Rest of the content */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center w-full min-h-screen p-8  gap-16 sm:p-20">
        <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
          <OurWork/>
          <AboutUs />
          <OurClients/>
          <Brand/>
          
        </main>

      </div>
      {/* Footer */}
      <Footer />

    </div>
  );
}
