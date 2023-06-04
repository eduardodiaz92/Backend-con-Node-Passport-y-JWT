const jwt = require('jsonwebtoken');

//El secret es como va encriptar el header y el payload,
//es mejor ponerlo en variable de entorno
const secret = 'myCat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4NTg0MjA1M30.8rOYa7Q0XDQj6FYWot2ixMxy6ns6G2TjJbIRg-FCZks';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}
const payload = verifyToken(token, secret);

console.log(payload);
