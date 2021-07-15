module.exports = {
    name: 'silicon',
    description: 'Silicon command!',
    execute(message, args, Discord){
        const siliconEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Silicon")
        .setDescription("Silicon is a chemical element with the symbol Si and atomic number 14. It is a hard, brittle crystalline solid with a blue-grey metallic lustre, and is a tetravalent metalloid and semiconductor. It is a member of group 14 in the periodic table: carbon is above it; and germanium, tin, and lead are below it.")
        .addFields(
        {name : "Symbol" , value : "Si" , inline : true},
        {name : "Atomic Mass" , value : "28.0855 u" , inline : true},
        {name : "Atomic Number" , value : "14" , inline : true},
        {name : "Electronegativity" , value : "1.9" , inline : true},
        {name : "Density" , value : "	2.33 g/cm³" , inline : true},
        {name : "Discoverer" , value : "Antoine Lavoisier" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(siliconEmbed)
    }
}