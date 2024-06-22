"use client";
import { useEffect, useRef, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { MegaMenu } from 'flowbite-react';

// import Link from "../Elements/Link";
// import useUser from "../../libs/useUser";
// import { getSiteUrl } from "../../libs/links";
import navigationMenus from "../../data/navigations.json";
// import ConnectWallet from "../Wallet/ConnectWallet";
// import { useWallet } from "use-wallet";
import Link from "next/link";
import classNames from "classnames";
import { Dropdown, Menu } from "antd";

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

          <DropdownMenu.Item className="DropdownMenuItem group">
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
                d="M7.55427 1.34766C9.14042 1.34766 10.435 2.59695 10.5077 4.16515L10.5109 4.30432V4.92632C10.5109 5.20247 10.2871 5.42632 10.0109 5.42632C9.7578 5.42632 9.54861 5.23822 9.5155 4.99417L9.51093 4.92632V4.30432C9.51093 3.26239 8.69625 2.4105 7.66922 2.35098L7.55427 2.34766H4.30427C3.2629 2.34766 2.4111 3.16241 2.35159 4.18937L2.34827 4.30432V11.7243C2.34827 12.7662 3.16287 13.6181 4.18937 13.6777L4.30427 13.681H7.56093C8.59917 13.681 9.44829 12.8693 9.50762 11.8462L9.51093 11.7317V11.103C9.51093 10.8268 9.73479 10.603 10.0109 10.603C10.2641 10.603 10.4733 10.7911 10.5064 11.0351L10.5109 11.103V11.7317C10.5109 13.3125 9.2664 14.603 7.70383 14.6776L7.56093 14.681H4.30427C2.71864 14.681 1.42416 13.4316 1.35148 11.8635L1.34827 11.7243V4.30432C1.34827 2.71829 2.59744 1.42356 4.16514 1.35087L4.30427 1.34766H7.55427ZM14.8932 8.36791C14.9101 8.35097 14.9259 8.33283 14.9402 8.31361L14.9413 8.31234C15.0873 8.11628 15.0711 7.83753 14.8926 7.65988L12.9406 5.71654L12.8844 5.66826C12.6884 5.52346 12.4106 5.54021 12.2335 5.71812L12.1852 5.7743C12.0404 5.97037 12.0572 6.24811 12.2351 6.42522L13.3296 7.51432H6.51233L6.44448 7.51889C6.20043 7.552 6.01233 7.76119 6.01233 8.01432C6.01233 8.29047 6.23619 8.51432 6.51233 8.51432H13.3284L12.235 9.60394L12.1865 9.65992C12.0409 9.85536 12.0564 10.1332 12.2336 10.311C12.4284 10.5067 12.745 10.5074 12.9407 10.3125L14.8927 8.36849L14.8932 8.36791Z"
                fill="#333333"
              />
            </svg>

            <Link href="/logout" className="grow hover:underline" forceRefresh>
              Logout
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const Header = () => {
  // const { user } = useUser();
  // const navigate = useNavigate();

  // const location = useLocation();
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);
  // const isAcademyLocation = location.pathname.includes("/academy");
  const isAcademyLocation = false;

  const drawer = useRef(null);
  const drawerEl = useRef(null);
  const [hiddenMobileMenu, setHiddenMobileMenu] = useState(true);
  const toggleDrawer = () => {
    setHiddenMobileMenu(!hiddenMobileMenu);
    drawer.current?.toggle();
  };

  // const wallet = useWallet();
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const mobileMenuClasses = classNames(
    "md:hidden fixed z-40 top-[60px] h-[calc(100vh-60px)]] p-0 overflow-y-auto bg-white w-full",
    { hidden: hiddenMobileMenu }
  );

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
  ];

  useEffect(() => {
    if (window.Drawer) {
      drawer.current = new window.Drawer(drawerEl.current, {
        placement: "bottom",
        bodyScrolling: false,
      });
    }
  }, []);

  let links = isAcademyLocation
    ? navigationMenus.academy
    : navigationMenus.main;

  return (
    <header>
      {!isAcademyLocation && (
        // <ConnectWallet
        //   isOpen={showConnectWallet}
        //   onClose={() => setShowConnectWallet(false)}
        // />
        <div></div>
      )}

      <nav className="bg-white/90 backdrop-blur py-2.5 fixed w-full z-[19999] top-0 left-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" className="mr-2 h-8" alt="The Alchemist" />
            <span className="self-center text-xl lg:text-3xl font-semibold whitespace-nowrap text-primary">
              The Alchemist
            </span>
          </Link>

          <div className="flex items-center md:order-2 gap-4 lg:gap-8">
            {!user && (
              <Link
                className="hidden lg:inline-block text-primary font-bold font-base"
                href="/login"
                // isNavLink
              >
                Login
              </Link>
            )}

            {isAcademyLocation && !user && (
              <Button
                className="hidden lg:block"
                pill
                // onClick={() => navigate(getSiteUrl("/register"))}
              >
                Sign Up
              </Button>
            )}

            {!isAcademyLocation && (
              <Button
                className="hidden lg:block"
                pill
                // onClick={() => setShowConnectWallet(true)}
              >
                {wallet?.isConnected()
                  ? maskAccount(wallet.account)
                  : "Connect Wallet"}
              </Button>
            )}

            {user && <UserDropDown user={user} />}

            <button
              onClick={toggleDrawer}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="flex-shrink-0 inline-flex items-center p-2 text-sm text-gray-500 rounded-full md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="5.5"
                  width="18"
                  height="2"
                  rx="1"
                  fill="#111111"
                />
                <rect
                  x="3"
                  y="11"
                  width="12"
                  height="2"
                  rx="1"
                  fill="#111111"
                />
                <rect
                  x="3"
                  y="16.5"
                  width="15"
                  height="2"
                  rx="1"
                  fill="#111111"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            // id="navbar-sticky"
          >
            <ul className="main-menu">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    // isNavLink
                    href={link.link}
                    // forceRefresh={link.hardLink || false}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              {/* {links.map((link, index) =>
                link.title !== "AI-trade" ? (
                  <li key={index}>
                    <Link href={link.link}>{link.title}</Link>
                  </li>
                ) : (
                  
                )
              )} */}
            </ul>
          </div>
        </div>
      </nav>

      <div
        ref={drawerEl}
        id="drawer-navigation"
        className={mobileMenuClasses}
        style={{ height: "calc(100vh - 60px)" }}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="relative py-8 px-6 overflow-y-auto h-full flex flex-col md:hidden justify-between gap-4">
          <div className="absolute z-10 bottom-2 left-0 right-0">
            <button
              onClick={toggleDrawer}
              className="block appearance-none p-0 m-0 border-0 bg-neutral1 w-32 h-[5px] rounded-full mx-auto"
            />
          </div>

          <ul className="mobile-menu space-y-4 -mx-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  // isNavLink
                  href={link.link}
                  className="flex items-center p-2 text-xl font-medium text-neutral1 rounded-lg hover:bg-gray-100"
                  onClick={toggleDrawer}
                  // forceRefresh={link.hardLink || false}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center pb-8">
            {isAcademyLocation && !user && (
              <>
                <Button
                  className="justify-center"
                  pill
                  fullSized
                  onClick={() => navigate(getSiteUrl("/register"))}
                >
                  Sign Up
                </Button>

                <a href="/" className="text-primary font-semibold text-sm mt-6">
                  Login
                </a>
              </>
            )}

            {!isAcademyLocation && (
              <Button
                className="justify-center"
                pill
                fullSized
                onClick={() => setShowConnectWallet(true)}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
