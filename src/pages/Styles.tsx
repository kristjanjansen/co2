import React from "react";
import { Button } from "../components/Button";

export function Styles() {
  return (
    <>
      <h1 className="text-6xl font-light font-title">Real-time visibility</h1>
      <p className="text-xl leading-8">
        When’s the next update? Right now. Know the location, ETA, and status of
        your shipments in real-time.&nbsp;Sixfold’s powerful AI capabilities
        predict delays and proactively alert you to problems by aggregating live
        data from supply chains across Europe on our powerful network.
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
        <Button className="bg-green-500 hover:bg-green-600">
          Create a saved filter!
        </Button>
      </div>
      <p className="py-4 px-3 my-4 mx-0 text-sm leading-6 text-blue-900 bg-orange-100 rounded border border-gray-300 border-solid shadow-sm">
        This carrier has set up its GPS (telematics provider) and is ready to
        send visibility data to you. Once they have allocated their vehicle to a
        transport, Sixfold will mark this carrier as fully connected.
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
    </>
  );
}
