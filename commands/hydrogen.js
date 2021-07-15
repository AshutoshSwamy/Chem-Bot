module.exports = {
    name: 'hydrogen',
    description: 'Hydrogen command!',
    execute(message, args, Discord){
        const hydrogenEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Hydrogen")
        .setDescription("Hydrogen is the chemical element with the symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass.")
        .addFields(
        {name : "Symbol" , value : "H", inline : true},
        {name : "Atomic Mass" , value : "1.00784 u", inline : true},
        {name : "Atomic Number" , value : "1", inline : true},
        {name : "Electronegativity" , value : "2.2", inline : true},
        {name : "Density" , value  : "42 kg/m³", inline : true},          
        {name : "Discoverer" , value : "Henry Cavendish", inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(hydrogenEmbed)
    }
}