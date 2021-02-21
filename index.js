const tmi = require('tmi.js');
const cmd = require('./commands.js').commands;

var config = {
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: 'your_username',
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: ['emadgg']
};

//Fallback to read only mode if invalid authentication
if(process.env.TWITCH_OAUTH_TOKEN === undefined){delete config.identity};

//Setup client
const client = new tmi.Client(config);
client.connect();

client.on('message', (channel, tags, message, self) => {
//Example tags object
    /*{
  'badge-info': null,
  badges: null,
  'client-nonce': 'f2da639f1ed1c81604d0c25d01cdfe95',
  color: '#1E90FF',
  'display-name': 'nitro_icyy',
  emotes: null,
  flags: null,
  id: 'f411cc9c-6003-4c24-8722-6d929539170c',
  mod: false,
  'room-id': '154526718',
  subscriber: false,
  'tmi-sent-ts': '1613917609190',
  turbo: false,
  'user-id': '645190801',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': null,
  'badges-raw': null,
  username: 'nitro_icyy',
  'message-type': 'chat'
}*/


    // Ignore echoed messages.
    if (self) return;

    switch (message.toLowerCase()) {
        case '!hello':
            client.say(channel, `@${tags.username}, Got "hello" command`);
            break;
        case '!pythonexample':
            cmd.pythonExample(client);
            break;
        default:
            //just log it
            console.log(tags, message);
    }
});