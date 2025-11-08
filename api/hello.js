// api/hello.js

import express from 'express';

const app = express();

// The route is "/", as the full URL will be /api/hello
app.get('/', (req, res) => {
  res.json({
    status: "✅ Success!",
    message: "Hello from a simple Vercel Serverless Function!",
    time: new Date().toISOString()
  });
});

export default app;