const promisify = require('./promisify-es5')

var fs = require("fs");
var readFilePromise = promisify(fs.readFile, fs); //包装为 Promise 接口


readFilePromise("./promisify-es5.js", "utf8").then(function(content){
  //正常情况
  console.log(content)
}).catch(function(err){
  //异常情况
  console.log(err)
})