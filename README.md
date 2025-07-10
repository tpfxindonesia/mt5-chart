# MT5 TradingView Chart Template

This template shows how to embed the TradingView Charting Library in a simple web app and feed it with data (dummy candlesticks by default).

## Folder Structure

```
mt5-tradingview-app/
├── client/                      # Frontend
│   ├── public/index.html
│   ├── src/main.js
│   └── tradingview/             # 🔴 Copy your licensed charting_library here!
│       └── charting_library/
├── server/
│   ├── index.js                 # Express API
│   └── dummy_data.json          # Dummy OHLCV data
├── package.json
└── README.md
```

## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Copy TradingView Library**

   Get the official *charting_library* from TradingView (requires their permission).  
   Place the folder here:

```
client/tradingview/charting_library/
```

3. **Run locally**

```bash
npm start
# Visit http://localhost:3001
```

## Deploy

- **Backend** (`server`) can be deployed to Render, Railway, or any VPS.
- **Frontend** (`client` static files) are served by the same Express server out‑of‑the‑box, so one deployment is enough.
- Alternatively, build the client separately and host on Vercel/Netlify, then set `datafeed` URL to your backend domain.

## Switching to Real MT5 Data

1. Replace `dummy_data.json` with your real-time fetch logic inside `server/index.js`.
2. Connect to MT5 via MetaManager API / WebAPI, map the OHLCV into the response format expected by TradingView (`s, t, o, h, l, c, v`).

Enjoy!