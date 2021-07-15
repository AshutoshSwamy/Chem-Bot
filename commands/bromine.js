module.exports = {
    name: 'bromine',
    description: 'Bromine command!',
    execute(message, args, Discord){
        const bromineEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Bromine")
        .setDescription("Bromine is a chemical element with the symbol Br and atomic number 35. It is the third-lightest halogen, and is a fuming red-brown liquid at room temperature that evaporates readily to form a similarly coloured gas. Its properties are thus intermediate between those of chlorine and iodine.")
        .addFields(
        {name : "Symbol" , value : "Br" , inline : true},
        {name : "Atomic Mass" , value : "79.904 u" , inline : true},
        {name : "Atomic Number" , value : "35" , inline : true},
        {name : "Electronegativity" , value : "2.96 " , inline : true},
        {name : "Density" , value : "3.119 g/mL" , inline : true},
        {name : "Discoverer" , value : " Antoine Jérôme Balard" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(bromineEmbed)
    }
}