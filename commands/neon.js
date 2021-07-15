module.exports = {
    name: 'neon',
    description: 'Neon command!',
    execute(message, args, Discord){
        const neonEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Neon")
        .setDescription("Neon is a chemical element with the symbol Ne and atomic number 10. It is a noble gas. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.")
        .addFields(
        {name : "Symbol" , value : "Ne" , inline : true},
        {name : "Atomic Mass" , value : "20.180 u" , inline : true},
        {name : "Atomic Number" , value : "10" , inline : true},
        {name : "Electronegativity" , value : "No Data" , inline : true},
        {name : "Density" , value : "	0.9002 g/L" , inline : true},
        {name : "Discoverer" , value : "William Ramsay" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(neonEmbed)
    }
}