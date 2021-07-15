module.exports = {
    name: 'boron',
    description: 'Boron command!',
    execute(message, args, Discord){
        const boronEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Beryllium")
        .setDescription("Boron is a chemical element with the symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in the Solar System and in the Earth's crust. It constitutes about 0.001 percent by weight of Earth's crust.")
        .addFields(
        {name : "Symbol" , value : "B" , inline : true},
        {name : "Atomic Mass" , value : "10.811 u" , inline : true},
        {name : "Atomic Number" , value : "5" , inline : true},
        {name : "Electronegativity" , value : "2.04" , inline : true},
        {name : "Density" , value : "2.08 g/cm³" , inline : true},
        {name : "Discoverer" , value : "Joseph Louis Gay-Lussac" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(boronEmbed)
    }
}