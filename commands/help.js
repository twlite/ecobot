const { RichEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
    const embed = new RichEmbed()
        .setAuthor("Commands")
        .setTitle("Source Code")
        .setURL("https://github.com/Snowflake107/ecobot")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

module.exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
