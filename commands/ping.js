const { RichEmbed } = require("discord.js");

module.exports.execute = (client, message, args) => {
    let gatewayLatency = Math.floor(client.ping);
    message.channel.send("Pinging...").then(m => {
        const trip = Math.floor(m.createdTimestamp - message.createdTimestamp);
        const embed = new RichEmbed()
            .setTitle("Pong!")
            .addField("API Latency", `${gatewayLatency}ms`, true)
            .addField("Client Latency", `${trip}ms`, true)
            .setColor("#7289DA")
            .setTimestamp();
        m.edit(embed);
    });
}

module.exports.help = {
    name: "ping",
    aliases: ["pong", "latency"],
    usage: `ping`
}
