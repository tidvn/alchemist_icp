import Image from "next/image";

const iconUrls = {
  ADA: "/img/coins/ADA.svg",
  ATOM: "/img/coins/ATOM.svg",
  AVAX: "/img/coins/AVAX.svg",
  DOT: "/img/coins/DOT.svg",
  UNI: "/img/coins/UNI.svg",
  BFT: "/img/coins/BFT.svg",
  BNB: "/img/coins/BNB.svg",
  BUSD: "/img/coins/BUSD.svg",
  LINK: "/img/coins/LINK.svg",
  LUNA: "/img/coins/LUNA.svg",
  USDT: "/img/coins/USDT.svg",
  COTI: "/img/coins/COTI.svg",
  DOGE: "/img/coins/DOGE.svg",
  DOT: "/img/coins/DOT.svg",
  ETH: "/img/coins/ETH.svg",
  LINA: "/img/coins/LINA.svg",
  LTC: "/img/coins/LTC.svg",
  MATIC: "/img/coins/MATIC.svg",
  SOL: "/img/coins/SOL.svg",
  TRX: "/img/coins/TRX.svg",
  XRP: "/img/coins/XRP.svg",
  PYR: "/img/coins/PYR.png",
  BTC: "/img/coins/BTC.svg",
};

export const icons = Object.keys(iconUrls).reduce((acc, key) => {
  acc[key] = (
    <img
      className="h-[50px]"
      src={iconUrls[key]}
      alt={key}
      width={50}
      height={50}
    />
  );

  return acc;
}, {});

export const getIcon = (symbol) => icons[symbol] || null;
