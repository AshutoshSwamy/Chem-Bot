module.exports = {
    name: 'copper',
    description: 'Copper command!',
    execute(message, args, Discord){
        const copperEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Copper")
        .setDescription("Copper is a chemical element with the symbol Cu and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a pinkish-orange color.")
        .addFields(
        {name : "Symbol" , value : "Cu" , inline : true},
        {name : "Atomic Mass" , value : "63.546 u" , inline : true},
        {name : "Atomic Number" , value : "29" , inline : true},
        {name : "Electronegativity" , value : "1.90" , inline : true},
        {name : "Density" , value : "8.96 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Mesopotamians" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(copperEmbed)
    }
}