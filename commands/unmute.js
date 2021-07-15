module.exports = {
  name: "unmute",
  description: "Unmute command!",
  execute(message, args) {
    const target = message.mentions.users.first();
    if (target) {
      let mainRole = message.guild.roles.cache.find(
        (role) => role.name === "Moderator"
      );
      let muteRole = message.guild.roles.cache.find(
        (role) => role.name === "Muted"
      );

      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      memberTarget.roles.add(mainRole.id);
      message.channel.send(`<@${memberTarget.user.id}> has been Unmuted!`);
    } else {
      message.channel.send("Please mention a user to unmute him/her!");
    }
  },
};
