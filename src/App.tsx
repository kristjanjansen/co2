import React from "react";
import { ReactComponent as Logo } from "./components/logo.svg";
import { ReactComponent as Dashboard } from "./components/dashboard.svg";
import { ReactComponent as Transports } from "./components/transports.svg";
import { ReactComponent as Network } from "./components/network.svg";
import { ReactComponent as Places } from "./components/places.svg";
import { ReactComponent as Connected } from "./components/connected.svg";
import { ReactComponent as Settings } from "./components/settings.svg";
import { ReactComponent as Leaf } from "./components/Leaf.svg";

import { SVGProps } from "react";
export function MdiLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default function App() {
  return (
    <div className="grid grid-cols-[auto,1fr] min-h-screen">
      <div className="w-16 bg-gradient-to-b from-sky-500 to-sky-600 grid justify-center content-start gap-4 py-8">
        <Logo className="w-7 justify-self-center" />
        <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
          <Dashboard className="stroke-current w-6 text-white" />
        </div>
        <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
          <Transports className="stroke-current w-6 text-white" />
        </div>
        <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
          <Network className="stroke-current w-6 text-white" />
        </div>
        <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
          <Places className="stroke-current w-6 text-white" />
        </div>
        <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
          <Connected className="stroke-current w-6 text-white" />
        </div>
        <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
          <Settings className="stroke-current w-6 text-white" />
        </div>
        <div className="group w-11 h-11 bg-white rounded-[42%] grid place-items-center transition-colors">
          <Leaf className="stroke-current w-6 text-blue-500 group-hover:text-blue-600" />
        </div>
      </div>
      <div className="p-8">
        <h1 className="p-0 m-0 text-6xl font-light font-title">
          Real-time visibility
        </h1>
        <br />
        <p className="text-xl leading-8">
          When’s the next update? Right now. Know the location, ETA, and status
          of your shipments in real-time.&nbsp;Sixfold’s powerful AI
          capabilities predict delays and proactively alert you to problems by
          aggregating live data from supply chains across Europe on our powerful
          network.
        </p>
        <br />
        <p>
          <a
            href=""
            className="bg-blue-500 hover:bg-blue-600  transition-colors  text-white inline-flex relative flex-shrink-0 justify-center items-center px-7 h-16 text-base text-left no-underline cursor-pointer box-border"
          >
            Request a demo
          </a>
        </p>
        <br />
        <h3 className="flex items-center font-sans text-xl font-semibold text-sky-900">
          Higher customer satisfaction
        </h3>
        <br />
        <p className="leading-6">
          Keep your customers informed where their order is and when it arrives.
          This will drive customer satisfaction and helps businesses to make
          customers happy.
        </p>
        <br />
        <a
          href=""
          className="font-title text-2xl font-light leading-8 no-underline cursor-pointer hover:text-blue-500"
        >
          What’s the current state of supply chain sustainability?
        </a>
        <br />
        <div className="font-title text-2xl leading-8 text-gray-900">
          Create places from the addresses in your transport data.
        </div>
        <br />
        <div className="text-sm text-gray-900">
          Places help to improve real-time visibility and tracking accuracy of
          transports at your warehouses and customer locations.
        </div>
        <br />
        <div className="text-sm text-gray-600">
          Only admins can create places.
        </div>
        <br />
        <button className="round inline-flex relative justify-center items-center py-2 px-4 text-sm font-medium text-center text-white align-middle whitespace-pre bg-blue-500 hover:bg-blue-600 transition-colors rounded border border-transparent border-solid cursor-pointer">
          Create a saved filter
        </button>
        <p className="py-4 px-3 my-4 mx-0 text-sm leading-6 text-blue-900 bg-orange-100 rounded border border-gray-300 border-solid shadow-sm">
          This carrier has set up its GPS (telematics provider) and is ready to
          send visibility data to you. Once they have allocated their vehicle to
          a transport, Sixfold will mark this carrier as fully connected.
        </p>
        <br />
        <div className="inline-block rounded-full py-1 px-2 text-xs font-semibold leading-4 text-green-700 bg-green-100 select-none shadow whitespace-no-wrap">
          Ready for tracking
        </div>
        <p />
        <br />
        <button
          data-test-id="filterApplyButton"
          className="inline-flex relative justify-center items-center py-1 px-2 m-0 text-sm font-medium leading-4 text-center text-white align-middle whitespace-pre bg-green-600 hover:bg-green-700 transition-colors rounded  cursor-pointer"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
