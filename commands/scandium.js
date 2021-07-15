module.exports = {
    name: 'scandium',
    description: 'Scandium command!',
    execute(message, args, Discord){
        const scandiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Scandium")
        .setDescription("Scandium is a chemical element with the symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been classified as a rare-earth element, together with yttrium and the lanthanides.")
        .addFields(
        {name : "Symbol" , value : "Sc" , inline : true},
        {name : "Atomic Mass" , value : " 44.955912 u" , inline : true},
        {name : "Atomic Number" , value : "21" , inline : true},
        {name : "Electronegativity" , value : "1.36" , inline : true},
        {name : "Density" , value : "3.0 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Lars Fredrik Nilson" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(scandiumEmbed)
    }
}