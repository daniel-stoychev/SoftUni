import url from 'url';
import fs from 'fs/promises';
import path from 'path';
import '../data/cats.json';
import '../data/breeds.json';

module.exports = (req, res) => {
    const pathname = url.parse.pathname;
    if (pathname === '/' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/home/index.html'));

    }
}

