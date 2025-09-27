import http from 'http';
import fs from 'fs/promises';
import { getCat, getCats, saveCat } from './data.js';
import { get } from 'https';





const server = http.createServer(async (req, res) => {
    let html = '';

    //POSTS resquests for adding cat
    if (req.method === 'POST') {
        console.log('POST has been sent!');
        let data = '';
        req.on('data', (chunk) => {
            // console.log(chunk.toString());

            data += chunk.toString();

        });

        req.on('end', () => {
            const searchParams = new URLSearchParams(data);
            const newCat = Object.fromEntries(searchParams.entries());
            // const allCatsObj = await getCats();
            // const allCatsNumber = Number(Object.keys(allCatsObj).length);
            // newCat.id = allCatsNumber + 1;  // COMPLETED IN data.js

            saveCat(newCat);
        });

        res.writeHead(302, {
            'location': '/'
        });
        res.end();
        return;
    }

    //ROUTES ---------------------------------
    if (req.url === '/') {
        html = await homeView();
    } else if (req.url === '/cats/add-breed') {
        html = await addBreedView();
    } else if (req.url === '/cats/add-cat') {
        html = await addCatView();
    } else if (req.url.startsWith('/cats/edit-cat')) {
        const segments = req.url.split('/');
        const catId = Number(segments.at(3));
        html = await editCatView(catId);

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

//VIEWS ---------------------------------
async function homeView() {
    const html = await fs.readFile('./src/views/home/index.html', { encoding: 'utf-8' });
    const cats = await getCats();
    let catsHtml = '';
    catsHtml = cats.map(cat => catTemplate(cat)).join('\n');
    const result = html.replace('{{cats}}', catsHtml);
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

async function editCatView(catId) {
    const cat = await getCat(catId);

    let html = await fs.readFile('./src/views/editCat.html', { encoding: 'utf-8' });

    html = html.replaceAll('{{name}}', cat.name);
    html = html.replaceAll('{{description}}', cat.description);
    html = html.replaceAll('{{imageUrl}}', cat.imageUrl);

    return html;
}




function catTemplate(cat) {
    return `
                <li>
                    <img src="${cat.imageUrl}"
                        alt="Black Cat">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/cats/edit-cat/${cat.id}">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
    `;
}

server.listen(4000);
console.log('Server is listening on http://localhost:4000...');


