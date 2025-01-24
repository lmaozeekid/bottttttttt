const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login('MTMzMjM3ODQ0MjUwNjgyOTkwNA.GqYwGY.rDb8iQfmg4i_TluCOCCgJNJeXfR9pgcXdgGaHU');
