module.exports = {
    name: 'argon',
    description: 'Argon command!',
    execute(message, args, Discord){
        const argonEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Argon")
        .setDescription("Argon is a chemical element with the symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third-most abundant gas in the Earth's atmosphere, at 0.934%.")
        .addFields(
        {name : "Symbol" , value : "Ar" , inline : true},
        {name : "Atomic Mass" , value : "39.948 u" , inline : true},
        {name : "Atomic Number" , value : "18" , inline : true},
        {name : "Electronegativity" , value : "No Data" , inline : true},
        {name : "Density" , value : "1.784 g/L" , inline : true},
        {name : "Discoverer" , value : "William Ramsay" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(argonEmbed)
    }
}