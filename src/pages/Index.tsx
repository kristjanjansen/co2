import React from "react";
import { Link } from "react-router-dom";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { LinkExternal } from "../components/LinkExternal";
import { Suggestions } from "../components/Suggestions";
import { Title } from "../components/Title";
import { links } from "../utils";

export function Index() {
  const client = import.meta.env.VITE_CLIENT;

  return (
    <div className="p-8 bg-gray-50">
      <Title>Dashboards</Title>
      <br />
      <div className="grid gap-4 grid-cols-5">
        {links.map((link, i) => (
          <Link key={i} to={`/${link.key}`} className="block">
            <Box className="p-3 bg-white">
              <img
                className="block w-full object-cover h-32"
                src={`/${client}-${link.key}.png`}
              />
              <br />
              <Heading>{link.title}</Heading>
            </Box>
          </Link>
        ))}
        {/* <Link to="/summary" className="block">
          <Box className="p-3">
            <img
              className="block w-full object-cover h-32"
              src={`/${client}-summary.png`}
            />
            <br />
            <Heading>Management summary</Heading>
          </Box>
        </Link> */}
        {/* <Link to="/emissions" className="block">
          <Box className="p-3">
            <img
              className="block w-full object-cover h-32"
              src={`/${client}-emissions.png`}
            />
            <br />
            <Heading>Emissions</Heading>
          </Box>
        </Link> */}
        {/* <Link to="/modes" className="block">
          <Box className="p-3">
            <img className="block w-full object-cover h-32" src="/shift2.png" />
            <br />
            <Heading>Best transport</Heading>
          </Box>
        </Link> */}
        {/* <Link to="/lanes" className="block">
          <Box className="p-3">
            <img className="block w-full object-cover h-32" src="/lanes.png" />
            <br />
            <Heading>Lane emissions</Heading>
          </Box>
        </Link>
        <Link to="/cost" className="block">
          <Box className="p-3">
            <img className="block w-full object-cover h-32" src="/lanes.png" />
            <br />
            <Heading>Cost of emissions</Heading>
          </Box>
        </Link> */}
      </div>
      <br />
      <br />
      <Title>Suggestions</Title>
      <br />
      <div className="grid grid-cols-[10vw,1fr,10vw]">
        <br />
        <Suggestions />
        <br />
      </div>
    </div>
  );
}
