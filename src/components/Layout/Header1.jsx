"use client";
import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/router";
import { Button } from "flowbite-react";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// import Link from "../Elements/Link";
// import useUser from "../../libs/useUser";
import navigationMenus from "../../data/navigations.json";
// import ConnectWallet from "../Wallet/ConnectWallet";
// import { useWallet } from "use-wallet";
import Link from "next/link";

const maskAccount = (address) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const UserDropDown = ({ user }) => {
  const firstLetter = user?.name?.charAt(0) || user?.email?.charAt(0) || "U";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="UserDropDown group p-0 m-0 focus:outline-0 flex items-center gap-2">
        <Avatar.Root className="AvatarRoot w-10 h-10 lg:w-12 lg:h-12 focus:ring-4 focus">
          <Avatar.Fallback className="AvatarFallback">
            {firstLetter}
          </Avatar.Fallback>
        </Avatar.Root>

        <svg
          className="w-4 h-4 transition group-state-open:rotate-180"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.82734 5.16393C3.02214 4.96523 3.32696 4.94716 3.54177 5.10974L3.60331 5.16393L7.99996 9.64894L12.3966 5.16393C12.5914 4.96523 12.8962 4.94716 13.111 5.10974L13.1726 5.16393C13.3674 5.36264 13.3851 5.67358 13.2257 5.8927L13.1726 5.95547L8.38795 10.8361C8.19315 11.0348 7.88832 11.0528 7.67351 10.8903L7.61197 10.8361L2.82734 5.95547C2.61306 5.73689 2.61306 5.38251 2.82734 5.16393Z" />
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="DropdownMenuContent"
          sideOffset={15}
        >
          <DropdownMenu.Item className="DropdownMenuItem">
            <svg
              className="w-4 h-4"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.00258 1.33331C6.04656 1.33331 4.4609 2.92574 4.4609 4.8901C4.4609 6.85445 6.04656 8.44688 8.00258 8.44688C9.95859 8.44688 11.5443 6.85445 11.5443 4.8901C11.5443 2.92574 9.95859 1.33331 8.00258 1.33331ZM8.0025 2.2984C9.42776 2.2984 10.5832 3.45873 10.5832 4.89007C10.5832 6.32141 9.42776 7.48174 8.0025 7.48174C6.57724 7.48174 5.42183 6.32141 5.42183 4.89007C5.42183 3.45873 6.57724 2.2984 8.0025 2.2984ZM6.55333 9.88057C6.03485 9.91656 5.51077 9.99058 4.99382 10.1014C3.99608 10.3069 3.19786 10.7175 2.85812 11.3999C2.72998 11.6668 2.66555 11.9525 2.66664 12.2418C2.66626 12.529 2.73016 12.8151 2.8537 13.0768C3.17992 13.7514 3.88516 14.1331 4.83745 14.3447L5.00804 14.3803C5.51095 14.4938 6.03519 14.5701 6.56294 14.606C6.60788 14.6192 6.71501 14.6314 6.83193 14.6374L6.9281 14.641C6.97755 14.6422 7.03368 14.6424 7.1173 14.6424C7.87586 14.6842 8.66224 14.672 9.44497 14.6054C9.86209 14.5768 10.282 14.5223 10.6984 14.4424L11.01 14.3777C12.0383 14.1748 12.8083 13.789 13.1457 13.0776C13.3958 12.5494 13.3958 11.9364 13.1458 11.4085C12.8093 10.6988 12.0491 10.3162 11.0022 10.1006C10.5915 10.0129 10.1741 9.94801 9.75374 9.90657L9.44643 9.88057C8.48391 9.79566 7.51584 9.79566 6.55333 9.88057ZM9.36224 10.842L9.37069 10.8426C9.85312 10.8766 10.3326 10.9443 10.8056 11.0453C11.5833 11.2055 12.111 11.4711 12.2779 11.8231C12.4036 12.0886 12.4036 12.3971 12.2778 12.6629C12.1218 12.9919 11.6479 13.246 10.9628 13.4014L10.8129 13.4331C10.3305 13.5407 9.85263 13.6101 9.37157 13.6431C8.62515 13.7066 7.88316 13.718 7.14304 13.678L6.88064 13.6735C6.8078 13.6698 6.74641 13.6628 6.68951 13.6513C6.23901 13.6173 5.83364 13.5635 5.44004 13.4855L5.20503 13.4358C4.425 13.2829 3.89263 13.0161 3.72002 12.6593C3.65963 12.5313 3.62736 12.3868 3.62756 12.2406C3.62702 12.0952 3.65885 11.954 3.72065 11.8252C3.88848 11.4882 4.45266 11.198 5.19057 11.046C5.66702 10.9439 6.14628 10.8762 6.62849 10.8426C7.54389 10.762 8.45568 10.762 9.36224 10.842Z"
                fill="#333333"
              />
            </svg>
            <Link href="/account" className="grow hover:underline">
              Your Profile
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="DropdownMenuItem">
            <svg
              className="w-4 h-4"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29774 2.28033C5.45294 2.12511 5.683 2.07992 5.88814 2.16594L5.95547 2.2072L13.0555 7.04168C13.2118 7.15054 13.2925 7.33165 13.2925 7.52349C13.2925 7.71532 13.2118 7.89643 13.0555 8.0053L5.95547 12.8398C5.75147 12.9846 5.48274 12.968 5.29774 12.7885C5.14253 12.6333 5.09734 12.4032 5.18336 12.1981L5.22461 12.1308L11.6348 7.52349L5.22461 2.91614C5.02934 2.76593 4.98948 2.48623 5.12301 2.28707L5.18336 2.2072L5.29774 2.28033Z"
                fill="#333333"
              />
            </svg>
            <Link href="/logout" className="grow hover:underline">
              Log out
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default function Header() {
  // const { user, isLoading } = useUser();
  const [toggle, setToggle] = useState(false);
  // const { account } = useWallet();
  const [account, setAccount] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <header className="relative h-[75px] lg:h-[100px] z-50">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="relative flex items-center justify-between h-[75px] lg:h-[100px]">
          <div className="relative flex items-center justify-start w-[160px] md:w-[220px] lg:w-[300px] z-20">
            <button
              onClick={toggleNav}
              aria-controls="mobile-menu"
              aria-expanded="false"
              className="lg:hidden px-2 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <Link href="/" className="block">
              <img
                src="/icons/main-logo.svg"
                alt="logo"
                className="block w-full"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end lg:hidden flex-1">
            {!isLoading && (
              <>
                {!user ? (
                  <Link href="/login">
                    <Button color="gray">Sign In</Button>
                  </Link>
                ) : (
                  <UserDropDown user={user} />
                )}
              </>
            )}
          </div>

          <div className="hidden lg:flex items-center justify-between absolute w-full h-full top-0 left-0">
            <div className="h-full flex items-center justify-center">
              <nav className="flex items-center space-x-8 xl:space-x-14 2xl:space-x-20">
                {/* {navigationMenus.map((menu, i) => (
                  <Link
                    key={i}
                    href={menu.path}
                    className="block font-semibold text-base md:text-lg xl:text-xl transition hover:text-blue-400"
                  >
                    {menu.label}
                  </Link>
                ))} */}
              </nav>
            </div>

            <div className="flex items-center justify-end gap-4 xl:gap-6">
              {!isLoading && (
                <>
                  {!user ? (
                    <Link href="/login">
                      <Button color="gray">Sign In</Button>
                    </Link>
                  ) : (
                    <UserDropDown user={user} />
                  )}
                </>
              )}

              {account ? (
                <Button
                  className="min-w-[60px] max-w-[100px] overflow-hidden bg-white/50 border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 rounded-md shadow-sm focus:outline-none"
                  // onClick={() => router.push("/wallet")}
                >
                  {maskAccount(account)}
                </Button>
              ) : (
                // <ConnectWallet />
                <div>ddd</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          toggle ? "block" : "hidden"
        } lg:hidden absolute top-0 left-0 w-full z-10`}
      >
        <div className="bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* {navigationMenus.map((menu, i) => (
              <Link
                key={i}
                href={menu.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {menu.label}
              </Link>
            ))} */}
          </div>

          <div className="px-2 py-3 border-t border-gray-200">
            {!isLoading && (
              <>
                {!user ? (
                  <Link href="/login">
                    <Button color="gray" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                ) : (
                  <UserDropDown user={user} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
