import React from "react";
import { Suggestions } from "../components/Suggestions";
import { Title } from "../components/Title";

export function Index() {
  return (
    <>
      <div className="grid grid-cols-[3fr,2fr] gap-6 p-4">
        <div className="h-96 bg-gray-50 grid place-items-center">
          <Title>Place for KPIs / graphs </Title>
        </div>
        {/* <Suggestions /> */}
      </div>
    </>
  );
}
