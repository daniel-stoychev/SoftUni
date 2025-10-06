import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('It works!');
});

// Standard SET cokkie method
app.get('/set-cookie', (req, res) => {
    res.writeHead(200, {
        'set-cookie': 'name=Pesho'
    });
    res.end();
});


// Express SET cokkie method
app.get('/set-cookie2', (req, res) => {
    res.header('set-cookie', 'age=20');

    res.end();
});
// Express easiest way to SET cokkie method / RECOMMENDED
app.get('/set-cookie3', (req, res) => {
    res.cookie('width', 190);

    res.end();
});





// Standard get cookie Express way
app.get('/get-cookie', (req, res) => {
    //Read reqiest cookie header
    const cookies = req.header('cookie');
    console.log(cookies);


    res.send(cookies);
});

//Get cookie Cookie Parser way / RECOMMENDED
app.get('/get-cookie2', (req, res) => {
    //Read reqiest cookie header
    const cookies = req.cookies;
    console.log(cookies);
    // console.log(cookies['name']);


    res.end();
});







app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});

