module.exports = {
    name: 'chromium',
    decsription: 'Chromium command!',
    execute(message, args, Discord){
        const chromiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Chromium")
        .setDescription("Chromium is a chemical element with the symbol Cr and atomic number 24. It is the first element in group 6. It is a steely-grey, lustrous, hard and brittle transition metal. Chromium is the main additive in stainless steel, to which it adds anti-corrosive properties.")
        .addFields(
        {name : "Symbol" , value : "Cr" , inline : true},
        {name : "Atomic Mass" , value : "51.9961 u" , inline : true},
        {name : "Atomic Number" , value : "24" , inline : true},
        {name : "Electronegativity" , value : "1.66" , inline : true},
        {name : "Density" , value : "7.15 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Nicolas Louis Vauquelin" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(chromiumEmbed)
    }
}