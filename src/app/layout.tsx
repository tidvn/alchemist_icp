"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeProvider from "@/app/contexts/ThemeProvider";
import { useEffect } from "react";
import AOS from "aos";
import { ParallaxProvider } from "react-scroll-parallax";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "atropos/css";
import "aos/dist/aos.css";

// Import flowbite JS
import "flowbite";
import { Footer } from "@/app/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <title>The Alchemist</title>
      <body className={inter.className}>
        <AntdRegistry>
          <ParallaxProvider>
            <ThemeProvider>
              <div>
                {children}
                {/* <Footer /> */}
              </div>
            </ThemeProvider>
          </ParallaxProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
