import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { UIProvider } from "@/context/UIContext";
import Nav from "@/components/Nav";
import NavSheet from "@/components/NavSheet";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ChatWidget from "@/components/ChatWidget";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Golden Rose — Floristikas un dekoru studija Jelgavā",
  description:
    "Editorial florists & event decoration in Jelgava, Latvia. Pušķi, kāzas, telpu noformējumi.",
  openGraph: {
    title: "The Golden Rose",
    description: "Floristikas un dekoru studija Jelgavā",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap&subset=latin,latin-ext"
        />
      </head>
      <body>
        <UIProvider>
          <CartProvider>
            <Reveal />
            <Nav />
            <NavSheet />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
            <ChatWidget />
          </CartProvider>
        </UIProvider>
      </body>
    </html>
  );
}
