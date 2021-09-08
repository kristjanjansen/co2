import React from "react";
import { Link } from "react-router-dom";

export function Tabs() {
  return (
    <div className="flex">
      <Link
        className="text-sm h-4 order-blue-500 px-2 font-semibold text-gray-600 no-underline cursor-pointer hover:text-gray-900 hover:underline"
        to="/"
      >
        Page1
      </Link>
      <Link
        className="text-sm h-4 order-blue-500 px-2 font-semibold text-gray-600 no-underline cursor-pointer hover:text-gray-900 hover:underline"
        to="/data"
      >
        Page2
      </Link>
      <Link
        className="text-sm h-4 order-blue-500 px-2 font-semibold text-gray-600 no-underline cursor-pointer hover:text-gray-900 hover:underline"
        to="/styles"
      >
        Page3
      </Link>
    </div>
  );
}
