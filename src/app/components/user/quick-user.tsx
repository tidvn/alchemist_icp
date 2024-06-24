import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Button } from "antd";
import classNames from "classnames";
import Image from "next/image";

interface QuickUserProps {
  className?: string;
}

export const QuickUser = ({ className }: QuickUserProps) => {
  const quickUserClassName = classNames("hidden lg:flex gap-4", className);

  return (
    <div className={quickUserClassName}>
      <Button
        type="primary"
        shape="round"
        className="!leading-6 !h-12 !font-semibold !px-[30px] !py-3"
      >
        Connect Wallet
      </Button>
      <div className="flex justify-between gap-1 items-center cursor-pointer">
        <Image src="/user.svg" priority width={48} height={48} alt="user" />
        <CaretDown
          weight="bold"
          size={16}
          className="!font-extrabold text-lg"
        ></CaretDown>
      </div>
    </div>
  );
};
