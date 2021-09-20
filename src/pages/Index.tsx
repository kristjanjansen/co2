import React from "react";
import { Link } from "react-router-dom";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";
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
