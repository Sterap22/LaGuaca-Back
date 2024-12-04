const express = require('express');
const passport = require('passport');

const SellService = require('../services/sell.service');
const validatorHandler = require('../middlewares/validators.handler');
const { createSellSchema, getSellSchema, updateSellSchema } = require('../schemas/sell.schema');

const router = express.Router();
const service = new SellService();

router.post('/create',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createSellSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newSell = await service.create(body)
            res.json({newSell});
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/update/:id',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(getSellSchema, 'params'),
    validatorHandler(updateSellSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            res.json({body,id});
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;