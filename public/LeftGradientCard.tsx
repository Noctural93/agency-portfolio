import React from 'react';

const LeftGradientCard = () => {
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
          d="M0 0H368.268C379.681 0 390.549 4.87456 398.139 13.3969L567 203H0V0Z"
          fill="url(#paint0_linear_761_2)"
        />
        <path
          d="M0.5 0.5H368.268C379.538 0.5 390.271 5.31363 397.766 13.7294L565.885 202.5H0.5V0.5Z"
          stroke="url(#paint1_linear_761_2)"
          strokeOpacity="0.1"
        />
        <rect y="202" width="567" height="35" fill="black" />
        <defs>
          <linearGradient
            id="paint0_linear_761_2"
            x1="330.5"
            y1="0"
            x2="297"
            y2="139"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0055FF" stopOpacity="0.2" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_761_2"
            x1="92"
            y1="-31"
            x2="567"
            y2="189.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#999999" stopOpacity="0.7" />
            <stop offset="0.506458" stopColor="white" />
            <stop offset="1" stopColor="#999999" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LeftGradientCard;
