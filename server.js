/**
 * BioSentinel National Environmental Intelligence Portal
 * Production HTTP Server for Render Deployment
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const ROUTE_ALIASES = {
  '/': '/index.html',
  '/overview': '/overview.html',
  '/gis': '/gis.html',
  '/alerts': '/alerts.html',
  '/fauna': '/fauna.html',
  '/sentinel': '/sentinel.html'
};

const server = http.createServer((req, res) => {
  // CORS & Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = parsedUrl.pathname;

  // Health check endpoint for Render monitoring
  if (pathname === '/healthz' || pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      service: 'BioSentinel Environmental Intelligence Grid',
      framework: 'NMCG-CPCB-WII Protocol SEC-4',
      buoysOnline: 482,
      neuralModel: 'v4.8 Active',
      timestamp: new Date().toISOString()
    }));
    return;
  }

  // API mock endpoint for live telemetry
  if (pathname === '/api/telemetry/summary') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      activeBuoys: 482,
      criticalAlerts: 3,
      moderateAlerts: 7,
      resolvedToday: 12,
      meanResponseTime: '1h 14m',
      basinHealthIndex: 78.4,
      dissolvedOxygenAvg: '6.8 mg/L',
      bodAvg: '2.4 mg/L'
    }));
    return;
  }

  // Match alias routes
  if (ROUTE_ALIASES[pathname]) {
    pathname = ROUTE_ALIASES[pathname];
  }

  // Prevent directory traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback: try checking if file + .html exists
      const htmlFallback = filePath + '.html';
      if (fs.existsSync(htmlFallback) && fs.statSync(htmlFallback).isFile()) {
        filePath = htmlFallback;
      } else {
        // 404 response
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="utf-8">
  <title>404 - Node Not Found | BioSentinel</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#051424] text-[#d4e4fa] min-h-screen flex items-center justify-center p-6 text-center font-sans">
  <div class="max-w-md p-8 bg-[#122131] rounded-2xl border border-[#273647] shadow-2xl">
    <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-3xl font-bold">404</div>
    <h1 class="text-2xl font-bold mb-2">Telemetry Node Not Found</h1>
    <p class="text-sm text-gray-400 mb-6">The requested BioSentinel intelligence coordinate could not be resolved.</p>
    <a href="/" class="inline-block px-6 py-2.5 bg-[#4edea3] text-[#003824] rounded-lg font-semibold hover:opacity-90 transition">Return to Basin Overview</a>
  </div>
</body>
</html>`);
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

// Error handling
server.on('error', (err) => {
  const currentPort = err.port || PORT;
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[BioSentinel Server Error] Port ${currentPort} is already in use.`);
    console.error(`An active process is already listening on port ${currentPort}.`);
    console.error(`- To test health on the running server: curl http://localhost:${currentPort}/healthz`);
    console.error(`- Or terminate the process occupying port ${currentPort}.\n`);
  } else {
    console.error('\n[BioSentinel Server Error]', err.message, '\n');
  }
  process.exit(1);
});

function startServer(port = PORT) {
  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`====================================================`);
      console.log(` BioSentinel National Intelligence Portal is running`);
      console.log(` Port: ${port}`);
      console.log(` Health check: http://localhost:${port}/healthz`);
      console.log(` Local URL:    http://localhost:${port}`);
      console.log(`====================================================`);
      resolve(server);
    });
  });
}

// Graceful shutdown
const handleShutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down BioSentinel HTTP server...`);
  server.close(() => {
    console.log('Server gracefully terminated.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));

// Start automatically if executed directly from CLI
if (require.main === module) {
  startServer();
}

module.exports = { server, startServer, PORT };
