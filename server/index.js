const express = require('express');
const path = require('path');
const candles = require('./dummy_data.json');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static client files
app.use('/', express.static(path.join(__dirname, '../client')));

// TradingView-compatible history endpoint
app.get('/api/history', (req, res) => {
  const { from, to } = req.query;
  const fromTs = Number(from) || 0;
  const toTs = Number(to) || Date.now() / 1000;

  const filtered = candles.filter(c => c.time >= fromTs && c.time <= toTs);
  if (!filtered.length) {
    return res.json({ s: 'no_data' });
  }

  res.json({
    s: 'ok',
    t: filtered.map(c => c.time),
    o: filtered.map(c => c.open),
    h: filtered.map(c => c.high),
    l: filtered.map(c => c.low),
    c: filtered.map(c => c.close),
    v: filtered.map(c => c.volume),
  });
});

// Simple health check
app.get('/api/ping', (_, res) => res.send('pong'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));