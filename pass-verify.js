const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$61nZ6ezoxU3NQnGJPSSImecwudselgB/ndGCqYp7lO5xH0UY5sDla';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}
verifyPassword();
