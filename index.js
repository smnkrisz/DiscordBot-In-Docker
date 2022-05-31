require("dotenv").config();

const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.TOKEN);

client.on("message", (msg) => {
  if (msg.content === "Hello bot!") {
    msg.reply("Jó napot teremtőm!");
  }
  if (msg.content === "Welcome") {
    msg.reply("Welcome to the server!");
  }
  if (msg.content === "Ping") {
    msg.reply("Pong!");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});
