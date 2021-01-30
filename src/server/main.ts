import { readFileSync } from 'fs';
import * as https from 'https';
import cors from 'cors';

import express from 'express';
import { log } from 'debug';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Localhost self-signed HTTPS certificate
// https://stackoverflow.com/a/42298344/6539857
const httpsOptions = {
  key: readFileSync('./security/key.pem'),
  cert: readFileSync('./security/cert.pem')
};

https.createServer(httpsOptions, app).listen(port, () => {
  log(`Listening on ${port}...`);
});
