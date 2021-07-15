module.exports = {
    name: 'molecule',
    description: 'Molecule command!',
    execute(message, args, Discord){
        const moleculeEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("What Is A Molecule ?")
        .setDescription("A Molecule Is An Electrically Neutral Group Of Two Or More Atoms Held Together By Chemical Bonds. Molecules Are Distinguished From Ions By Their lack Of Electrical Charge.")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(moleculeEmbed)
    }
}