import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "flowbite-react";

export const CarouselPostItem = ({ post, isFeatured = false }) => {
  post.image = "https://picsum.photos/1200";

  return (
    <div className="relative z-20 h-full w-full flex flex-col justify-end pb-10 lg:pb-16">
      {post.image && (
        <div className="absolute z-0 inset-0">
          <img
            className="w-full h-full object-cover"
            src={post.image}
            alt={post.title}
            loading="lazy"
          />
        </div>
      )}

      <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-black" />

      <div className="relative z-30 flex flex-col py-6 lg:py-12 px-8 justify-center items-center">
        <h3 className="font-bold text-center text-lg lg:text-[2rem] leading-1.5 mb-6 lg:mb-8">
          CoinFlex CEO says withdrawals unlikely to resume on Thursday
        </h3>

        <Button pill href="#" className="bg-[#1a64f0]">
          Read Now
        </Button>
      </div>
    </div>
  );
};

const CarouselPosts = ({ posts = [] }) => {
  return (
    <div className="carousel-posts relative z-10 pt-[95%] -mx-4 lg:mx-0 overflow-hidden bg-gradient-1 text-white md:rounded-xl shadow-1">
      <div className="absolute z-20 inset-0">
        <Swiper
          modules={[Pagination]}
          height="100%"
          className="w-full h-full"
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {posts.map((post, index) => (
            <SwiperSlide className="h-full" key={index}>
              <CarouselPostItem post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

CarouselPosts.propTypes = {
  posts: PropTypes.array,
};

CarouselPostItem.prototype = {
  post: PropTypes.object,
  isFeatured: PropTypes.bool,
};

export default CarouselPosts;
