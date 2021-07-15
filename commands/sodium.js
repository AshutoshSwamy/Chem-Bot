module.exports = {
    name: 'sodium',
    description: 'Sodium command!',
    execute(message, args, Discord){
        const sodiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Sodium")
        .setDescription("Sodium is a chemical element with the symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is ²³Na. The free metal does not occur in nature, and must be prepared from compounds.")
        .addFields(
        {name : "Symbol" , value : "Na" , inline : true},
        {name : "Atomic Mass" , value : "22.989769 u" , inline : true},
        {name : "Atomic Number" , value : "11" , inline : true},
        {name : "Electronegativity" , value : "0.93" , inline : true},
        {name : "Density" , value : "	0.97 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Humphry Davy" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(sodiumEmbed)
    }
}