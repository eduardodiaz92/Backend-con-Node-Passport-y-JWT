const jwt = require('jsonwebtoken');
const { config } = require('./config/config');

//El secret es como va encriptar el header y el payload,
//es mejor ponerlo en variable de entorno
const secret = config.jwtSecret;

//La data que vamos a encriptar, como minimo debe llevar el subject(sub)
//que es la forma en la que nosotros vamos a identificar el usuario
//Se puede agregar un scope, que es utilizado para los permisos
//Tambien puedes agregar cualquier atributo
const payload = {
  sub: 2,
  role: 'customer',
};

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}
const token = signToken(payload, secret);

console.log(token);
