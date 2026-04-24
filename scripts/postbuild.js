import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const redirectContent = `/*  /index.html  200`;

fs.writeFileSync(path.join(__dirname, 'dist', '_redirects'), redirectContent);

console.log('_redirects created successfully');