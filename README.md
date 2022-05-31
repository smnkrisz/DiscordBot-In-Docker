# The most basic Discord bot in Docker. Created for fun and to know a tiny bit about it. 

### Step-by-step:

1. Create working directory : `mkdir DiscordBot`,
2. Switch to the folder : `cd DiscordBot`,
3. Initialize Node project : `npm init -y`,
4. Install Discord.js and dotenv : `npm i --save discord.js dotenv`,
5. Create .gitignore, .env, index, .dockerignore files : `touch .gitignore .env index.js .dockerignore`,
6. Put `node_modules, package-lock.json` in `.dockerignore`,
7. Put `node_modules, package-lock.json, .env` in `.gitignore`,
8. Open index.js : `code index.js`,
9. Paste the following lines in it : 
```crystal

# use dotenv
require("dotenv").config();

# use Discord.js
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

# login the bot via its token from Discord
client.login(process.env.TOKEN);

# create simple actions
client.on("message", (msg) => {

  if (msg.content === "Welcome") {
    msg.reply("Welcome to the server!");
  }
  
  if (msg.content === "Hello bot!") {
    msg.reply("Jó napot teremtőm!");
  }
  
  if (msg.content === "Ping") {
    msg.reply("Pong!");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});
``` 
8. Get bot token from Discord : 
 - Log in [Discord website](https://discord.com/),
 - Go to [Developer portal](https://discord.com/developers/applications),
 - Click on "New Application" and add a name,
 - Click on "Bot" and confirm it,
 - Copy Token and put it in `.env` file
9. Invite the bot to the server : 
 - Click on "OAuth2" and select "bot",
 - Add permissions : `Send Messages, Manage Messages, Embed Links, Attach Files, Read Message History, Mention Everyone, Use External Emojis, Use External Stickers, Add Reactions, Read Messages/View Channels`
 - Copy "permissions integer" and copy to the browser, so you can invite the bot
10. Create Dockerfile,
11. Paste the following lines in it : 
```crystal
# use the slim version of node
FROM node:slim

# create working directory
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# copy and install packages
COPY package.json /usr/src/bot
RUN npm install

COPY . /usr/src/bot

# run the bot
CMD ["node", "index.js"]
```
12. Build the container : `docker build -t DiscordBot` ( use sudo if user doesn't have permission ),
13. Run the container : `docker run -d DiscordBot`
14. Check running container : `docker ps`
15. If you want to stop is : `docker stop <containerID>`
