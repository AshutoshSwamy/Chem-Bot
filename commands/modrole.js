module.exports = {
    name: 'modrole',
    description: 'Mod Role command!',
    async execute(message, args, Discord, client){
        const channel = '787392760101470208';
        const moderator = message.guild.roles.cache.find(role => role.name === 'Moderator');

        const moderatorEmoji = '👍';

        let embed = new Discord.MessageEmbed()
        .setColor('FFC300')
        .setTitle('Take your Moderator role here')
        .setDescription('React to the message to get roles! If you unreact then you cant test the bot commands!\n\n'
        + `${moderatorEmoji} <@&823423201328627713>`)

        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(moderatorEmoji);
        
        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id === channel){
                if(reaction.emoji.name === moderatorEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(moderator);
                }
            } else{
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id === channel){
                if(reaction.emoji.name === moderatorEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(moderator);
                }
            } else{
                return;
            }
        });
    }
}