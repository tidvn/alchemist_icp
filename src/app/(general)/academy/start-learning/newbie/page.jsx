"use client";
import React from "react";
import Atropos from "atropos/react";
import { Parallax } from "react-scroll-parallax";

import Banner1 from "@/app/components/Academy/Banner1";
import TopicFilters from "@/app/components/Academy/TopicFilters";
import MainListLogo from "@/app/components/Academy/MainListLogo";
import AcademyPost from "@/app/components/Post/AcademyPost";

import mockPosts from "@/app/mocks/academy-articles.json";

const TheNavigation = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="button bg-white focus:ring-4 focus:ring-gray-100 border border-[#E3E4E8] w-7 h-7 flex items-center justify-center rounded-md text-sm p-0 m-0">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.44955 0.9375C5.50908 0.997024 5.53884 1.06548 5.53884 1.14286C5.53884 1.22024 5.50908 1.28869 5.44955 1.34821L1.94062 4.85714L5.44955 8.36607C5.50908 8.4256 5.53884 8.49405 5.53884 8.57143C5.53884 8.64881 5.50908 8.71726 5.44955 8.77679L5.00312 9.22321C4.9436 9.28274 4.87515 9.3125 4.79777 9.3125C4.72039 9.3125 4.65193 9.28274 4.59241 9.22321L0.431696 5.0625C0.372173 5.00298 0.342411 4.93452 0.342411 4.85714C0.342411 4.77976 0.372173 4.71131 0.431696 4.65179L4.59241 0.491072C4.65193 0.431547 4.72039 0.401786 4.79777 0.401786C4.87515 0.401786 4.9436 0.431547 5.00312 0.491072L5.44955 0.9375Z"
            fill="#1A64F0"
          />
        </svg>
      </button>

      <button className="button bg-white focus:ring-4 focus:ring-gray-100 border border-[#E3E4E8] w-7 h-7 flex items-center justify-center rounded-md text-sm p-0 m-0">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.36384 4.65179C5.42336 4.71131 5.45312 4.77976 5.45312 4.85714C5.45312 4.93452 5.42336 5.00298 5.36384 5.0625L1.20312 9.22321C1.1436 9.28274 1.07515 9.3125 0.997768 9.3125C0.920387 9.3125 0.851935 9.28274 0.792411 9.22321L0.345982 8.77679C0.286458 8.71726 0.256696 8.64881 0.256696 8.57143C0.256696 8.49405 0.286458 8.4256 0.345982 8.36607L3.85491 4.85714L0.345982 1.34821C0.286458 1.28869 0.256696 1.22024 0.256696 1.14286C0.256696 1.06548 0.286458 0.997024 0.345982 0.9375L0.792411 0.491072C0.851935 0.431547 0.920387 0.401786 0.997768 0.401786C1.07515 0.401786 1.1436 0.431547 1.20312 0.491072L5.36384 4.65179Z"
            fill="#1A64F0"
          />
        </svg>
      </button>
    </div>
  );
};

function StartLearning() {
  return (
    <>
      <section
        className="section relative z-10 py-10 overflow-hidden"
        id="section-main"
      >
        <div className="select-none absolute z-0 top-0 left-0 lg:-left-8">
          <Parallax speed={10}>
            <img
              src="/img/banners/main-start-learning-bgleft.png"
              width="2228"
              height="1221"
              loading="lazy"
              alt=""
              style={{ width: 742 }}
            />
          </Parallax>
        </div>

        <div className="select-none absolute z-0 top-0 right-0 hidden lg:block">
          <Parallax speed={-10}>
            <img
              src="/img/banners/main-start-learning-bgright.png"
              width="1959"
              height="1431"
              loading="lazy"
              alt=""
              style={{ width: 653 }}
            />
          </Parallax>
        </div>

        <div className="relative z-0 mb-4 lg:mb-0">
          <div className="container">
            <div className="lg:flex lg:flex-row-reverse">
              <div className="flex-shrink-0 lg:pr-12">
                <Atropos shadow={false} highlight={false} rotateTouch={false}>
                  <img
                    className="max-w-[220px] md:max-w-full mx-auto block"
                    src="/img/banners/main-start-learning-1.png"
                    width="930"
                    height="1000"
                    loading="lazy"
                    alt=""
                    style={{ width: 465 }}
                  />
                </Atropos>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute inset-0 z-15 lg:flex justify-start items-center">
          <div className="container">
            <div className="">
              <div className="text-center lg:text-left">
                <h1 className="font-bold text-xxl lg:text-5xl !leading-1.5 lg:mb-1 lg:max-w-[600px]">
                  We have just <span className="text-primary">the thing</span>{" "}
                  for you
                </h1>

                <p className="text-sm lg:text-lg text-neutral3 lg:max-w-[477px]">
                  Explore our in-depth resources and take the reigns on your
                  financial future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainListLogo />

      <TopicFilters />

      <section className="section py-10 lg:py-30 lg:pt-14">
        <div className="container">
          <header className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-2xl text-neutral1">Articles (24)</h2>

            <TheNavigation />
          </header>

          <AcademyPost.Grid posts={mockPosts} />
        </div>
      </section>

      <Banner1 />

      <section className="section py-10 lg:py-30">
        <div className="container">
          <header className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-2xl text-neutral1">Courses (24)</h2>

            <TheNavigation />
          </header>

          <AcademyPost.Grid posts={mockPosts} />
        </div>
      </section>
    </>
  );
}

export default StartLearning;
