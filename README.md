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
