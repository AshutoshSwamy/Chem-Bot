module.exports = {
    name: 'vanadium',
    description: 'Vanadium command!',
    execute(message, args, Discord) {
        const vanadiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Vanadium")
        .setDescription("Vanadium is a chemical element with the symbol V and atomic number 23. It is a hard, silvery-grey, malleable transition metal. The elemental metal is rarely found in nature, but once isolated artificially, the formation of an oxide layer somewhat stabilizes the free metal against further oxidation. ")
        .addFields(
        { name: "Symbol", value: "V", inline: true },
        { name: "Atomic Mass", value: "50.9415 u", inline: true },
        { name: "Atomic Number", value: "23", inline: true },
        { name: "Electronegativity", value: "1.63", inline: true },
        { name: "Density", value: "6.1 g/cm¯³", inline: true },
        { name: "Discoverer", value: "Andres Manuel del Rio", inline: true }
        )
        .setTimestamp()
        .setFooter("Chem Bot", "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(vanadiumEmbed)
    }
}