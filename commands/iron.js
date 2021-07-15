module.exports = {
    name: 'iron',
    description: 'Iron command',
    execute(message, args, Discord){
        const ironEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Iron")
        .setDescription("Iron is a chemical element with symbol Fe and atomic number 26. It is a metal that belongs to the first transition series and group 8 of the periodic table. It is by mass the most common element on Earth, right in front of oxygen, forming much of Earth's outer and inner core.")
        .addFields(
        {name : "Symbol" , value : "Fe" , inline : true},
        {name : "Atomic Mass" , value : "55.845 u" , inline : true},
        {name : "Atomic Number" , value : "26" , inline : true},
        {name : "Electronegativity" , value : "1.83" , inline : true},
        {name : "Density" , value : "7.874 g/cm³" , inline : true},
        {name : "Discoverer" , value : "The name comes from the Anglo-Saxon name 'iren'." ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        msg.channel.send(ironEmbed)
    }
}