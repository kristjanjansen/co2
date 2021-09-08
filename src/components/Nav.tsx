import React from "react";
import { IconConnected } from "./IconConnected";
import { IconDashboard } from "./IconDashboard";
import { IconLeaf } from "./IconLeaf";
import { IconNetwork } from "./IconNetwork";
import { IconPlaces } from "./IconPlaces";
import { IconSettings } from "./IconSettings";
import { IconTransports } from "./IconTransports";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <div className="h-screen sticky top-0 bg-gradient-to-b from-sky-500 to-sky-600 grid justify-center content-start gap-4 py-6">
      <Logo className="w-6 justify-self-center" />
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
  );
}
