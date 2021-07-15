module.exports = {
    name: 'phosphorous',
    description: 'Phosphorous command!',
    execute(message, args, Discord){
        const phosphorusEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Phosphorus")
        .setDescription("Phosphorus is a chemical element with the symbol P and atomic number 15. Elemental phosphorus exists in two major forms, white phosphorus and red phosphorus, but because it is highly reactive, phosphorus is never found as a free element on Earth.")
        .addFields(
        {name : "Symbol" , value : "P" , inline : true},
        {name : "Atomic Mass" , value : "30.973762 u" , inline : true},
        {name : "Atomic Number" , value : "15" , inline : true},
        {name : "Electronegativity" , value : "2.19" , inline : true},
        {name : "Density" , value : "15.2 lb/gal" , inline : true},
        {name : "Discoverer" , value : "Hennig Brand" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(phosphorusEmbed)
    }
}