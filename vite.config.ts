import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import viteFonts from "vite-plugin-fonts";

export default defineConfig({
  plugins: [
    reactRefresh(),
    viteFonts({
      google: {
        families: [
          {
            name: "Montserrat",
            styles: "ital,wght@0,300;0,400;0,600;1,300;1,400;1,600",
          },
          {
            name: "Inter",
            styles: "wght@400;600",
          },
        ],
      },
    }),
  ],
});
