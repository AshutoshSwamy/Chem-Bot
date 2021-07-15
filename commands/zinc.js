module.exports = {
    name: 'zinc',
    description: 'Zinc command!',
    execute(message, args, Discord){
        const zincEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Zinc")
        .setDescription("Zinc is a chemical element with the symbol Zn and atomic number 30. Zinc is a slightly brittle metal at room temperature and has a blue-silvery appearance when oxidation is removed. It is the first element in group 12 of the periodic table.")
        .addFields(
        {name : "Symbol" , value : "Zn" , inline : true},
        {name : "Atomic Mass" , value : "65.38 u" , inline : true},
        {name : "Atomic Number" , value : "30" , inline : true},
        {name : "Electronegativity" , value : "1.65" , inline : true},
        {name : "Density" , value : "7.13 g/cc" , inline : true},
        {name : "Discoverer" , value : "P. Moras de Respour" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(zincEmbed)
    }
}