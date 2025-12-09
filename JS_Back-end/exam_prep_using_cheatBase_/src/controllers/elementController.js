import { Router } from 'express';

const elementController = Router();

elementController.get('/create', (req, res) => {
    res.render('blogs/create', { pageTitle: 'Add' });
})

export default elementController;