import React from "react";
import useGoogleSheets from "use-google-sheets";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { useData } from "../utils";
import { LinkExternal } from "./LinkExternal";
import { Spinner } from "./Spinner";
import { Title } from "./Title";

export function Suggestions() {
  const { data, loading, error } = useData("suggestions");

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  const impactRanks = {
    1: { title: "Low", class: "text-red-500" },
    2: { title: "Medium", class: "text-orange-500" },
    3: { title: "High", class: "text-green-500" },
  };

  const investmentRanks = {
    1: { title: "Low", class: "text-green-500" },
    2: { title: "Medium", class: "text-orange-500" },
    3: { title: "High", class: "text-red-500" },
  };

  return (
    <div className="grid gap-y-4">
      <Title>Suggestions</Title>
      {data &&
        data.map((s) => (
          <Box className="grid gap-y-1">
            <Heading>{s.title}</Heading>
            <p className="text-sm">{s.body}</p>
            <p className={impactRanks[s.rank].class}>
              Impact on emissions: {impactRanks[s.rank].title}
            </p>
            <p className={investmentRanks[s.investment].class}>
              Investment size: {investmentRanks[s.investment].title}
            </p>
            <p className="text-sm">
              CO<sub>2</sub> reduction: {s.impact} kg / year
            </p>
            <LinkExternal
              className="text-sm text-blue-500 hover:text-blue-500"
              to={s.url}
            >
              Learn more
            </LinkExternal>
          </Box>
        ))}
    </div>
  );
}
