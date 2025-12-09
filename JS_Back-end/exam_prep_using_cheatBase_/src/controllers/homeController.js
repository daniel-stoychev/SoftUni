import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home' });
})

homeController.get('/blogs', (req, res) => {
    res.render('catalog', { pageTitle: 'Blogs' });
})


export default homeController; 