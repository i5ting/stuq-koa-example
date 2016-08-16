require('./db')

const User = require('./models/user')

User.login('sang', '000000', function (err, result) {
  if (err) {
    console.log(err)

  }

  console.log('result = ' + result)    
  
})