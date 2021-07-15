module.exports = {
    name: 'nickel',
    decsription: 'Nickel command!',
    execute(message, args, Discord){
        const nickelEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Nickel")
        .setDescription("Nickel is a chemical element with the symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.")
        .addFields(
        {name : "Symbol" , value : "Ni" , inline : true},
        {name : "Atomic Mass" , value : "58.6934 u" , inline : true},
        {name : "Atomic Number" , value : "28" , inline : true},
        {name : "Electronegativity" , value : "1.91" , inline : true},
        {name : "Density" , value : "8.9 g/cc" , inline : true},
        {name : "Discoverer" , value : "Axel Fredrik Cronstedt" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(nickelEmbed)
    }
}