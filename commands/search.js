module.exports.execute = async (client, message, args) => {
    let userid = message.author.id;
    let items = [
        "Pocket",
        "Credit Card",
        "Purse",
        "Bank"
    ];
    let event1 = Math.floor(Math.random() * 5);
    let event2 = Math.floor(Math.random() * 5);
    let amount = Math.floor(Math.random() * 100) + 10;
    let timeout = 120000;
    let check = client.db.fetch(`searchcooldown_${userid}`);
    if (check !== null && timeout - (Date.now() - check) > 0) {
        let time = ms(timeout - (Date.now() - check));
        return message.reply(`I'm not a bank duh! Come back after ${time.seconds} seconds.`);
    }
    
    if (event1 === event2) {
        let remove = await client.eco.removeMoney(client.ecoAddUser, 100);
        if (remove.error) return message.channel.send(`**${items[Math.floor(Math.random() * items.length)]}:** Get Lost!`);
        else return message.channel.send(`You were caught! You paid 100 💸 to stay out of the prison.`);
    }
    let search = await client.eco.addMoney(client.ecoAddUser, amount);
    client.db.set(`searchcooldown_${userid}`, Date.now());
    return message.reply(`You searched inside **${items[Math.floor(Math.random() * items.length)]}** and found **${search.amount}** 💸. Now you have **${search.after}** 💸.`);
};

module.exports.help = {
    name: "search",
    aliases: [],
    usage: "search"
}

function ms(milliseconds) {
    const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
    return {
        days: roundTowardsZero(milliseconds / 86400000),
        hours: roundTowardsZero(milliseconds / 3600000) % 24,
        minutes: roundTowardsZero(milliseconds / 60000) % 60,
        seconds: roundTowardsZero(milliseconds / 1000) % 60,
        milliseconds: roundTowardsZero(milliseconds) % 1000,
        microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
        nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
    }
};
