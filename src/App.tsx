import React from "react";
import { ReactComponent as Logo } from "./components/logo.svg";
import { ReactComponent as Dashboard } from "./components/dashboard.svg";
import { ReactComponent as Transports } from "./components/transports.svg";
import { ReactComponent as Network } from "./components/network.svg";
import { ReactComponent as Places } from "./components/places.svg";
import { ReactComponent as Connected } from "./components/connected.svg";
import { ReactComponent as Settings } from "./components/settings.svg";

export default function App() {
  return (
    <div className="grid grid-cols-[auto,1fr] min-h-screen">
      <div className="w-16 bg-gradient-to-b from-sky-500 to-sky-600 grid justify-center content-start gap-9 py-6">
        <Logo className="w-6" />
        <Dashboard className="stroke-current w-6 text-white" />
        <Transports className="w-6 text-white" />
        <Network className="w-6 text-white" />
        <Places className="w-6 text-white" />
        <Connected className="w-6 text-white" />
        <Settings className="w-6 text-white" />
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
      </div>
    </div>
  );
}
