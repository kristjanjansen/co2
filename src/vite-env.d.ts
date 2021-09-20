/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GOOGLE_API_KEY: string;
  VITE_GOOGLE_SHEETS_ID: string;
  VITE_CLIENT: string;
}

declare module "@observablehq/plot";
declare module "d3-dsv";
declare module "d3-format";
declare module "tailwind-classlist";
