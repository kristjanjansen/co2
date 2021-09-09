import React, { ReactNode } from "react";

export function Sidebar(props: { children: ReactNode }) {
  return (
    <div className="fixed top-0 right-0 w-1/3 bottom-0 bg-white border-l border-gray-200">
      {props.children}
    </div>
  );
}
