import { List, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Menu } from "../menu/menu";
import { QuickUser } from "../user/quick-user";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center px-4 lg:px-0">
        <div className="w-40 h-6 md:w-56 md:h-11">
          <Image
            src="/logo-header.svg"
            priority
            width={229}
            height={44}
            alt="The AIchemist logo"
          />
        </div>
        <Menu />
        <QuickUser />
        <div className="flex justify-between items-center lg:hidden">
          <MagnifyingGlass className="cursor-pointer" weight="bold" size={24} />
          <List className="ml-4 cursor-pointer" weight="bold" size={24} />
        </div>
      </div>
    </div>
  );
};
