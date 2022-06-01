require("dotenv").config();

import { Client, Intents } from "discord.js";
import fetch from "node-fetch";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.TOKEN);

function getJoke() {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((json) => json.value);
}

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
  if (msg.content === "Tell me a joke") {
    getJoke().then((joke) => msg.reply(joke));
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});
