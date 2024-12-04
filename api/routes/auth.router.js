const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');
const UserService = require('../services/user.service');
const service = new UserService();

const router = express.Router();

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        user: user.email
      };
      const token = await jwt.sign(
        payload,
        config.jwtKey,
        { expiresIn: '20m' }
      );
      res.json({
        user: {
          id: user.id,
          email: user.email
        },
        token
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post('/refresh-token',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { refreshToken } = req.body;
    try {
      const decoded = jwt.verify(refreshToken, config.jwtKey);
      if (!decoded) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await service.findByEmail(decoded.user);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const payload = {
        sub: user.id,
        user: user.email
      };
      const token = await jwt.sign(
        payload,
        config.jwtKey,
        { expiresIn: '15m' }
      );

      res.json({
        user: {
          id: user.id,
          email: user.email
        },
        token
      });
    } catch (error) {
      next(err);
    }
  });

module.exports = router;
