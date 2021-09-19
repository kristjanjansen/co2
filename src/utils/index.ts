import useGoogleSheets from "use-google-sheets";
import { autoType } from "d3-dsv";

export function parseData(obj: any) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, autoType({ value }).value])
  );
}

export function useData(sheetId: string, mapper = (m: any) => m) {
  const {
    data: sheetsData,
    loading,
    error,
  } = useGoogleSheets({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    sheetId: import.meta.env.VITE_GOOGLE_SHEETS_ID,
  });
  const data = sheetsData.find(({ id }) => id === sheetId)?.data.map(mapper);
  return { data, loading, error };
}

export const links = [
  {
    key: "summary",
    title: "Summary",
  },
  {
    key: "emissions",
    title: "Emissions",
  },
  {
    key: "typeshift",
    title: "Vehicle type shift",
  },
  {
    key: "lanes",
    title: "Lane emissions",
  },
  {
    key: "pricing",
    title: "Cost of emissions",
  },
];
