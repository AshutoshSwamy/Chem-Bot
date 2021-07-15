module.exports = {
    name: 'titanium',
    description: 'Titanium command!',
    execute(message, args, Discord){
        const titaniumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Titanium")
        .setDescription("Titanium is a chemical element with the symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density, and high strength. Titanium is resistant to corrosion in sea water, aqua regia, and chlorine.")
        .addFields(
        {name : "Symbol" , value : "Ti" , inline : true},
        {name : "Atomic Mass" , value : "47.867 u" , inline : true},
        {name : "Atomic Number" , value : "22" , inline : true},
        {name : "Electronegativity" , value : "1.54" , inline : true},
        {name : "Density" , value : "4.5 g/cm³" , inline : true},
        {name : "Discoverer" , value : "William Gregor" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(titaniumEmbed)
    }
}