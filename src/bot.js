import Discord from 'discord.js'
import { getDatJoke } from "./services/DadJokeService.js";

export default function bot(){
  // Create a new Discord client
  const client = new Discord.Client();

  client.once('ready', () => {
    console.log('Kal the Bot is online!');
  });

  client.on('message', async message => {
    if (message.content === '!daddy') {
      const response = await getDatJoke()
      if (response?.status === 200)
        await message.channel.send(response.data.joke)
      else
        await message.channel.send('Sorry, this bot has no humor! bip bip')
    }
  });

  // Login to Discord
  client.login(process.env.DISCORD_TOKEN);
}