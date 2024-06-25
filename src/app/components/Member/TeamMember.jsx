import React from "react";
import PropTypes from "prop-types";
import HoverCard from "../Elements/HoverCard.jsx";

const HoverCardContent = ({ member }) => (
  <div>
    <h4 className="text-xl font-semibold">{member.name}</h4>

    {member.description && (
      <p className="text-sm text-neutral3 mt-2">{member.description}</p>
    )}
  </div>
);

const Member = ({ member, index = 0, isOnDark = false }) => {
  return (
    <div className="teamMember">
      <div className="teamMember__img bg-gray-100 aspect-square relative overflow-hidden rounded-t-2xl group">
        <HoverCard content={<HoverCardContent member={member} />}>
          <img
            data-aos="zoom-out"
            data-aos-delay={100 * index}
            className="group-hover:scale-105 transition absolute inset-0 rounded-t-2xl"
            src={member.avatar}
            alt={member.name}
            loading="lazy"
          />
        </HoverCard>
      </div>

      <div
        className={`teamMember__inner px-2 py-6 rounded-b-2xl text-center ${
          isOnDark ? "bg-transparent" : "bg-blueLight"
        }`}
      >
        <h5
          className={`text-2xl font-semibold tracking-tight ${
            isOnDark ? "text-white" : " text-neutral1"
          }`}
        >
          {member.name}
        </h5>

        <p
          className={`mt-3 text-base font-normal ${
            isOnDark ? "text-white" : "text-primary text-gradient-2"
          }`}
        >
          {member.role}
        </p>

        <div className="mt-6 flex items-center justify-center gap-4 lg:gap-8">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-8 h-8 transition duration-300 hover:scale-125"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_50_594)">
                <path
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="#007AB9"
                />
                <path
                  d="M25.5594 17.2878V23.8842H21.7349V17.7299C21.7349 16.1846 21.1827 15.1293 19.798 15.1293C18.7413 15.1293 18.1135 15.8397 17.8363 16.5277C17.7356 16.7735 17.7097 17.1149 17.7097 17.4598V23.8839H13.8849C13.8849 23.8839 13.9363 13.4605 13.8849 12.3815H17.71V14.0115C17.7023 14.0243 17.6914 14.0369 17.6846 14.0491H17.71V14.0115C18.2182 13.2294 19.1246 12.1114 21.1568 12.1114C23.6729 12.1114 25.5594 13.7554 25.5594 17.2878ZM9.88394 6.83691C8.57566 6.83691 7.71973 7.6957 7.71973 8.82401C7.71973 9.92836 8.55084 10.812 9.83374 10.812H9.85856C11.1925 10.812 12.0219 9.92836 12.0219 8.82401C11.9965 7.6957 11.1925 6.83691 9.88394 6.83691ZM7.94704 23.8842H11.7704V12.3815H7.94704V23.8842Z"
                  fill="#F1F2F2"
                />
              </g>
              <defs>
                <clipPath id="clip0_50_594">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a
            href={member.twitter}
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <span className="sr-only">Twitter</span>

            <svg
              className="w-8 h-8 transition duration-300 hover:scale-125"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_50_599)">
                <circle cx="15.5" cy="15.5" r="9.5" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.362 12.737C22.368 12.878 22.372 13.019 22.372 13.162C22.372 17.499 19.07 22.501 13.032 22.501C11.178 22.501 9.453 21.958 8 21.027C8.257 21.057 8.518 21.072 8.783 21.072C10.321 21.072 11.736 20.548 12.86 19.667C11.423 19.641 10.211 18.692 9.793 17.388C9.994 17.426 10.199 17.446 10.411 17.446C10.71 17.446 11 17.406 11.276 17.331C9.774 17.03 8.643 15.703 8.643 14.113V14.071C9.085 14.317 9.592 14.465 10.13 14.482C9.249 13.893 8.669 12.888 8.669 11.75C8.669 11.148 8.831 10.584 9.114 10.099C10.733 12.085 13.152 13.392 15.88 13.529C15.824 13.289 15.795 13.038 15.795 12.781C15.795 10.968 17.265 9.498 19.077 9.498C20.022 9.498 20.875 9.897 21.473 10.535C22.221 10.388 22.924 10.115 23.558 9.739C23.313 10.505 22.792 11.148 22.115 11.555C22.779 11.475 23.411 11.299 24 11.038C23.56 11.696 23.003 12.274 22.362 12.737M16 0C7.163 0 0 7.163 0 16C0 24.836 7.163 32 16 32C24.837 32 32 24.836 32 16C32 7.163 24.837 0 16 0"
                  fill="#41A1F2"
                />
              </g>
              <defs>
                <clipPath id="clip0_50_599">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a
            href={member.telegram}
            target="_blank"
            rel="noreferrer"
            title="Telegram"
          >
            <span className="sr-only">Telegram</span>
            <svg
              className="w-9 h-9 transition duration-300 hover:scale-125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#29b6f6"
                d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
              />
              <path
                fill="#fff"
                d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
              />
              <path
                fill="#b0bec5"
                d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
              />
              <path
                fill="#cfd8dc"
                d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

Member.propTypes = {
  index: PropTypes.number,
  isOnDark: PropTypes.bool,
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    telegram: PropTypes.string,
  }).isRequired,
};

export default Member;
