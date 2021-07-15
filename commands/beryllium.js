module.exports = {
    name: 'beryllium',
    description: 'Beryllium command!',
    execute(message, args, Discord){
        const berylliumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Beryllium")
        .setDescription("Beryllium is a chemical element with the symbol Be and atomic number 4. It is a relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays. Within the cores of stars, beryllium is depleted as it is fused into heavier elements.")
        .addFields(
        {name : "Symbol" , value : "Be" , inline : true},
        {name : "Atomic Mass" , value : "9.012182 u" , inline : true},
        {name : "Atomic Number" , value : "4" , inline : true},
        {name : "Electronegativity" , value : "1.57" , inline : true},
        {name : "Density" , value : "1.85 g/cm³" , inline : true},
        {name : "Discoverer" , value : "Nicolas-Louis Vauquelin" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(berylliumEmbed)
    }
}