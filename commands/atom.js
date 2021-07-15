module.exports = {
    name: 'atom',
    description: 'Atom command!',
    execute(message, args, Discord){
        const atomEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("What Is An Atom ?")
        .setDescription("An Atom Is Smallest Unit Of Ordinary Matter That Forms A Chemical Element. Every Solid, Liquid, Gas & Plasma Is Composed Of Neutral Or Ionized Atoms. Atoms Are Extremely Small, Typically Around 100 Picometers Across.")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(atomEmbed)
    }
}