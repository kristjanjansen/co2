import React, { SVGProps } from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={merge("fill-current", props.className || "")}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4687 2.51561C13.8593 2.90613 13.8593 3.5393 13.4687 3.92982L9.4064 7.99216L13.4688 12.0545C13.8593 12.445 13.8593 13.0782 13.4688 13.4687C13.0782 13.8593 12.4451 13.8593 12.0546 13.4687L7.99219 9.40637L3.92982 13.4687C3.5393 13.8593 2.90613 13.8593 2.51561 13.4687C2.12509 13.0782 2.12509 12.445 2.51561 12.0545L6.57797 7.99216L2.51564 3.92982C2.12511 3.5393 2.12511 2.90613 2.51564 2.51561C2.90616 2.12509 3.53933 2.12509 3.92985 2.51561L7.99219 6.57794L12.0545 2.51561C12.445 2.12509 13.0782 2.12509 13.4687 2.51561Z"
        fill="rgba(19, 38, 67, 1)"
      ></path>{" "}
    </svg>
  );
}
