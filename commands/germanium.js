module.exports = {
    name: 'germanium',
    description: 'Germanium command!',
    execute(message, args, Discord){
        const germaniumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Germanium")
        .setDescription("Germanium is a chemical element with the symbol Ge and atomic number 32. It is a lustrous, hard-brittle, grayish-white metalloid in the carbon group, chemically similar to its group neighbors silicon and tin. Pure germanium is a semiconductor with an appearance similar to elemental silicon.")
        .addFields(
        {name : "Symbol" , value : "Ge" , inline : true},
        {name : "Atomic Mass" , value : "72.64 u" , inline : true},
        {name : "Atomic Number" , value : "32" , inline : true},
        {name : "Electronegativity" , value : "2.01 " , inline : true},
        {name : "Density" , value : "5.5 g/cm³" , inline : true},
        {name : "Discoverer" , value : "Clemens Winkler" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(germaniumEmbed)
    }
}