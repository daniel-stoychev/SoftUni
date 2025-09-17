import express from 'express';
import path from 'node:path';
import router from './userRouter.js';
import {
    loggerMiddleware,
    userLoginLoggerMiddleware
} from './middlewares/loggerMiddleware.js';

const app = express();

// Use static Middleware
app.use(express.static('public'))
app.use(loggerMiddleware);

app.get('/', (req, res) => {

    res.send('Hello World!')
});

app.get('/login', userLoginLoggerMiddleware, (req, res) => {
    res.send(`
            <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/css/style.css" />
                    <title>Login</title>
                </head>

                <body>
                    <form action="/login" method="post">
                        <div>
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div>
                            <input type="submit" value="Login">
                        </div>
                    </form>

                </body>

                </html>
        `);
});

app.post('/login', (req, res) => {
    res.send('Successful login!');
});

// Send json
app.get('/data', (req, res) => {
    res.json({
        name: 'Pesho',
        age: 20
    });
});

// Using params
app.get('/cats/:catId/details', (req, res) => {  //segments
    console.log(req.params);
    res.send(`Cat details: ${req.params.catId}`);

    res.end();
});

// Download files inline
app.get('/send-file', (req, res) => {
    res.sendFile(path.resolve('./cat.jpeg'));
});

// Download file attachment
app.get('/send-file-download', (req, res) => {
    res.attachment('cute-cat.jpg');
    res.sendFile(path.resolve('./cat.jpeg'));
});

// Download file attachment shortcut

app.get('/send-attachment', (req, res) => {
    res.download('./cat.jpeg', 'cute-cat.jpeg');
});

// Redirect
app.get('/redirect', (req, res) => {
    res.redirect('/redirected');
});

app.get('/redirected', (req, res) => {
    res.send('This page has been redirected!')

});

// Using modular router

app.use('/user', router);















// WildCard url with error page for all methods
app.all('/*splat', (req, res) => {
    res.send('Page not found!')
});

app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});

