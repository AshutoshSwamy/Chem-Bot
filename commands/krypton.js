module.exports = {
    name: 'krypton',
    description: 'Krypton command!',
    execute(message, args, Discord){
        const kryptonEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Krypton")
        .setDescription("Krypton is a chemical element with the symbol Kr and atomic number 36. It is a colorless, odorless, tasteless noble gas that occurs in trace amounts in the atmosphere and is often used with other rare gases in fluorescent lamps. With rare exceptions, krypton is chemically inert.")
        .addFields(
        {name : "Symbol" , value : "Kr" , inline : true},
        {name : "Atomic Mass" , value : "83.798 u" , inline : true},
        {name : "Atomic Number" , value : "36" , inline : true},
        {name : "Electronegativity" , value : "2.96 " , inline : true},
        {name : "Density" , value : "	0.003425 g/cm¯³" , inline : true},
        {name : "Discoverer" , value : "Morris Travers" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(kryptonEmbed)
    }
}