const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtKey
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  if (Date.now() > payload.exp * 1000) {
    return done(boom.unauthorized('Token expired'));
  }
  return done(null, payload);
});

module.exports = jwtStrategy;
