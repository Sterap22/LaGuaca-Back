const express = require('express');
const passport = require('passport');

const validatorHandler = require('../middlewares/validators.handler');
const { GetReporting } = require('../schemas/reporting.schema');
const ReportingServices = require('../services/reporting.service');

const router = express.Router();
const service = new ReportingServices();

router.post('/create',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(GetReporting, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const rep = await service.create(body)
            res.json(rep);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;