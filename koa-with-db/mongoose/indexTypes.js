var mongoose = require('mongoose');

mongoose.Schema.indexTypes.forEach(index => {
  console.log(index)
})