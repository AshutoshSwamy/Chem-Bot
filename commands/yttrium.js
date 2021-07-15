module.exports = {
    name: 'yttrium',
    description: 'Yttrium command!',
    execute(message, args, Discord){
        const yttriumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Yttrium")
        .setDescription("Yttrium is a chemical element with the symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and has often been classified as a rare-earth element.")
        .addFields(
        {name : "Symbol" , value : "Y" , inline : true},
        {name : "Atomic Mass" , value : "88.90585 u" , inline : true},
        {name : "Atomic Number" , value : "39 " , inline : true},
        {name : "Electronegativity" , value : "1.22" , inline : true},
        {name : "Density" , value : "	4.47 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Carl Gustaf Mosander" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(yttriumEmbed)
    }
}