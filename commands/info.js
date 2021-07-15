module.exports = {
  name: "info",
  description: "Info command!",
  execute(message, args, Discord) {
    const infoEmbed = new Discord.MessageEmbed()
      .setColor("#FFC300")
      .setThumbnail(
        "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg"
      )
      .setTitle("About Chem Bot")
      .setDescription("Here's Some Basic Information About Chem Bot")
      .addFields(
        { name: "Prefix", value: "!" },
        { name: "Usertag", value: "Chem Bot #6998" },
        {
          name: "My Developer",
          value: "<@787019465568419871>\n<@823429083110441030>",
        },
        { name: "Developed Date", value: "11th December 2020" }
      )
      .setTimestamp()
      .setFooter(
        "Chem Bot",
        "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg"
      );
    message.channel.send(infoEmbed);
  },
};
