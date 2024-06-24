"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const pathname = usePathname();

  const getMenuItemClassName = (path: string) =>
    classNames({
      "text-[#1A64F0]": pathname === path,
    });

  const getUnderlineClassName = (path: string) =>
    classNames("h-1", {
      "bg-[#1A64F0]": pathname === path,
    });

  const menuClassName = classNames(
    "hidden leading-6 font-bold lg:flex gap-x-12",
    className
  );

  return (
    <div className={menuClassName}>
      <Link href="/rsi-heatmap">
        <div className="flex flex-col gap-1">
          <div className={getMenuItemClassName("/rsi-heatmap")}>RSI</div>
          <div className={getUnderlineClassName("/rsi-heatmap")}></div>
        </div>
      </Link>
      <Link href="/social">
        <div className="flex flex-col gap-1">
          <div className={getMenuItemClassName("/social")}>Social</div>
          <div className={getUnderlineClassName("/social")}></div>
        </div>
      </Link>
      <Link href="/academy">
        <div className="flex flex-col gap-1">
          <div className={getMenuItemClassName("/academy")}>Academy</div>
          <div className={getUnderlineClassName("/academy")}></div>
        </div>
      </Link>
      <Link href="/news">
        <div className="flex flex-col gap-1">
          <div className={getMenuItemClassName("/news")}>News</div>
          <div className={getUnderlineClassName("/news")}></div>
        </div>
      </Link>
    </div>
  );
};
