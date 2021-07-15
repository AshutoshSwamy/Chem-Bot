module.exports = {
    name: 'periodictable',
    description: 'Periodic Table command!',
    execute(message, args, Discord){
        const periodictable = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setImage("https://i.ibb.co/9yKLh4G/Periodic-Table.jpg")
        .setTitle("Click On It To See The Big Image")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(periodictable)
    }
}