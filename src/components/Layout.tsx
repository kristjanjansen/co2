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
        <div className="p-4 p-b-0 flex justify-between align-baseline">
          <Title className="text-4xl font-light">
            CO<sub>2</sub> dashboard
          </Title>
          {import.meta.env.VITE_CLIENT_IMG && (
            <img
              className="block h-8"
              src={String(import.meta.env.VITE_CLIENT_IMG) || ""}
            />
          )}
        </div>
        <Tabs />
        {props.children}
      </div>
    </div>
  );
}
