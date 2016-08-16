'use strict'

const mongoose = require('mongoose')

var options
var db
var log = console.log
var connectionString = require('./mongodb').url()

log('connectionString = ' + connectionString)

options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
}

log(connectionString)

mongoose.connect(connectionString, options, function (err, res) {
  if (err) {
    log('[mongoose log] Error connecting to: ', +connectionString + '. ' + err)
    return process.exit(1)
  } else {
    return log('[mongoose log] Successfully connected to: ', +connectionString)
  }
})

db = mongoose.connection

db.on('error', console.error.bind(console, 'mongoose connection error:'))

db.once('open', function () {
  return log('mongoose open success')
})

module.exports = db
