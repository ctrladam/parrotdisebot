const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NDM0NzU5NDg0NzM3MzIzMDM4.DbPE4g.L_uqMNQgx_NrUbcuQx4ulMDIMaQ');

var request = require('request');
var mcCommand = '/pds'; // Command for triggering
var mcIP = '84.3.203.150'; // Your MC server IP
var mcPort = 4444; // Your MC server port

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('`Oops. Sikertelen lekérdezés, próbáld újra később!`');
            }
            body = JSON.parse(body);
            var status = '` = *ParrotDise* = jelenleg = *offline* = `';
            if(body.online) {
                status = '`**ParrotDise** jelenleg **online**  -  `';
                if(body.players.now) {
                    status += '**' + body.players.now + '** játékos van fent!';
                } else {
                    status += '*Senki sincs fent!*';
                }
            }
            message.reply(status);
        });
    }
});
