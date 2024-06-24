"use client";
import React from "react";
import { Button, Tabs } from "flowbite-react";
import { Parallax } from "react-scroll-parallax";
import Atropos from "atropos/react";

import RocketIcon from "../../components/Icons/RocketIcon";
// import MoreLink from "../../../components/Elements/MoreLink";
import MiniPost from "../../components/Post/MiniPost";
import RegularPost from "../../components/Post/RegularPost";
import CarouselPosts from "../../components/Post/CarouselPosts";
import OverlayPost from "../../components/Post/OverlayPost";
import SwiperPost from "../../components/Post/SwiperPost";
import TopicSelection from "../../components/Elements/TopicSelection";
import LevelSelection from "../../components/Elements/LevelSelection";

import topics from "@/app/mocks/topics.json";
import listTopics from "@/app/mocks/list-topics.json";
import mockNews from "@/app/mocks/news.json";
import essentials from "@/app/mocks/essentials.json";
import mockNewsBlockchain from "@/app/mocks/news-blockchain.json";
import mockNewsMore from "@/app/mocks/news-more.json";

export default function Academy() {
  return (
    <>
      <section
        className="section relative z-10 py-12 overflow-hidden"
        id="section-main"
      >
        <div className="absolute z-0 top-0 left-0">
          <Parallax speed={10}>
            <img
              src="/img/banners/main-academy-bgleft.png"
              width="1050"
              height="1135"
              loading="lazy"
              alt=""
              style={{ width: 525 }}
            />
          </Parallax>
        </div>

        <div className="absolute z-0 top-0 right-0">
          <Parallax speed={-10}>
            <img
              src="/img/banners/main-academy-bgright.png"
              width="726"
              height="739"
              loading="lazy"
              alt=""
              style={{ width: 363 }}
            />
          </Parallax>
        </div>

        <div className="relative z-0 mb-4 lg:mb-0">
          <div className="lg:flex lg:flex-row-reverse">
            <div className="flex-shrink-0">
              <Atropos shadow={false} highlight={false} rotateTouch={false}>
                <img
                  src="/img/banners/main-academy-1.png"
                  width="1633"
                  height="1077"
                  loading="lazy"
                  alt=""
                  style={{ width: 816 }}
                />
              </Atropos>
            </div>
          </div>
        </div>

        <div className="lg:absolute inset-0 z-15 lg:flex justify-start items-center">
          <div className="container">
            <div className="">
              <div className="text-center lg:text-left">
                <h1 className="font-bold text-xxl lg:text-5xl !leading-1.5 lg:mb-1">
                  <span className="text-neutral1">The Alchemist</span>
                  <br />
                  <span className="text-gradient-1">Academy</span>
                </h1>

                <p className="text-sm lg:text-lg text-neutral3 mb-10 lg:mb-20">
                  Your one-stop library for in-depth crypto and <br />{" "}
                  blockchain resources
                </p>

                <Button pill size="lg">
                  <span className="button__bg"></span>
                  <RocketIcon className="mr-3" />
                  Find Out More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-7 lg:py-[120px] bg-gradient-1 text-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-8">
            <div className="lg:col-span-2 box-shadow-1">
              <ul className="flex flex-col gap-8">
                {topics.map((item, index) => (
                  <li key={index}>
                    <MiniPost post={item} isFeatured={true} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <div className="h-full">
                <CarouselPosts posts={topics} />
              </div>
            </div>
            <div className="lg:col-span-2">
              <Tabs
                aria-label="Tabs with underline"
                // @ts-ignore
                // style="light"
                className="gap-0"
              >
                <Tabs.Item active title="Featured" className="p-0">
                  <ul className="flex flex-col gap-6 pt-4">
                    {topics.map((item, index) => (
                      <li key={index}>
                        <MiniPost.WithImage post={item} />
                      </li>
                    ))}
                  </ul>
                </Tabs.Item>

                <Tabs.Item title="Latest">
                  <ul className="flex flex-col gap-6 pt-4">
                    {topics.map((item, index) => (
                      <li key={index}>
                        <MiniPost.WithImage post={item} />
                      </li>
                    ))}
                  </ul>
                </Tabs.Item>

                <Tabs.Item title="Popular">
                  <ul className="flex flex-col gap-6 pt-4">
                    {topics.map((item, index) => (
                      <li key={index}>
                        <MiniPost.WithImage post={item} />
                      </li>
                    ))}
                  </ul>
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-7 lg:py-[120px]">
        <div className="container">
          <header className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-2xl text-neutral1">
              Editor&lsquo;s Picks
            </h2>

            {/* <MoreLink /> */}
          </header>

          <RegularPost.Grid posts={mockNews} />
        </div>
      </section>

      <section className="section bg-[url('/img/academy-banner-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="py-[76px] md:py-[50px] lg:py-[76px]">
            <div className="flex items-center justify-center md:justify-start text-xs text-neutral5 md:text-base text-center md:text-left">
              <p className="w-[12px] h-[12px] rounded-full bg-primary" />
              <p className="ml-2">Hot</p>
            </div>

            <h2 className="font-bold text-lg text-white leading-1.5 px-3 md:px-0 mb-2 md:text-[32px] text-center md:text-left">
              Feeling overwhelmed by the vastness of knowledge?
            </h2>

            <p className="text-xs leading-5 text-neutral5 mb-8 md:text-base text-center md:text-left">
              Don&lsquo;t worry. We are here to assist you in navigating the
              exciting realm of cryptocurrency with confidence.
            </p>

            <div className="text-center md:text-left">
              <Button pill>
                <span className="button__bg"></span>
                Start learning
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-7 lg:py-[120px]">
        <div className="container">
          <div>
            <h3 className="font-bold text-2xl leading-1.5 mb-4">Topics:</h3>

            <TopicSelection topics={listTopics} />
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-2xl leading-1.5 mb-4">Levels:</h3>

            <LevelSelection />
          </div>

          <div className="mt-10">
            <div className="text-center mt-10">
              <Button pill className="group">
                See more relevant content
                <svg
                  className="ml-2 mt-2 transition group-hover:translate-x-2"
                  width="17"
                  height="8"
                  viewBox="0 0 17 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464467C12.9763 0.269205 12.6597 0.269205 12.4645 0.464467C12.2692 0.659729 12.2692 0.976312 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53554L16.3536 4.35355ZM-4.37114e-08 4.5L16 4.5L16 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-7 lg:py-[120px] bg-gradient-1 text-white">
        <div className="container">
          <SwiperPost posts={mockNews} title="Alchemist Trading 101" />
        </div>
      </section>

      <section className="section py-7 lg:py-[120px]">
        <div className="container">
          <header className="flex justify-between items-center mb-6">
            <p className="font-bold text-2xl text-neutral1">Blockchain</p>
            {/* <MoreLink /> */}
          </header>

          <RegularPost.Grid posts={mockNewsBlockchain} />
        </div>
      </section>

      <section className="section py-7 lg:py-[120px] bg-gradient-1 text-white">
        <div className="container">
          <header className="">
            <h2 className="font-bold text-2xl mb-6">Essentials</h2>
          </header>

          <div className="grid grid-cols-1 gap-10 lg:gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <OverlayPost post={essentials[0]} />
            </div>

            <ul className="flex flex-col gap-4 divide-y divide-neutral3/30 -mt-4">
              {essentials.slice(1).map((item, index) => (
                <li key={index} className="pt-4">
                  <MiniPost.WithImage2 post={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section py-7 lg:py-[120px]">
        <div className="container">
          <header className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-2xl text-neutral1">Maybe you like</h2>
            {/* <MoreLink /> */}
          </header>

          <RegularPost.Grid posts={mockNewsMore} />
        </div>
      </section>
    </>
  );
}
