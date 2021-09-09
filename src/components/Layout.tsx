import React from "react";
import { Nav } from "./Nav";
import { Tabs } from "./Tabs";
import { Title } from "./Title";

export function Layout(props: { children: any }) {
  return (
    <div className="grid grid-cols-[auto,1fr] min-h-screen">
      <div className="w-16">
        <Nav />
      </div>
      <div>
        <div className="p-4 p-b-0 flex justify-between">
          <Title>
            CO<sub>2</sub> dashboard
          </Title>
          <p className="text-sm">{import.meta.env.VITE_CLIENT_IMG || ""}</p>
        </div>
        <Tabs />
        {props.children}
      </div>
    </div>
  );
}
