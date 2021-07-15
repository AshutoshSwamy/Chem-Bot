module.exports = {
    name: 'helium',
    description: 'Helium command!',
    execute(message, args, Discord){
        const heliumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setTitle("Helium")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setDescription("Helium is a chemical element with the symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements.")
        .addFields(
        {name : "Symbol" , value : "He", inline : true},
        {name : "Atomic Mass" , value : "4.002602 u", inline : true},
        {name : "Atomic Number" , value : "2", inline : true},
        {name : "Electronegativity" , value : "2.20", inline : true},
        {name : "Density" , value  : "0.178*10¯³ g/cm¯³", inline : true},
        {name : "Discoverer" , value : "Pierre Janssen", inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(heliumEmbed)
    }
}