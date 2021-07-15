module.exports = {
    name: 'compound',
    description: 'Compound command!',
    execute(message, args, Discord){
        const compoundEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("What Is A Compound ?")
        .setDescription("A Chemical Compound Is A Chemical Substance Composed Of Many Identical Molecules Composed Of Atoms From More Than One Element Held Together By Chemical Bonds. A Molecule Consisting Of Atoms Of Only One Element Is Therefore Not A Compound.")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(compoundEmbed)
    }
}