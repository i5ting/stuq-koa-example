// Load the bcrypt module
var bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = "123465";

console.log('myPlaintextPassword = ' + myPlaintextPassword);//生成密文

console.time('bcrypt');
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
      console.timeEnd('bcrypt');
      console.log('hash = ' + hash);//生成密文
      
      console.time('compare');
      bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
          // res == true
        console.timeEnd('compare');
        console.log('result = ' + res)
      });
    });
});

