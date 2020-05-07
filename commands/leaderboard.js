const { RichEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send("❌ | Empty Leaderboard!");
    const embed = new RichEmbed()
        .setAuthor(`Leaderboard of ${message.guild.name}!`, message.guild.iconURL)
        .setColor("RANDOM")
        .setThumbnail(client.users.get(leaderboard[0].id) ? client.users.get(leaderboard[0].id).displayAvatarURL : "https://cdn.discordapp.com/embed/avatars/0.png")
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.get(u.id) ? client.users.get(u.id).tag : "Unknown#0000"}`, `${u.money} 💸`);
    });
    return message.channel.send(embed);
}

module.exports.help = {
    name: "lb",
    aliases: ["leaderboard"],
    usage: `lb`
}
