import { autoType } from "d3-dsv";

export function parseData(obj: any) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, autoType({ value }).value])
  );
}
