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
        <div className="p-4 p-b-0">
          <Title>
            CO<sub>2</sub> dashboard
          </Title>
        </div>
        <Tabs />
        {props.children}
      </div>
    </div>
  );
}
