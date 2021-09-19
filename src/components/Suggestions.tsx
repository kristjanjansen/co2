import React from "react";
import useGoogleSheets from "use-google-sheets";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { useData } from "../utils";
import { IconLeaf } from "./IconLeaf";
import { LinkExternal } from "./LinkExternal";
import { Spinner } from "./Spinner";
import { Title } from "./Title";

export function Suggestions() {
  const { data, loading, error } = useData("suggestions");

  if (loading) {
    return (
      <div className="p-4 h-1/2 grid place-items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  const impactRanks = {
    1: { title: "Low", class: "text-red-500 text-xl font-bold" },
    2: { title: "Medium", class: "text-orange-500 text-xl font-bold" },
    3: { title: "High", class: "text-green-500 text-xl font-bold" },
  };

  const investmentRanks = {
    1: { title: "Low", class: "text-green-500 text-lg font-bold" },
    2: { title: "Medium", class: "text-orange-500 text-lg font-bold" },
    3: { title: "High", class: "text-red-500 text-lg font-bold" },
  };

  return (
    <div className="grid gap-y-4">
      {data &&
        data.map((s, i) => (
          <Box
            key={i}
            className="bg-white grid grid-cols-[auto,2fr,1fr,1fr,1fr] gap-4 p-6"
          >
            <IconLeaf className="w-8 text-green-500 group-hover:text-blue-600" />
            <div className="grid gap-1 border-r-2 border-gray-200 px-3">
              <Heading>{s.title}</Heading>
              <p className="text-sm">{s.body}</p>
              <LinkExternal
                className="text-sm text-blue-500 hover:text-blue-500"
                to={s.url}
              >
                Learn more
              </LinkExternal>
            </div>
            <div className="text-center">
              <br />
              <p className="text-gray-500">Impact on emissions</p>
              <p className={impactRanks[s.rank].class}>
                {impactRanks[s.rank].title}
              </p>
            </div>
            <div className="text-center">
              <br />
              <p className="text-gray-500">Investment size</p>
              <p className={investmentRanks[s.investment].class}>
                {investmentRanks[s.investment].title}
              </p>
            </div>
            <div className="text-center">
              <br />
              <p className="text-gray-500">
                CO<sub>2</sub> reduction
              </p>
              <p className="text-lg font-bold">
                {(s.impact * 4000000 * 4) / 1000} T/y
              </p>
            </div>
            {/* <p className="text-sm">
              CO<sub>2</sub> reduction: {s.impact} kg / year
            </p> */}
          </Box>
        ))}
    </div>
  );
}
