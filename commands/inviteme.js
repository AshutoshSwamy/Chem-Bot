module.exports = {
    name: 'inviteme',
    description: 'Invite Me command!',
    execute(message, args, Discord){
        const inviteMeEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Chem Bot Invite Link")
        .setDescription("[Click here to Invite Me](https://discord.com/oauth2/authorize?client_id=787391834544144395&scope=bot)")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(inviteMeEmbed)
    }
}