module.exports = {
  name: "ban",
  description: "Ban command!",
  execute(message, args, Discord) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.ban();
      message.channel.send(`<@${memberTarget.user.id}> has been Bannned!`);
    } else {
      message.channel.send("Please mention a user to ban him/her!");
    }
  },
};
