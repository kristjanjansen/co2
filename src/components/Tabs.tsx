import React from "react";
import { NavLink } from "react-router-dom";
import { mergeClassLists as merge } from "tailwind-classlist";

export function Tabs() {
  const tabs = [
    { title: "Index", to: "/" },
    { title: "Data", to: "/data" },
    { title: "Styles", to: "/styles" },
    { title: "Embed", to: "/embed" },
  ];
  return (
    <div className="flex border-gray-200 border-b">
      {tabs.map(({ title, to }) => (
        <NavLink
          end
          className={({ isActive }) =>
            merge(
              "px-3 py-2 border-b-[3px] border-white text-sm font-semibold text-gray-600 hover:text-gray-900 hover:underline",
              isActive ? "border-blue-500 text-gray-900" : ""
            )
          }
          to={to}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
}
