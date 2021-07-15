module.exports = {
    name: 'Zicromium',
    description: 'Zicronium command!',
    execute(message, args, Discord){
        const zirconiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Zirconium")
        .setDescription("Zirconium is a chemical element with the symbol Zr and atomic number 40. The name zirconium is taken from the name of the mineral zircon, the most important source of zirconium. It is a lustrous, grey-white, strong transition metal that closely resembles hafnium and, to a lesser extent, titanium.")
        .addFields(
        {name : "Symbol" , value : "Zr" , inline : true},
        {name : "Atomic Mass" , value : "91.224 u" , inline : true},
        {name : "Atomic Number" , value : "40 " , inline : true},
        {name : "Electronegativity" , value : "1.33" , inline : true},
        {name : "Density" , value : "	6.49 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Martin Klaproth" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(zirconiumEmbed)
    }
}