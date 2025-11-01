require('dotenv').config();
if (!process.env.BOT_TOKEN) {
    console.error('Error: BOT_TOKEN is not defined in environment variables, or something else went wrong.');
    process.exit(1);
}
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const token = process.env.BOT_TOKEN;

client.once('clientReady', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === 'ping?') {
        message.channel.send('pong!');
    }
});

client.login(token);