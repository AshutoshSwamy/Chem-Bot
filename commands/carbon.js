module.exports = {
    name: 'carbon',
    description: 'Carbon command!',
    execute(message, args, Discord){
        const carbonEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Carbon")
        .setDescription("Carbon is a chemical element with the symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds. It belongs to group 14 of the periodic table. Carbon makes up only about 0.025 percent of Earth's crust.")
        .addFields(
        {name : "Symbol" , value : "C" , inline : true},
        {name : "Atomic Mass" , value : "12.0107 u" , inline : true},
        {name : "Atomic Number" , value : "6" , inline : true},
        {name : "Electronegativity" , value : "2.55" , inline : true},
        {name : "Density" , value : "1.8-2.1 g/cm" , inline : true},
        {name : "Discoverer" , value : "Antoine Lavoisier" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(carbonEmbed)
    }
}