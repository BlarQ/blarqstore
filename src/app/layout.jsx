import { Satisfy } from "next/font/google";
import "./globals.css";
import { TopNavbar } from "@/app/components/TopNavbar";
import { BottomNavbar } from "@/app/components/BottomNavbar";
import Footer from "./components/Footer";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "BlarQStore",
  description: "Home of Gadgets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={satisfy.className}>
      <div className="bg-white fixed inset-x-0 z-[1] border-b-0 shadow-md border-b-gray-200">

        <TopNavbar />
        <BottomNavbar />
      </div>

      <div className="relative min-h-screen bg-slate-50">

        {children}

      </div>

      <div className="bg-fuchsia-700 inset-y-64 min-h-[30vh] px-16">

        <Footer />
      </div>
      </body>
    </html>
  );
}
