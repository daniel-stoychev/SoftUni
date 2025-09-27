import http from 'http';
import fs from 'fs/promises';
import { deleteCat, editCat, getCat, getCats, saveCat } from './data.js';

const server = http.createServer(async (req, res) => {
    let html = '';

    //POSTS resquests for adding cat
    if (req.method === 'POST') {

        let data = '';
        req.on('data', (chunk) => {
            // console.log(chunk.toString());

            data += chunk.toString();

        });

        req.on('end', async () => {
            const searchParams = new URLSearchParams(data);
            const catResult = Object.fromEntries(searchParams.entries());

            if (req.url === '/cats/add-cat') {
                await saveCat(catResult);
            } else if (req.url.startsWith('/cats/edit-cat')) {
                const segments = req.url.split('/');
                const catId = Number(segments.at(3));

                await editCat(catId, catResult);
            }

            if (req.url.startsWith('/cats/cat-details')) {
                const segments = req.url.split('/');

                const catId = Number(segments[3]);

                await deleteCat(catId);
            }


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

    } else if (req.url.startsWith('/cats/cat-details')) {
        const segments = req.url.split('/');
        const catId = Number(segments.at(3));

        html = await catDetailsView(catId);

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
    //ROUTES ---------------------------------

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

    if (cats.length > 0) {
        catsHtml = cats.map(cat => catTemplate(cat)).join('\n');
    } else {
        catsHtml = '<span>There are no cats</span>';
    }


    const result = html.replaceAll('{{cats}}', catsHtml);
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

async function catDetailsView(catId) {
    const cat = await getCat(catId);

    let html = await fs.readFile('./src/views/catShelter.html', { encoding: 'utf-8' });
    html = html.replaceAll('{{name}}', cat.name);
    html = html.replaceAll('{{description}}', cat.description);
    html = html.replaceAll('{{imageUrl}}', cat.imageUrl);

    return html;
}




function catTemplate(cat) {
    return `
                <li>
                    <img src="${cat.imageUrl}"
                        alt="${cat.name}">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/cats/edit-cat/${cat.id}">Change Info</a></li>
                        <li class="btn delete"><a href="/cats/cat-details/${cat.id}">New Home</a></li>
                    </ul>
                </li>
    `;
}

server.listen(4000);
console.log('Server is listening on http://localhost:4000...');


