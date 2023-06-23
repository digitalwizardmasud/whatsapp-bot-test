const { Client, LocalAuth, MessageMedia, Chat } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');
const client = new Client({
  authStrategy: new LocalAuth()
});



client.on('authenticated', (session) => {    
 console.log(session);
});

client.on('qr', (qr) => {
  qrcode.generate(qr, {small: true});
});
client.on('message', async message => {
  const media = await MessageMedia.fromUrl('https://i.ibb.co/k3jG4hV/demo-avatar.png')
  message.reply(media)
});
 
client.on('ready', () => {
    console.log('ready')
});

client.initialize();

