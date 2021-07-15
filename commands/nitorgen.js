module.exports = {
    name: 'nitrogen',
    description: 'Nitrogen command!',
    execute(message, args, Discord){
        const nitrogenEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Nitrogen")
        .setDescription("Nitrogen is the chemical element with the symbol N and atomic number 7. It was first discovered and isolated by Scottish physician Daniel Rutherford in 1772.")
        .addFields(
        {name : "Symbol" , value : "N" , inline : true},
        {name : "Atomic Mass" , value : "14.0067 u" , inline : true},
        {name : "Atomic Number" , value : "7" , inline : true},
        {name : "Electronegativity" , value : "3.04" , inline : true},
        {name : "Density" , value : "	0.001145 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Daniel Rutherford" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(nitrogenEmbed)
    }
}