module.exports = {
  name: "suggestions",
  description: "Suggestions command!",
  execute(message, args, Discord) {
    const channel = message.guild.channels.cache.find(
      (c) => c.name === "write-suggestions"
    );
    if (!channel)
      return message.channel.send("Suggestions channel does not exist!");

    let messageArgs = args.join(" ");
    const suggestionsEmbed = new Discord.MessageEmbed()
      .setColor("#FFC300")
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(messageArgs);

    channel.send(suggestionsEmbed).then((msg) => {
      msg.react("✅");
      msg.react("❌");
      message.delete();
    });
  },
};
