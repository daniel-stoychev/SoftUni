import express from "express";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import bcrypt from "bcrypt";

let users = [];

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboardud6i7f68og9h0j87g6f5d6f7',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

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

// Set session using express-session library
app.get('/set-session', (req, res) => {
    req.session.name = 'Gosho';
    req.session.age = Math.floor(Math.random() * 100);

    res.send('Session Created!')
});

// Get session using express-session library
app.get('/get-session', (req, res) => {
    console.log(req.session);


    res.send(`Welcome ${req.session.name}, age: ${req.session.age}!`)
});






// Register
app.get('/register', (req, res) => {
    res.send(`
        <form method="post">
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" name="username">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
            </div>
            <div>
                <input type="submit" value="Register">
            </div>
        </form>
        `)
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    //generate salt
    const salt = await bcrypt.genSalt(10);

    //Hash password
    const hash = await bcrypt.hash(password, salt);

    const user = {
        id: users.length,
        username,
        password: hash
    }

    users.push(user);

    res.end();
});




app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...');
});

