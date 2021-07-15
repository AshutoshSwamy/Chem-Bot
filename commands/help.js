module.exports = {
  name: "help",
  description: "Help command!",
  execute(message, args, Discord) {
    const helpEmbed = new Discord.MessageEmbed()
      .setColor("#FFC300")
      .setThumbnail(
        "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg"
      )
      .setTitle("Help Is Here !")
      .setDescription("Here Is The List Of My All Commands")
      .addFields(
        { name: "Prefix", value: "!" },
        {
          name: "`!chemistry`",
          value: "This Command Will Tell What Chemistry Is All About",
        },
        { name: "`!atom`", value: "This Command Will Tell You What Are Atoms" },
        {
          name: "`!molecule`",
          value: "This Command Will Tell You What Are Molecules",
        },
        { name: "`!ion`", value: "This Command Will Tell You What Are Ions" },
        {
          name: "`!element`",
          value: "This Coammand Will Tell You What Are Elements",
        },
        {
          name: "`!compound`",
          value: "This Command Will Tell You What Are Compounds",
        },
        { name: "`!mixture`", value: " This Command Will Tell What Mixtures" },
        {
          name: "`! <element-name>`",
          value: "This Command Will Tell You About A Particular Element",
        },
        {
          name: "`!periodictable`",
          value: "This Command Sends You A Image Of The Periodic Table",
        },
        {
          name: "`!playperiodictable`",
          value:
            "This Command Sends You A Video For Learning The Periodic Table",
        },
        {
          name: "`!gif <gif-topic>`",
          value: "This Command Sends You A Random Gif Or An Science Gif",
        },
        {
          name: "`!help`",
          value: "This Command Will Send You A Embed Message Like This",
        },
        {
          name: "`!info`",
          value:
            "This Command Will Tell You Little Bit Of Information About Me",
        },
        {
          name: "`!clear <messages-amount>`",
          value:
            "This Command Will Help You Delete Message In Bulk At One Time",
        },
        {
          name: "`!kick <@username>`",
          value: "This Command Will Kick The Member Out Of The Server",
        },
        {
          name: "`!ban <@username>`",
          value: "This Command Will Ban The Member From The Server",
        },
        {
          name: "`!mute <@username>`",
          value: "This Command Will Mute The Member In The Server",
        },
        {
          name: "`!unmute <@username>`",
          value:
            "This Command Will Unmute The Member In The Server Which Was Been Muted Before",
        },
        {
          name: "`!suggestions <your suggestion content>`",
          value: "With This Command You Post Your Suggestions Into The Server",
        },
        {
          name: "`!inviteme`",
          value: "This Command Will Give You My Invite Link",
        }
      )
      .setTimestamp()
      .setFooter(
        "Chem Bot",
        "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg"
      );
    message.channel.send(helpEmbed);
  },
};
