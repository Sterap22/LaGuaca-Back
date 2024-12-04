const express = require('express');
const passport = require('passport');

const CategoryService = require('../services/category.service');
const validatorHandler = require('../middlewares/validators.handler');
const { createCategorySchema } = require('../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

router.post('/create',
    passport.authenticate('jwt',{ session: false }),
    validatorHandler(createCategorySchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            service.create(body)
            res.json({body});
        } catch (error) {
            next(error)
        }
    }
);
router.get('/',
    passport.authenticate('jwt',{ session: false }),
    async (req, res, next) => {
        try {
            const Categorys = await service.find()
            res.json(Categorys);
        } catch (error) {
            next(error)
        }
    }
);

module.exports = router;