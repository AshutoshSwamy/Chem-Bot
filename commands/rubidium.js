module.exports = {
    name: 'rubidium',
    description: 'Rubidium command!',
    execute(message, args, Discord){
        const rubidiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Rubidium")
        .setDescription("Rubidium is the chemical element with the symbol Rb and atomic number 37. Rubidium is a very soft, silvery-white metal in the alkali metal group. Rubidium metal shares similarities to potassium metal and caesium metal in physical appearance, softness and conductivity.")
        .addFields(
        {name : "Symbol" , value : "Rb" , inline : true},
        {name : "Atomic Mass" , value : "85.4678 u" , inline : true},
        {name : "Atomic Number" , value : "37 " , inline : true},
        {name : "Electronegativity" , value : "0.82 " , inline : true},
        {name : "Density" , value : "	1.53 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : " Robert Bunsen" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(rubidiumEmbed)
    }
}