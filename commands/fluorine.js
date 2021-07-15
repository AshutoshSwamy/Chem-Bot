module.exports = {
    name: 'fluorine',
    description: 'Fluorine command!',
    execute(message, args, Discord){
        const fluorineEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Fluorine")
        .setDescription("Fluorine is a chemical element with the symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive, as it reacts with all other elements, except for argon, neon, and helium.")
        .addFields(
        {name : "Symbol" , value : "F" , inline : true},
        {name : "Atomic Mass" , value : "18.998403 u" , inline : true},
        {name : "Atomic Number" , value : "9" , inline : true},
        {name : "Electronegativity" , value : "3.98" , inline : true},
        {name : "Density" , value : "	0.001553 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Henri Moissan" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(fluorineEmbed)
    }
}