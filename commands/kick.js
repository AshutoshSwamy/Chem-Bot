module.exports = {
  name: "kick",
  description: "Kick command!",
  execute(message, args) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.kick();
      message.channel.send(`<@${memberTarget.user.id}> has been Kicked!`);
    } else {
      message.channel.send("Please mention a user to kick him/her!");
    }
  },
};
