module.exports = {
    name: 'manganese',
    description: 'Manganese command!',
    execute(message, args, Discord){
        const manganeseEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Manganese")
        .setDescription("Manganese is a chemical element with the symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in minerals in combination with iron. Manganese is a transition metal with a multifaceted array of industrial alloy uses, particularly in stainless steels.")
        .addFields(
        {name : "Symbol" , value : "Mn" , inline : true},
        {name : "Atomic Mass" , value : "54.938044 u" , inline : true},
        {name : "Atomic Number" , value : "25" , inline : true},
        {name : "Electronegativity" , value : "1.55" , inline : true},
        {name : "Density" , value : "7.43 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : " Johan Gottlieb Gahn" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(manganeseEmbed)
    }
}