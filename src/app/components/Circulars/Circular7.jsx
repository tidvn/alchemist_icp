import React from "react";
import { useParallax } from "react-scroll-parallax";

const Circular7 = ({ autoSpin = false, spinWhenScroll = false }) => {
  const parallax = useParallax({
    rotate: [0, 360],
    disabled: !spinWhenScroll,
  });

  return (
    <div className="circle-coins">
      <div
        ref={parallax.ref}
        className={`circle-coins__coin-wrap ${autoSpin ? "auto-spin" : ""}`}
      >
        {/* <div className="circle-coins__coin rotate-[200deg]">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="33.6291" cy="33.6291" r="33.6291" fill="#34384C"/>
            <g clipPath="url(#clip0_23_11078)">
              <path d="M56.2757 34.4074C56.2757 47.3034 45.822 57.7571 32.9259 57.7571C20.0303 57.7571 9.57617 47.3034 9.57617 34.4074C9.57617 21.5115 20.0303 11.0576 32.9259 11.0576C45.822 11.0576 56.2757 21.5115 56.2757 34.4074Z" fill="#1BA27A"/>
              <path d="M43.8853 22.832L21.7754 22.832L21.7754 28.1698L30.1615 28.1698L30.1615 36.0153L35.4992 36.0153L35.4992 28.1698L43.8853 28.1698L43.8853 22.832Z" fill="white"/>
              <path d="M32.881 36.8504C25.9438 36.8504 20.3196 35.7525 20.3196 34.3979C20.3196 33.0436 25.9436 31.9455 32.881 31.9455C39.8182 31.9455 45.4422 33.0436 45.4422 34.3979C45.4422 35.7525 39.8182 36.8504 32.881 36.8504ZM46.9854 34.8068C46.9854 33.0602 40.6707 31.6445 32.881 31.6445C25.0915 31.6445 18.7764 33.0602 18.7764 34.8068C18.7764 36.3448 23.673 37.6263 30.1617 37.9102L30.1617 49.1727L35.499 49.1727L35.499 37.9146C42.0376 37.6396 46.9854 36.3528 46.9854 34.8068Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_23_11078">
                <rect width="46.933" height="46.933" fill="white" transform="translate(9.38477 10.9492)"/>
              </clipPath>
            </defs>
          </svg>
        </div> */}

        <div className="circle-coins__coin rotate-[200deg]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13.7809" cy="13.7809" r="13.7809" fill="#34384C" />
            <g clipPath="url(#clip0_23_11070)">
              <circle cx="13.4621" cy="14.1037" r="9.61636" fill="#25292C" />
              <path
                d="M17.4281 8.49414H19.0496L15.6751 12.5288C14.4531 13.9891 12.4718 13.9891 11.2489 12.5288L7.87305 8.49414H9.49587L12.0596 11.559C12.4331 12.0036 12.9365 12.2528 13.461 12.2528C13.9855 12.2528 14.4889 12.0036 14.8624 11.559L17.4281 8.49414Z"
                fill="white"
              />
              <path
                d="M9.47514 19.7134H7.85254L11.2489 15.6538C12.471 14.1935 14.4523 14.1935 15.6752 15.6538L19.0716 19.7134H17.4501L14.8645 16.6236C14.4909 16.1791 13.9875 15.9298 13.4631 15.9298C12.9386 15.9298 12.4352 16.1791 12.0617 16.6236L9.47514 19.7134Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_23_11070">
                <rect
                  width="19.2327"
                  height="19.2327"
                  fill="white"
                  transform="translate(3.8457 4.4873)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <svg
        className="circle-coins__circle"
        width="273"
        height="273"
        viewBox="0 0 273 273"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="136.391"
          cy="136.268"
          r="134.797"
          stroke="#34384C"
          strokeWidth="2"
          strokeDasharray="5 4"
        />
      </svg>
    </div>
  );
};

export default Circular7;
