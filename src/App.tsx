import React, { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";
import { Button } from "./components/Button";

import { IconConnected } from "./components/IconConnected";
import { IconDashboard } from "./components/IconDashboard";
import { IconLeaf } from "./components/IconLeaf";
import { IconNetwork } from "./components/IconNetwork";
import { IconPlaces } from "./components/IconPlaces";
import { IconSettings } from "./components/IconSettings";
import { IconTransports } from "./components/IconTransports";
import { Logo } from "./components/Logo";

import { Routes, Route, Link } from "react-router-dom";

import { Layout } from "./components/Layout";

import { Index } from "./pages/Index";
import { Data } from "./pages/Data";
import { Transports } from "./pages/Transports";
import { Lanes } from "./pages/Lanes";
import { Shift } from "./pages/Shift";
import { Emissions } from "./pages/Emissions";
import { Summary } from "./pages/Summary";
import { Pricing } from "./pages/Pricing";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/emissions" element={<Emissions />} />
        <Route path="/typeshift" element={<Shift />} />
        <Route path="/lanes" element={<Lanes />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Layout>
  );
}
