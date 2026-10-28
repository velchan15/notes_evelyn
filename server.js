const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  // API untuk menyimpan catatan baru langsung ke renungan.js
  if (req.method === 'POST' && req.url === '/api/renungan') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const newNote = JSON.parse(body);
        const jsFile = path.join(__dirname, 'renungan.js');

        if (fs.existsSync(jsFile)) {
          let content = fs.readFileSync(jsFile, 'utf-8');
          const target = 'const RENUNGAN = [';
          const idx = content.indexOf(target);
          if (idx !== -1) {
            const insertIdx = idx + target.length;
            const noteStr = '\n  ' + JSON.stringify(newNote, null, 2).replace(/\n/g, '\n  ') + ',';
            content = content.slice(0, insertIdx) + noteStr + content.slice(insertIdx);
            fs.writeFileSync(jsFile, content, 'utf-8');
          }
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Melayani file statis
  let reqPath = decodeURI(req.url.split('?')[0].split('#')[0]);
  let filePath = path.join(__dirname, reqPath === '/' ? 'index.html' : reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Halaman tidak ditemukan');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server aktif! Buka browser di: http://localhost:${PORT}`);
});
