const passport = require('passport');

//Aqui indicamos que estrategias vamos a usar
const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

//Indicamos que la vamos a usar
passport.use(LocalStrategy);
passport.use(JwtStrategy);
