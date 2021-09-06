import React, { SVGProps } from "react";

export default function (props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={["stroke-current", props.className || ""].join(" ")}
    >
      <path
        d="M12 23.25c6.2132 0 11.25-5.0368 11.25-11.25S18.2132.75 12 .75.75 5.7868.75 12 5.7868 23.25 12 23.25z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.289 22.921C7.767 20.689 6.75 16.633 6.75 12c0-4.63299 1.017-8.68899 2.539-10.92099M.75 12h22.5M2.48199 18H21.518M2.48199 6H21.518M14.711 1.07901C16.233 3.31101 17.25 7.36701 17.25 12c0 4.633-1.017 8.689-2.539 10.921"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}
