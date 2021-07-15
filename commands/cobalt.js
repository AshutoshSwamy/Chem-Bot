module.exports = {
    name: 'cobalt',
    description: 'Cobalt command!',
    execute(message, args, Discord){
        const cobaltEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Cobalt")
        .setDescription("Cobalt is a chemical element with the symbol Co and atomic number 27. Like nickel, cobalt is found in the Earth's crust only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.")
        .addFields(
        {name : "Symbol" , value : "Co" , inline : true},
        {name : "Atomic Mass" , value : "58.933195 u" , inline : true},
        {name : "Atomic Number" , value : "27" , inline : true},
        {name : "Electronegativity" , value : "1.88" , inline : true},
        {name : "Density" , value : "8.9 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Georg Brandt" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(cobaltEmbed)
    }
}