const express = require('express');
const path = require('path');
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
const cors = `
    default-src 'self';
    connect-src https://ya-praktikum.tech wss://ya-praktikum.tech;
    img-src 'self' blob: data: https://ya-praktikum.tech;`;

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', cors.replace(/(\r\n|\n|\r| {2})/gm, ''));
  return next();
});
app.use('/', express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
