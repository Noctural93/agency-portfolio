import React from 'react';

const RightGradientCard = () => {
  return (
    <div className="w-full h-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 567 237"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M567 0H198.7A40 40 0 0 0 169 13.4L0 203h567z"
          fill="url(#a)"
        />
        <path
          d="M566.5.5H198.7c-11.2 0-22 4.8-29.5 13.2L1.2 202.5h565.3z"
          stroke="url(#b)"
          strokeOpacity="0.1"
        />
        <path fill="#000" d="M0 202h567v35H0z" />
        <defs>
          <linearGradient
            id="a"
            x1="236.5"
            y1="0"
            x2="270"
            y2="139"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#05F" stopOpacity="0.2" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="475"
            y1="-31"
            x2="0"
            y2="189.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#999" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#fff" />
            <stop offset="1" stopColor="#999" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default RightGradientCard;
