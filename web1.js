console.log('ウェブ準備完了！');

// Response for Uptime Robot(アップタイムロボットに対する応答)
var web = function() {
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now');
}).listen(3000);
}
exports.web = web();
