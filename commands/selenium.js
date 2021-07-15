module.exports = {
    name: 'selenium',
    description: 'Selenium command!',
    execute(message, arsg, Discord){
        const seleniumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Selenium")
        .setDescription("Selenium is a chemical element with the symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between the elements above and below in the periodic table, sulfur and tellurium, and also has similarities to arsenic.")
        .addFields(
        {name : "Symbol" , value : "Se" , inline : true},
        {name : "Atomic Mass" , value : "78.96 u" , inline : true},
        {name : "Atomic Number" , value : "34" , inline : true},
        {name : "Electronegativity" , value : "2.55 " , inline : true},
        {name : "Density" , value : "4.28 g/cm³" , inline : true},
        {name : "Discoverer" , value : "Berzelius" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(seleniumEmbed)
    }
}