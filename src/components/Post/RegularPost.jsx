import React from "react";
import PropTypes from "prop-types";

const RegularPost = ({ post, index = 0, bookmarkIconFilled = false }) => {
  const { title, author, image, url = "#", time } = post;

  return (
    <div className="regular-post group">
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
        <a
          href={url}
          title={title}
          className="mb-2 text-lg text-neutral1 font-bold tracking-tight clamp hover:underline"
        >
          {title}
        </a>

        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-neutral3 truncate">
            By{" "}
            <a href="#" className="text-secondary2 hover:underline">
              {author}
            </a>{" "}
            - {time}
          </p>

          <button className="btn-animation p-0 m-0 border-0 text-primary">
            {bookmarkIconFilled ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22043 9.62004H15.7504C16.1804 9.62004 16.5304 9.26904 16.5304 8.83004C16.5304 8.39004 16.1804 8.04004 15.7504 8.04004H8.22043C7.79043 8.04004 7.44043 8.39004 7.44043 8.83004C7.44043 9.26904 7.79043 9.62004 8.22043 9.62004Z"
                  fill="#1A64F0"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
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
      </div>
    </div>
  );
};

const RegularPostGrid = ({ posts, itemProps = {} }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6 lg:grid-cols-4">
      {posts.map((item, key) => (
        <li key={key}>
          <RegularPost {...itemProps} post={item} />
        </li>
      ))}
    </ul>
  );
};

RegularPost.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

RegularPostGrid.propTypes = {
  posts: PropTypes.array.isRequired,
};

RegularPost.Grid = RegularPostGrid;

export default RegularPost;
