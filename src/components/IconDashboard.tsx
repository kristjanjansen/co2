import React, { SVGProps } from "react";

export function IconDashboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      className={["stroke-current", props.className || ""].join(" ")}
    >
      <g
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5.25.755a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM5.25 14.255a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM18.75.755a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM18.75 14.255a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"></path>
      </g>
    </svg>
  );
}

/*
import React, { SVGProps } from "react";

{...props}
className={["stroke-current", props.className || ""].join(" ")}

export default function (props: SVGProps<SVGSVGElement>) {
  return (

  );
}

*/
