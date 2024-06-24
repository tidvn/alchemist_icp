const OverlayPost = ({ post }) => {
  const { image, title, name, time } = post;

  return (
    <div className="relative z-10 pt-[61%] rounded-lg overflow-hidden">
      <div className="absolute z-0 inset-0 bg-gradient-3">
        <img
          src={image}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>

      <div className="absolute z-10 inset-0 bg-gradient-3" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end">
        <div className="flex gap-4 items-center justify-between px-4 py-8 lg:p-10">
          <div className="grow">
            <a
              href="#"
              className="text-white text-base lg:text-xxl font-semibold leading-1.5 mb-2 clamp hover:underline"
            >
              {title}
            </a>

            <p className="text-white text-xs text-neutral4 truncate">
              By{" "}
              <a href="#" className="text-primary hover:underline">
                {name}
              </a>{" "}
              - {time}
            </p>
          </div>

          <div className="self-end">
            <button className="btn-animation p-0 border-0">
              <svg
                className="w-5 h-5 lg:w-6 lg:w-6"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.981 2.66699H12.0193C7.87902 2.66699 5.3335 4.66605 5.3335 8.57945V27.1082C5.33947 27.4843 5.42738 27.8379 5.59033 28.1568L5.7152 28.3629L5.84591 28.5304C6.52742 29.3295 7.6151 29.5502 8.51272 29.0719L15.9655 24.885L23.4486 29.0631C23.7825 29.2391 24.1289 29.3279 24.4812 29.3337C25.0719 29.3338 25.624 29.0993 26.0311 28.6819C26.4381 28.2646 26.6668 27.6985 26.6668 27.1082V8.34386C26.6668 4.58036 24.0644 2.66699 19.981 2.66699ZM12.0193 4.59732H19.981C23.1335 4.59732 24.7841 5.81084 24.7841 8.34386V27.1082C24.7841 27.1865 24.7538 27.2616 24.6998 27.317C24.6458 27.3724 24.5725 27.4035 24.4962 27.4035C24.4475 27.4025 24.3851 27.3865 24.3285 27.3568L16.8582 23.1862C16.3002 22.8771 15.6312 22.8771 15.0759 23.1847L7.62632 27.369C7.5133 27.429 7.3518 27.3898 7.26575 27.2695L7.2158 27.1866C7.22542 27.2003 7.22368 27.1837 7.22069 27.1552C7.21882 27.1374 7.21647 27.1148 7.2161 27.0922L7.21623 8.57945C7.21623 5.86137 8.82583 4.59732 12.0193 4.59732ZM21.4854 12.0543C21.4854 11.5213 21.0639 11.0892 20.544 11.0892H11.3874L11.2597 11.098C10.8002 11.1619 10.446 11.5657 10.446 12.0543C10.446 12.5874 10.8675 13.0195 11.3874 13.0195H20.544L20.6717 13.0107C21.1312 12.9468 21.4854 12.543 21.4854 12.0543Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayPost;
