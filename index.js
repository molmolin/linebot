var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: channelId,
  channelSecret: 'channelSecret',
  channelAccessToken: 'channelAccessToken'
});

var items = Array(
  '南機場卷卷', 
  '北北車', 
  '公館甜不辣', 
  '公館鴉片粉圓',
  '公館藍家',
  '大心',
  '福勝亭',
  '肥豬的攤',
  '減肥不要吃',
  '京站銷魂麵',
  '北車溫州大餛鈍',
  '飯糰',
  '吃素底加啦',
  '丸🐢',
  '師大夜市買衣服',
  '肥豬的攤對面那家',
  '麥當當',
  '肯德🐔',
  '🥟',
  '莎莎'
  );
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    var item = items[Math.floor(Math.random()*items.length)];        
    if (msg == '午餐'){
      event.reply([item,'打翻味噌醬ㄉ🐢請客','記得記帳']).then(function(data) {});          
    }
  }
  });
  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
  //因為 express port 是 3000，heroku 上預設是8080，透過下列程式轉換
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
