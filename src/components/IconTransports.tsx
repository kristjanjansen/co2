import React, { SVGProps } from "react";

export function IconTransports(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={["stroke-current", props.className || ""].join(" ")}
    >
      <path
        d="M12 0.75L0.75 5.25L12 9.75L23.25 5.25L12 0.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M0.75 5.25V18.75L12 23.25V9.75L0.75 5.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M23.25 5.25V18.75L12 23.25V9.75L23.25 5.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18.187 7.27499L6.93701 2.77499"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M20.625 16.5L18.75 17.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
