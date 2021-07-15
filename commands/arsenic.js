module.exports = {
    name: 'arsenic',
    description: 'Arsenic command!',
    execute(message, args, Discord){
        const arsenicEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Arsenic")
        .setDescription("Arsenic is a chemical element with the symbol As and atomic number 33. Arsenic occurs in many minerals, usually in combination with sulfur and metals, but also as a pure elemental crystal. Arsenic is a metalloid.")
        .addFields(
        {name : "Symbol" , value : "Ar" , inline : true},
        {name : "Atomic Mass" , value : "74.9216 u" , inline : true},
        {name : "Atomic Number" , value : "33" , inline : true},
        {name : "Electronegativity" , value : "2.18 " , inline : true},
        {name : "Density" , value : "5.7 g.cm¯³" , inline : true},
        {name : "Discoverer" , value : "Albertus Magnus" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(arsenicEmbed)
    }
}