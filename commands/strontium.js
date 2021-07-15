module.exports = {
    name: 'strontium',
    description: 'Strontium command!',
    execute(message, args, Discord){
        const strontiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Strontium")
        .setDescription("Strontium is the chemical element with the symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white yellowish metallic element that is highly chemically reactive. The metal forms a dark oxide layer when it is exposed to air.")
        .addFields(
        {name : "Symbol" , value : "Sr" , inline : true},
        {name : "Atomic Mass" , value : "87.62u" , inline : true},
        {name : "Atomic Number" , value : "38 " , inline : true},
        {name : "Electronegativity" , value : "0.95 " , inline : true},
        {name : "Density" , value : "	2.6 Mg/m³" , inline : true},
        {name : "Discoverer" , value : "Humphry Davy" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(strontiumEmbed)
    }
}