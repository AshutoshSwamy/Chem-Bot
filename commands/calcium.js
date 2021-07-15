module.exports = {
    name: 'calcium',
    description: 'Calcium command!',
    execute(message, args, Discord){
        const calciumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Calcium")
        .setDescription("Calcium is a chemical element with the symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air. Its physical and chemical properties are most similar to its heavier homologues strontium and barium.")
        .addFields(
        {name : "Symbol" , value : "Ca" , inline : true},
        {name : "Atomic Mass" , value : "40.078 u" , inline : true},
        {name : "Atomic Number" , value : "20" , inline : true},
        {name : "Electronegativity" , value : "1.00" , inline : true},
        {name : "Density" , value : "1.55 g/cm³" , inline : true},
        {name : "Discoverer" , value : "Humphry Davy" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(calciumEmbed)
    }
}