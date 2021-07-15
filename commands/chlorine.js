module.exports = {
    name: 'chlorine',
    description: 'Chlorine command!',
    execute(message, args, Discord){
        const chlorineEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Chlorine")
        .setDescription("Chlorine is a chemical element with the symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them. Chlorine is a yellow-green gas at room temperature.")
        .addFields(
        {name : "Symbol" , value : "Cl" , inline : true},
        {name : "Atomic Mass" , value : "35.453 u" , inline : true},
        {name : "Atomic Number" , value : "17" , inline : true},
        {name : "Electronegativity" , value : "3.16" , inline : true},
        {name : "Density" , value : "1.468 g/l" , inline : true},
        {name : "Discoverer" , value : "Carl Wilhelm Scheele" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(chlorineEmbed)
    }
}