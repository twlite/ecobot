# ecobot
Simple economy bot for discord written in discord.js.

# Setup
## Download
```
git clone https://github.com/INEX07/ecobot
```

## **Edit `botConfig.js`**

```js
module.exports = {
    token: "YOUR_DISCORD_BOT_TOKEN_HERE",
    prefix: ":?", // default prefix
    admins: [
        "Your_ID" // your id
    ],
    games: [
        {
            type: "PLAYING",
            name: "with {users} users"
        },
        {
            type: "LISTENING",
            name: "{prefix}help"
        },
        {
            type: "WATCHING",
            name: "{servers} servers"
        }
    ],
    debug: true // debug mode
};

```

## Run
```
npm start
```

# Commands
- bal
- beg
- daily
- help
- leaderboard
- ping
- prefix
- search
- weekly
- work

# Links
- **[quick.eco](https://www.npmjs.com/package/quick.eco)**
- **[quick.db](https://www.npmjs.com/package/quick.db)**
- **[Discord](https://discord.gg/AHdaSqr)**
