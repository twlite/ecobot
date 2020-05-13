const { RichEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Looks like you are poor.");
  let item = args[0];
  if (!item) return message.channel.send("What are you trying to buy?");
  let hasItem = client.shop[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.reply("That item doesnt exists lol");
  let isBalanceEnough = (userBalance.amount >= hasItem.prize);
  if (!isBalanceEnough) return message.reply("Your balance is insufficient. You need :dollar: "+hasItem.prize+" to buy this item.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.prize);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.prize
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`You purchased **${item}** for **:dollar: ${hasItem.prize}**.`);
};

module.exports.help = {
  name: "buy",
  aliases: [],
  usage: `buy <item>`
};
