import 'dotenv/config';
import { Client, GatewayIntentBits, Events } from 'discord.js';

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error("❌ Missing DISCORD_TOKEN in environment");
  process.exit(1);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
  console.log(`✅ Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async i => {
  if (!i.isChatInputCommand()) return;
  if (i.commandName === 'ping') {
    await i.reply('pong 🏓');
  }
});

client.login(token);
