import express from 'express';

const app = express();

app.get('/', (req, res) => {

    res.send('It works!');
});

app.use(cors());





app.listen(3030, () => console.log('Server is listening on http://localhost:3030'));
