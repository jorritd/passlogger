var port = 22;
var fs = require('fs');
var ssh2 = require('ssh2');
new ssh2.Server({
  hostKeys: [fs.readFileSync('host.key')]
}, function(client) {
  client.on('authentication', function(ctx) {
    var addr = client._sock._peername.address;
    if (ctx.method === 'password'){
      let lg = addr + ' - ' + ctx.username+ ' - '+ctx.password;
      fs.appendFile('credentials.log', lg+'\n', function () {

      });
    }
    ctx.reject(['password']);
  }).on('ready', function() {
    console.log('Client authenticated!');
  }).on('end', function() {
    console.log('Client disconnected');
  });
}).listen(port, function() {
  console.log('Listening on port ' + this.address().port);
});

