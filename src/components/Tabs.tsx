import React from "react";
import { NavLink } from "react-router-dom";
import { mergeClassLists as merge } from "tailwind-classlist";
import { links } from "../utils";

export function Tabs() {
  return (
    <div className="flex border-gray-200 border-b">
      {[{ title: "Index", key: "" }, ...links].map(({ title, key }, i) => (
        <NavLink
          end
          className={({ isActive }) =>
            merge(
              "px-4 py-2 border-b-[3px] border-white text-sm font-semibold text-gray-600 hover:text-gray-900 hover:underline",
              isActive ? "border-blue-500 text-gray-900" : ""
            )
          }
          to={`/${key}`}
          key={i}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
}
