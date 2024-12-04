const express = require('express');
const passport = require('passport');

const TableService = require('../services/table.service');
const validatorHandler = require('../middlewares/validators.handler');
const { createTable, updateTable, getTable } = require('../schemas/table.schecma');

const router = express.Router();
const service = new TableService();

router.post('/create',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(createTable, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const room = await service.create(body)
            res.json(room);
        } catch (error) {
            next(erro);
        }
    } 
);

router.patch('/payAccount/:id',
    passport.authenticate('jwt', { session: false }),
    validatorHandler( getTable, 'params'),
    validatorHandler(updateTable, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const room = await service.update(id,body)
            res.json(room);
        } catch (error) {
            next(erro);
        }
    } 
);

router.get('/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        try {
            const dataAll = await service.find();
            res.json(dataAll);
        } catch (error) {
            next(erro);
        }
    } 
);

module.exports = router;