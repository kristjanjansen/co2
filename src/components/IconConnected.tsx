import React, { SVGProps } from "react";

export function IconConnected(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={["stroke-current", props.className || ""].join(" ")}
    >
      <path
        d="M23.25 13.5V6C23.25 5.60218 23.092 5.22064 22.8107 4.93934C22.5294 4.65804 22.1478 4.5 21.75 4.5H9.75C9.35218 4.5 8.97064 4.65804 8.68934 4.93934C8.40804 5.22064 8.25 5.60218 8.25 6V12"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M8.25 12V6H5.25C4.05653 6 2.91193 6.47411 2.06802 7.31802C1.22411 8.16193 0.75 9.30653 0.75 10.5V16.5C0.75 16.8978 0.908035 17.2794 1.18934 17.5607C1.47064 17.842 1.85218 18 2.25 18H3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M0.75 12H3.75C4.14782 12 4.52936 11.842 4.81066 11.5607C5.09196 11.2794 5.25 10.8978 5.25 10.5V6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M7.5 19.5C8.74264 19.5 9.75 18.4926 9.75 17.25C9.75 16.0074 8.74264 15 7.5 15C6.25736 15 5.25 16.0074 5.25 17.25C5.25 18.4926 6.25736 19.5 7.5 19.5Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M19.5 19.5C20.7426 19.5 21.75 18.4926 21.75 17.25C21.75 16.0074 20.7426 15 19.5 15C18.2574 15 17.25 16.0074 17.25 17.25C17.25 18.4926 18.2574 19.5 19.5 19.5Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 18H15"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}
