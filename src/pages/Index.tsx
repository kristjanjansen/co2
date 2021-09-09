import React from "react";
import { Link } from "react-router-dom";
import { Box } from "../components/Box";
import { LinkExternal } from "../components/LinkExternal";
import { Suggestions } from "../components/Suggestions";
import { Title } from "../components/Title";

export function Index() {
  const links = [
    {
      url: "VITE_BM_URL_MGMT",
      title: "Management summary",
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
    <div className="p-4">
      <div className="grid grid-cols-3 gap-3">
        {links.map((link, i) => (
          <LinkExternal key={i} to={link.url} className="block">
            <Box className="p-3">
              <img className="block w-full object-cover h-48" src={link.src} />
              <br />
              <div className="text-lg font-bold">{link.title}</div>
            </Box>
          </LinkExternal>
        ))}
      </div>
      {/* <Suggestions /> */}
    </div>
  );
}
