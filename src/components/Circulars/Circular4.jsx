import React from "react";
import { useParallax } from "react-scroll-parallax";

const Circular4 = ({ autoSpin = false, spinWhenScroll = false }) => {
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
        <div className="circle-coins__coin rotate-[100deg]">
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="29.4548"
              cy="29.5382"
              rx="29.0705"
              ry="29.046"
              fill="white"
            />
            <g clipPath="url(#clip0_15_514)">
              <path
                d="M28.7826 50.486C39.986 50.486 49.0681 41.4115 49.0681 30.2176C49.0681 19.0237 39.986 9.94922 28.7826 9.94922C17.5792 9.94922 8.49707 19.0237 8.49707 30.2176C8.49707 41.4115 17.5792 50.486 28.7826 50.486Z"
                fill="#767DFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.9553 18.1836H31.6099C31.8058 18.1835 31.9982 18.2356 32.1674 18.3344C32.3365 18.4333 32.4762 18.5753 32.5722 18.746L41.3279 34.3514C41.4201 34.5159 41.4685 34.7013 41.4685 34.8898C41.4685 35.0783 41.4201 35.2637 41.3279 35.4282L38.526 40.4218C38.4303 40.5926 38.2908 40.7348 38.1219 40.8339C37.953 40.9329 37.7608 40.9853 37.5649 40.9855H20.0002C19.8041 40.9855 19.6116 40.9333 19.4425 40.8342C19.2733 40.7351 19.1337 40.5928 19.0379 40.4218L16.2372 35.4282C16.1451 35.2637 16.0967 35.0783 16.0967 34.8898C16.0967 34.7013 16.1451 34.5159 16.2372 34.3514L24.993 18.746C25.0889 18.5753 25.2286 18.4333 25.3978 18.3344C25.5669 18.2356 25.7593 18.1835 25.9553 18.1836ZM28.7826 24.3921L22.8833 34.8898H34.6818L28.7826 24.3921Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_514">
                <rect
                  width="40.5695"
                  height="40.5383"
                  fill="white"
                  transform="translate(8.49707 9.94922)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <svg
        className="circle-coins__circle w-[195px] h-[195px] lg:w-[371px] lg:h-[371px]"
        width="371"
        height="371"
        viewBox="0 0 371 371"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          rx="184.062"
          ry="184.009"
          transform="matrix(1 0 0.000149066 1 185.526 185.239)"
          stroke="white"
          strokeWidth="1.64"
          strokeDasharray="4.12 3.3"
        />
      </svg>
    </div>
  );
};

export default Circular4;
