module.exports = {
    name: 'ion',
    description: 'Ion command!',
    execute(message, args, Discord){
        const ionEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("What Is An Ion ?")
        .setDescription("An Ion Is A Particle, Atom Or Molecule With A Net Electrical Charge. The Charge Of The Electron Is Considered Negative By Convention. The Negative Charge Of An Ion Is Equal & Opposite To Charged Proton Considered Positive By Convention.")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(ionEmbed)
    }
}