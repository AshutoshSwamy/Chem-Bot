module.exports = {
    name: 'mixture',
    description: 'Mixture command!',
    execute(message, args, Discord){
        const mixtureEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("What Is A Mixture ?")
        .setDescription("In Chemistry, A Mixture Is A Material Made Up Of Two Or More Different Substances Which Are Physically Combined. A Mixture Is The Physical Combination Of Two Or More Substances In Which The Identities Are Retained & Are Mixed In The Form Of Solutions, Suspensions & Colloids.")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(mixtureEmbed)
    }
}