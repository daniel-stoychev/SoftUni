import express from 'express';

const app = express();

app.get('/', (req, res) => {

    res.send('Hello World!')
});

app.get('/login', (req, res) => {
    res.send(`
            <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    res.send('Successful login!')
});

// Using params
app.get('/cats/:catId/details', (req, res) => {  //segments
    console.log(req.params);
    res.send(`Cat details: ${req.params.catId}`);

    res.end();
});








// WildCard url with error page for all methods
app.all('/*splat', (req, res) => {
    res.send('Page not found!')
});

app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});

