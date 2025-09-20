import http from 'http';
import fs from 'fs/promises';

const server = http.createServer(async (req, res) => {
    let html = '';
    console.log(req.url);

    if (req.url === '/') {
        html = await homeView();
    } else if (req.url === '/cats/add-breed') {
        html = await addBreedView();
    } else if (req.url === '/cats/add-cat') {
        html = await addCatView();
    }

    if (req.url === '/styles/site.css') {
        const siteCss = await fs.readFile('./src/styles/site.css', { encoding: 'utf-8' });
        res.writeHead(200, {
            "content-type": "text/css",
            "cache-control": "max-age=100"
        });
        res.write(siteCss);
        return res.end();
    }


    res.writeHead(200, {
        "content-type": "text/html"
    });
    res.write(html);
    res.end();
});


async function homeView() {
    const result = await fs.readFile('./src/views/home/index.html', { encoding: 'utf-8' });
    return result;
}
async function addBreedView() {
    const result = await fs.readFile('./src/views/addBreed.html', { encoding: 'utf-8' });
    return result;
}
async function addCatView() {
    const result = await fs.readFile('./src/views/addCat.html', { encoding: 'utf-8' });
    return result;
}


server.listen(4000);
console.log('Server is listening on http://localhost:4000...');


