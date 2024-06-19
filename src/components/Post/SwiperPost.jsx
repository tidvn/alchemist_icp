"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperPostItem = ({
  post,
  index = 0,
  bookmarkIconFilled = false,
}) => {
  const { title, author, image, url = "#" } = post;

  return (
    <div className="regular-post text-white group">
      <a href={url} title={title} className="block pt-[70%] relative z-10">
        <div className="absolute inset-0 z-20 overflow-hidden rounded-lg">
          <img
            // data-aos="zoom-out"
            // data-aos-delay={100 * index}
            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition"
            src={image}
            alt=""
          />
        </div>
      </a>

      <div className="pt-4">
        <div className="flex items-center justify-between gap-2 mb-2">
          <p className="text-xs text-neutral4 truncate">
            <a href="#" className="text-primary hover:underline">
              {author}
            </a>
          </p>

          <button className="btn-animation p-0 m-0 border-0">
            {bookmarkIconFilled ? (
              <svg
                className="w-5 h-5"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22043 9.62004H15.7504C16.1804 9.62004 16.5304 9.26904 16.5304 8.83004C16.5304 8.39004 16.1804 8.04004 15.7504 8.04004H8.22043C7.79043 8.04004 7.44043 8.39004 7.44043 8.83004C7.44043 9.26904 7.79043 9.62004 8.22043 9.62004Z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9857 2H9.01434C5.90915 2 4 3.49929 4 6.43434V20.3309C4.00448 20.613 4.07042 20.8782 4.19263 21.1174L4.28627 21.2719L4.38431 21.3975C4.89545 21.9969 5.7112 22.1624 6.38442 21.8037L11.974 18.6635L17.5863 21.7971C17.8368 21.9291 18.0965 21.9957 18.3608 22C18.8038 22.0001 19.2179 21.8242 19.5232 21.5112C19.8285 21.1982 20 20.7736 20 20.3309V6.25765C20 3.43503 18.0482 2 14.9857 2ZM9.01434 3.44775H14.9857C17.35 3.44775 18.588 4.35788 18.588 6.25765V20.3309C18.588 20.3897 18.5652 20.446 18.5247 20.4875C18.4842 20.529 18.4293 20.5523 18.372 20.5523C18.3355 20.5517 18.2887 20.5397 18.2463 20.5173L12.6435 17.3894C12.225 17.1576 11.7233 17.1576 11.3068 17.3883L5.71962 20.5265C5.63485 20.5715 5.51373 20.5421 5.44919 20.4519L5.41172 20.3897C5.41894 20.4 5.41764 20.3876 5.4154 20.3662C5.414 20.3528 5.41223 20.3359 5.41195 20.3189L5.41205 6.43434C5.41205 4.39579 6.61925 3.44775 9.01434 3.44775ZM16.1139 9.0405C16.1139 8.64072 15.7978 8.31663 15.4079 8.31663H8.54042L8.44462 8.32324C8.10001 8.37117 7.8344 8.67404 7.8344 9.0405C7.8344 9.44029 8.1505 9.76438 8.54042 9.76438H15.4079L15.5037 9.75777C15.8483 9.70984 16.1139 9.40697 16.1139 9.0405Z"
                />
              </svg>
            )}
          </button>
        </div>

        <a
          href={url}
          title={title}
          className="text-lg text-white font-bold tracking-tight clamp hover:underline"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

const SwiperPost = ({ title, posts, itemProps = {} }) => {
  /** @type {import('swiper/react').SwiperClass} */
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative">
      <header className="flex items-center justify-between text-white mb-6 gap-4">
        <h2 className="font-bold text-2xl">{title}</h2>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => swiperInstance?.slidePrev()}
            className="bg-white h-[28px]"
            color="white"
            size="sm"
          >
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
          </Button>

          <Button
            onClick={() => swiperInstance?.slideNext()}
            className="bg-white h-[28px]"
            color="white"
            size="sm"
          >
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
          </Button>
        </div>
      </header>

      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          0: {
            spaceBetween: 16,
            slidesPerView: 1.5,
          },
          720: {
            spaceBetween: 16,
            slidesPerView: 2,
          },
          920: {
            spaceBetween: 24,
            slidesPerView: 4,
          },
        }}
      >
        {posts.map((item, key) => (
          <SwiperSlide key={key}>
            <SwiperPostItem {...itemProps} post={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SwiperPostItem.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

SwiperPost.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default SwiperPost;
