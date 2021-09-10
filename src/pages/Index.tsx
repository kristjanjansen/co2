import React from "react";
import { Link } from "react-router-dom";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
import { LinkExternal } from "../components/LinkExternal";
import { Suggestions } from "../components/Suggestions";
import { Title } from "../components/Title";

export function Index() {
  const links = [
    {
      url: "VITE_BM_URL_MGMT",
      title: "Summary",
      src: "/mgmt.png",
    },
    {
      url: "VITE_BM_URL_EMISSIONS",
      title: "Emissions",
      src: "/emissions.png",
    },
    {
      url: "VITE_BM_URL_MODE",
      title: "Vehicle type shift",
      src: "/shift.png",
    },
  ].map((l) => {
    l.url = import.meta.env[l.url] as string;
    return l;
  });

  return (
    <div className="p-8">
      <Title>Dashboards</Title>
      <br />
      <div className="grid gap-4 grid-cols-5">
        {links.map((link, i) => (
          <LinkExternal key={i} to={link.url} className="block">
            <Box className="p-3">
              <img className="block w-full object-cover h-32" src={link.src} />
              <br />
              <Heading>{link.title}</Heading>
            </Box>
          </LinkExternal>
        ))}
        <Link to="/modes" className="block">
          <Box className="p-3">
            <img className="block w-full object-cover h-32" src="/shift2.png" />
            <br />
            <Heading>Vehicle mode shift II</Heading>
          </Box>
        </Link>
        <Link to="/lanes" className="block">
          <Box className="p-3">
            <img className="block w-full object-cover h-32" src="/lanes.png" />
            <br />
            <Heading>Lane emissions</Heading>
          </Box>
        </Link>
      </div>
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
