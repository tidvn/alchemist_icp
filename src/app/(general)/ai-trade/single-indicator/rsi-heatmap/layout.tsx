import Header from "@/app/components/Layout/Header";
import { Footer } from "@/app/components/footer/Footer";

import Link from "next/link";

export default function RsiHeatMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section className="mx-2 sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-36 mt-7 mb-14">
        <div className="flex items-center justify-center text-center text-xs leading-5 font-medium bg-[#F0F7FF] h-11 rounded-lg mt-16 md:mt-24">
          <div>
            Bitcoin price drops 10% in the last 24 hours!
            <Link href="#" className="text-[#1A64F0] ml-1">
              SEE MORE!
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-8 mb-10 mx-auto max-w-[1380px]">
          {children}
        </div>
      </section>
    </div>
  );
}
