module.exports = {
    name: 'magnesium',
    description: 'Magnesium command!',
    execute(message, args, Discord){
        const magnesiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300") 
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Magnesium")
        .setDescription("Magnesium is a chemical element with the symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (group 2, or alkaline earth metals) of the periodic table: all group 2 elements have the same electron configuration in the outer electron shell and a similar crystal structure.")
        .addFields(
        {name : "Symbol" , value : "Mg" , inline : true},
        {name : "Atomic Mass" , value : "24.305 u" , inline : true},
        {name : "Atomic Number" , value : "12" , inline : true},
        {name : "Electronegativity" , value : "1.31" , inline : true},
        {name : "Density" , value : "	1.738 g/cm³" , inline : true},
        {name : "Discoverer" , value : "Joseph Black" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(magnesiumEmbed)
    }
}