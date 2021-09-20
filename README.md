## CO<sub>2</sub> dashboard prototype for Sixfold

### Installation and development

Clone the repository and create a `.env` file:

```env
# .env
VITE_CLIENT=knauf         # Client name: knauf | ball | tesco | daikin | nestle
VITE_GOOGLE_API_KEY=...   # From https://console.cloud.google.com/apis/credentials
VITE_GOOGLE_SHEETS_ID=... # Shared Google Sheets notebook ID
VITE_GOOGLE_DS_URL=...    # Shared Google Data Studio document (url from the embed code)
```

Then run

```
npm install
npm run dev
```

### Local build and deployment

```
npm run build
npm run preview
```

### Deployment

Deploy to any provider that has a build step and environment variables support, for example Netlify:

1. Set the environment variables above
2. Set **build command** to `npm run build`
3. Set **output directory** to `/dist`

### Technical notes

The prototype is implemented with React, React Router, Tailwind for CSS (with Sixfold branding) and Vite as a build tool.

For tables there is a customized component on top of `@mui/x-data-grid`, the data is fetched for Google Sheets API using `use-google-sheets` hook.

There are additional code snippets that did not ended up in the prototype, such as custom Tailwind-based [table component](https://gist.github.com/kristjanjansen/631ddbcc9f493233879aed3e53c8f594#file-transports-tsx) and Observable [Plot](https://observablehq.com/@observablehq/plot)-based [data visualization component](https://gist.github.com/kristjanjansen/631ddbcc9f493233879aed3e53c8f594#file-data-tsx).
