module.exports = {
    name: 'oxygen',
    description: 'Oxygen command!',
    execute(message, args, Discord){
        const oxygenEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Oxygen")
        .setDescription("Oxygen is the chemical element with the symbol O and atomic number 8. It is a member of the chalcogen group in the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds.")
        .addFields(
        {name : "Symbol" , value : "O" , inline : true},
        {name : "Atomic Mass" , value : "15.999 u" , inline : true},
        {name : "Atomic Number" , value : "8" , inline : true},
        {name : "Electronegativity" , value : "3.44" , inline : true},
        {name : "Density" , value : "1.429 g/L" , inline : true},
        {name : "Discoverer" , value : " Joseph Priestley" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(oxygenEmbed)
    }
}