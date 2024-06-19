import { Button } from "flowbite-react";

const MiniPost = ({ post, isFeatured = true }) => {
  return (
    <div className="mini-post">
      {isFeatured ? (
        <Button size="xs" className="rounded mb-2">
          Hot Topic
        </Button>
      ) : null}

      <div>
        <a
          href="#"
          className="text-sm lg:text-lg font-semibold tracking-tight clamp !leading-1.5 hover:underline"
        >
          {post.title}
        </a>

        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-xs text-neutral4 truncate">{post.subTitle}</p>

          <button className="btn-animation p-0 border-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4882 1.66699H7.51211C4.92445 1.66699 3.3335 2.9164 3.3335 5.36228V16.9428C3.33723 17.1778 3.39218 17.3988 3.49402 17.5981L3.57206 17.7269L3.65375 17.8316C4.0797 18.3311 4.7595 18.469 5.32051 18.1701L9.97849 15.5533L14.6554 18.1646C14.8641 18.2746 15.0806 18.3301 15.3008 18.3337C15.67 18.3337 16.015 18.1872 16.2695 17.9263C16.5239 17.6655 16.6668 17.3117 16.6668 16.9428V5.21504C16.6668 2.86285 15.0403 1.66699 12.4882 1.66699ZM7.51211 2.87345H12.4882C14.4585 2.87345 15.4901 3.63189 15.4901 5.21504V16.9428C15.4901 16.9917 15.4712 17.0386 15.4374 17.0732C15.4037 17.1078 15.3579 17.1273 15.3102 17.1273C15.2798 17.1267 15.2407 17.1167 15.2054 17.0981L10.5364 14.4915C10.1877 14.2983 9.76955 14.2983 9.42252 14.4905L4.76651 17.1058C4.69587 17.1432 4.59494 17.1187 4.54115 17.0436L4.50993 16.9918C4.51595 17.0003 4.51486 16.99 4.51299 16.9721C4.51183 16.961 4.51035 16.9469 4.51012 16.9327L4.5102 5.36228C4.5102 3.66348 5.51621 2.87345 7.51211 2.87345ZM13.4284 7.53408C13.4284 7.20093 13.165 6.93085 12.8401 6.93085H7.11718L7.03735 6.93636C6.75017 6.9763 6.52883 7.22869 6.52883 7.53408C6.52883 7.86723 6.79224 8.13731 7.11718 8.13731H12.8401L12.9199 8.1318C13.2071 8.09186 13.4284 7.83947 13.4284 7.53408Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const MiniPostWithImage = ({ post }) => {
  return (
    <div className="mini-post has-image">
      <div className="flex gap-[10px]">
        <div className="flex-shrink-0 w-[65px]">
          {post.thumbnail ? (
            <img
              className="rounded w-[65px] h-[65px] object-cover overflow-hidden bg-gray-200"
              width="65"
              height="65"
              src={post.thumbnail}
              alt={post.title}
              loading="lazy"
            />
          ) : (
            <span className="aspect-squared block rounded w-[65px] h-[65px] object-cover overflow-hidden bg-gray-200" />
          )}
        </div>

        <div className="flex-grow">
          <a
            href="#"
            className="text-sm font-bold tracking-tight clamp !leading-1.5 hover:underline"
          >
            {post.title}
          </a>

          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-xs text-neutral3 truncate">{post.subTitle}</p>

            <button className="p-0 border-0 btn-animation">
              <svg
                className="w-4 h-4"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4882 1.66699H7.51211C4.92445 1.66699 3.3335 2.9164 3.3335 5.36228V16.9428C3.33723 17.1778 3.39218 17.3988 3.49402 17.5981L3.57206 17.7269L3.65375 17.8316C4.0797 18.3311 4.7595 18.469 5.32051 18.1701L9.97849 15.5533L14.6554 18.1646C14.8641 18.2746 15.0806 18.3301 15.3008 18.3337C15.67 18.3337 16.015 18.1872 16.2695 17.9263C16.5239 17.6655 16.6668 17.3117 16.6668 16.9428V5.21504C16.6668 2.86285 15.0403 1.66699 12.4882 1.66699ZM7.51211 2.87345H12.4882C14.4585 2.87345 15.4901 3.63189 15.4901 5.21504V16.9428C15.4901 16.9917 15.4712 17.0386 15.4374 17.0732C15.4037 17.1078 15.3579 17.1273 15.3102 17.1273C15.2798 17.1267 15.2407 17.1167 15.2054 17.0981L10.5364 14.4915C10.1877 14.2983 9.76955 14.2983 9.42252 14.4905L4.76651 17.1058C4.69587 17.1432 4.59494 17.1187 4.54115 17.0436L4.50993 16.9918C4.51595 17.0003 4.51486 16.99 4.51299 16.9721C4.51183 16.961 4.51035 16.9469 4.51012 16.9327L4.5102 5.36228C4.5102 3.66348 5.51621 2.87345 7.51211 2.87345ZM13.4284 7.53408C13.4284 7.20093 13.165 6.93085 12.8401 6.93085H7.11718L7.03735 6.93636C6.75017 6.9763 6.52883 7.22869 6.52883 7.53408C6.52883 7.86723 6.79224 8.13731 7.11718 8.13731H12.8401L12.9199 8.1318C13.2071 8.09186 13.4284 7.83947 13.4284 7.53408Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MiniPostWithImage2 = ({ post }) => {
  return (
    <div className="mini-post has-image">
      <div className="flex gap-4">
        <a href="#" className="flex-shrink-0 w-[84px] ">
          {post.image ? (
            <img
              className="rounded w-[84px] h-full md:h-[75px] object-cover overflow-hidden bg-gray-200"
              src={post.image}
              alt={post.title}
              loading="lazy"
            />
          ) : (
            <span className="aspect-squared block rounded w-[80px] h-[75px] object-cover overflow-hidden bg-gray-200" />
          )}
        </a>

        <div className="flex-grow">
          <a
            href="#"
            className="text-base font-semibold tracking-tight clamp !leading-1.5 hover:underline"
          >
            {post.title}
          </a>

          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="flex flex-wrap text-xs text-neutral4 truncate">
              By{" "}
              <a href="#" className="text-primary text-xs hover:underline">
                {post.name}
              </a>{" "}
              - {post.time}
            </p>

            <button className="btn-animation p-0 border-0">
              <svg
                className="w-5 h-5"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4882 1.66699H7.51211C4.92445 1.66699 3.3335 2.9164 3.3335 5.36228V16.9428C3.33723 17.1778 3.39218 17.3988 3.49402 17.5981L3.57206 17.7269L3.65375 17.8316C4.0797 18.3311 4.7595 18.469 5.32051 18.1701L9.97849 15.5533L14.6554 18.1646C14.8641 18.2746 15.0806 18.3301 15.3008 18.3337C15.67 18.3337 16.015 18.1872 16.2695 17.9263C16.5239 17.6655 16.6668 17.3117 16.6668 16.9428V5.21504C16.6668 2.86285 15.0403 1.66699 12.4882 1.66699ZM7.51211 2.87345H12.4882C14.4585 2.87345 15.4901 3.63189 15.4901 5.21504V16.9428C15.4901 16.9917 15.4712 17.0386 15.4374 17.0732C15.4037 17.1078 15.3579 17.1273 15.3102 17.1273C15.2798 17.1267 15.2407 17.1167 15.2054 17.0981L10.5364 14.4915C10.1877 14.2983 9.76955 14.2983 9.42252 14.4905L4.76651 17.1058C4.69587 17.1432 4.59494 17.1187 4.54115 17.0436L4.50993 16.9918C4.51595 17.0003 4.51486 16.99 4.51299 16.9721C4.51183 16.961 4.51035 16.9469 4.51012 16.9327L4.5102 5.36228C4.5102 3.66348 5.51621 2.87345 7.51211 2.87345ZM13.4284 7.53408C13.4284 7.20093 13.165 6.93085 12.8401 6.93085H7.11718L7.03735 6.93636C6.75017 6.9763 6.52883 7.22869 6.52883 7.53408C6.52883 7.86723 6.79224 8.13731 7.11718 8.13731H12.8401L12.9199 8.1318C13.2071 8.09186 13.4284 7.83947 13.4284 7.53408Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MiniPost.WithImage = MiniPostWithImage;
MiniPost.WithImage2 = MiniPostWithImage2;

export default MiniPost;
