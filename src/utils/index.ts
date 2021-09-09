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
  console.log(sheetsData);
  return { data, loading, error };
}
