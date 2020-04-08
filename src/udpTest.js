var net = require('net');
var client = net.connect(6969, 'localhost');  
client.write('Test message from node js to java application');
client.end();