module.exports = {
    name: 'chemistry',
    description: 'Chemistry command!',
    execute(message, args, Discord){
        const chemistryEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("What Is Chemistry ?")
        .setDescription("Chemistry Is The Scientific Discipline Involved With Elements & Compounds Composed Of Atoms, Molecules & Ions. It Is The Branch Of Science Concerned With The Substances Of Which Matter Is Composed, The Investigation Of Their Properties & Reactions & The Use Of Such Reactions To Form New Substances.")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(chemistryEmbed)
    }
}