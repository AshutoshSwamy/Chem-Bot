module.exports = {
    name: 'gallium',
    description: 'Gallium command!',
    execute(message, args, Discord){
        const galliumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Gallium")
        .setDescription("Gallium is a chemical element with the symbol Ga and atomic number 31. Elemental gallium is a soft, silvery metal at standard temperature and pressure; however in its liquid state it becomes silvery white. If too much force is applied, the gallium may fracture conchoidally.")
        .addFields(
        {name : "Symbol" , value : "Ga" , inline : true},
        {name : "Atomic Mass" , value : "69.723 u" , inline : true},
        {name : "Atomic Number" , value : "31" , inline : true},
        {name : "Electronegativity" , value : "1.81" , inline : true},
        {name : "Density" , value : "5.90gm/cm³" , inline : true},
        {name : "Discoverer" , value : "Paul-Émile Lecoq de Boisbaudran" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(galliumEmbed)
    }
}