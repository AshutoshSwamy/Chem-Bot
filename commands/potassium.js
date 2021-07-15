module.exports = {
    name: 'potassium',
    description: 'Potassium command!',
    execute(message, args, Discord){
        const potassiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Potassium")
        .setDescription("Potassium is a chemical element with the symbol K and atomic number 19. Potassium is a silvery-white metal that is soft enough to be cut with a knife with little force. Potassium metal reacts rapidly with atmospheric oxygen to form flaky white potassium peroxide in only seconds of exposure.")
        .addFields(
        {name : "Symbol" , value : "K" , inline : true},
        {name : "Atomic Mass" , value : "39.0983 u" , inline : true},
        {name : "Atomic Number" , value : "19" , inline : true},
        {name : "Electronegativity" , value : "	0.82" , inline : true},
        {name : "Density" , value : "0.862 g/cc" , inline : true},
        {name : "Discoverer" , value : "Humphry Davy" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(potassiumEmbed)
    }
}