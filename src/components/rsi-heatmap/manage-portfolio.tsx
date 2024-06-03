import { Button } from "antd";
import Image from "next/image";

export const ManagePortfolio = () => {
  return (
    <div className="p-6 md:px-4 flex flex-col justify-between gap-4">
      <div className="text-[#111] font-bold text-lg text-center">
        Manage your Portfolio
      </div>
      <div className="flex justify-center">
        <Image src="/portfolio.svg" width={150} height={150} alt="portfolio" />
      </div>
      <div className="flex justify-center">
        <Button
          type="primary"
          size="large"
          className="!p-2 !h-9 !w-full !text-xs sm:!w-[300px] lg:!w-full"
        >
          <div>
            Go to <span className="!font-bold">My Dashboard</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
