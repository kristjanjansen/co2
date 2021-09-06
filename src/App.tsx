import React from "react";

import { IconConnected } from "./components/IconConnected";
import { IconDashboard } from "./components/IconDashboard";
import { IconLeaf } from "./components/IconLeaf";
import { IconNetwork } from "./components/IconNetwork";
import { IconPlaces } from "./components/IconPlaces";
import { IconSettings } from "./components/IconSettings";
import { IconTransports } from "./components/IconTransports";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <div className="grid grid-cols-[auto,1fr] min-h-screen">
      <div className="w-16">
        <div className="h-screen sticky top-0 bg-gradient-to-b from-sky-500 to-sky-600 grid justify-center content-start gap-4 py-8">
          <Logo className="w-7 justify-self-center" />
          <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
            <IconDashboard className="w-6 text-white" />
          </div>
          <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
            <IconTransports className=" w-6 text-white" />
          </div>
          <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
            <IconNetwork className=" w-6 text-white" />
          </div>
          <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
            <IconPlaces className=" w-6 text-white" />
          </div>
          <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
            <IconConnected className=" w-6 text-white" />
          </div>
          <div className="w-11 h-11 hover:bg-sky-400 rounded-[42%] grid place-items-center transition-colors">
            <IconSettings className=" w-6 text-white" />
          </div>
          <div className="group w-11 h-11 bg-white rounded-[42%] grid place-items-center transition-colors">
            <IconLeaf className=" w-6 text-green-500 group-hover:text-blue-600" />
          </div>
        </div>
      </div>
      <div className="p-8 grid gap-y-6">
        <h1 className="text-6xl font-light font-title">Real-time visibility</h1>
        <p className="text-xl leading-8">
          When’s the next update? Right now. Know the location, ETA, and status
          of your shipments in real-time.&nbsp;Sixfold’s powerful AI
          capabilities predict delays and proactively alert you to problems by
          aggregating live data from supply chains across Europe on our powerful
          network.
        </p>
        <p>
          <a
            href=""
            className="bg-blue-500 hover:bg-blue-600  transition-colors  text-white inline-flex relative flex-shrink-0 justify-center items-center px-7 h-16 text-base text-left no-underline cursor-pointer box-border"
          >
            Request a demo
          </a>
        </p>
        <h3 className="flex items-center font-sans text-xl font-semibold text-sky-900">
          Higher customer satisfaction
        </h3>
        <p className="leading-6">
          Keep your customers informed where their order is and when it arrives.
          This will drive customer satisfaction and helps businesses to make
          customers happy.
        </p>
        <a
          href=""
          className="font-title text-2xl font-light leading-8 no-underline cursor-pointer hover:text-blue-500"
        >
          What’s the current state of supply chain sustainability?
        </a>
        <div className="font-title text-2xl leading-8 text-gray-900">
          Create places from the addresses in your transport data.
        </div>
        <div className="text-sm text-gray-900">
          Places help to improve real-time visibility and tracking accuracy of
          transports at your warehouses and customer locations.
        </div>
        <div className="text-sm text-gray-600">
          Only admins can create places.
        </div>
        <div>
          <button className="round inline-flex relative justify-center items-center py-2 px-4 text-sm font-medium text-center text-white align-middle whitespace-pre bg-blue-500 hover:bg-blue-600 transition-colors rounded border border-transparent border-solid cursor-pointer">
            Create a saved filter
          </button>
        </div>
        <p className="py-4 px-3 my-4 mx-0 text-sm leading-6 text-blue-900 bg-orange-100 rounded border border-gray-300 border-solid shadow-sm">
          This carrier has set up its GPS (telematics provider) and is ready to
          send visibility data to you. Once they have allocated their vehicle to
          a transport, Sixfold will mark this carrier as fully connected.
        </p>
        <div>
          <div className="inline-block rounded-full py-1 px-2 text-xs font-semibold leading-4 text-green-700 bg-green-100 select-none shadow whitespace-no-wrap">
            Ready for tracking
          </div>
        </div>
        <div>
          <button
            data-test-id="filterApplyButton"
            className="inline-flex relative justify-center items-center py-1 px-2 m-0 text-sm font-medium leading-4 text-center text-white align-middle whitespace-pre bg-green-600 hover:bg-green-700 transition-colors rounded  cursor-pointer"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
