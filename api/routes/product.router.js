const express = require('express');
const passport = require('passport');


const validatorHandler = require('../middlewares/validators.handler');
const { createProductSchema } = require('../schemas/product.schema');
const ProductService = require('../services/product.service');


const router = express.Router();
const service = new ProductService();

router.post('/create',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createProductSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            service.create(body)
            res.json({body});
        } catch (error) {
            next(error);
        }
    }
);

router.get('/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        try {
            const product = await service.find()
            res.json(product);
        } catch (error) {
            next(error);
        }
    }
);


module.exports = router;