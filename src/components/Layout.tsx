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
      <div className="p-5 grid gap-y-6 auto-rows-min">
        <Title>CO2 dashboard</Title>
        <Tabs />
        {props.children}
      </div>
    </div>
  );
}
