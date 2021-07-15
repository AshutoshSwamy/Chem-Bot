module.exports = {
    name: 'sulfur',
    description: 'Sulfur command!',
    execute(message, args, Discord){
        const sulfurEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Sulfur")
        .setDescription("Sulfur is a chemical element with the symbol S and atomic number 16. It is abundant, multivalent and nonmetallic. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S₈. Elemental sulfur is a bright yellow, crystalline solid at room temperature.")
        .addFields(
        {name : "Symbol" , value : "S" , inline : true},
        {name : "Atomic Mass" , value : "32.065 u" , inline : true},
        {name : "Atomic Number" , value : "16" , inline : true},
        {name : "Electronegativity" , value : "2.58" , inline : true},
        {name : "Density" , value : "	2.07 g/cm³" , inline : true},
        {name : "Discoverer" , value : "Antoine Lavoisier" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(sulfurEmbed)
    }
}