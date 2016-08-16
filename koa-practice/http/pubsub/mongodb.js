module.exports = {
  'host': '127.0.0.1',
  'port': '27017',
  'db': 'koa-session',
  'is_debug': true,
  'log': console.log,
  'url': function () {
    const isDebug = this.is_debug

    if (isDebug) {
      this.log('提醒:debug状态连接数据库:')
      host = this.host
    } else {
      this.log('警告:非debug状态连接数据库:')
      host = this.host
    }
    
    return 'mongodb://' + host + ':' + this.port + '/' + this.db + ''
  }
}
