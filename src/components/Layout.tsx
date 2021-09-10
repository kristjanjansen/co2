import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <Title className="text-4xl font-light">
              CO<sub>2</sub> dashboard
            </Title>
          </Link>
          {import.meta.env.VITE_CLIENT}
          {import.meta.env.VITE_CLIENT && (
            <img
              className="block h-8"
              src={`${String(import.meta.env.VITE_CLIENT) || ""}.png`}
            />
          )}
        </div>
        <Tabs />
        {props.children}
      </div>
    </div>
  );
}
