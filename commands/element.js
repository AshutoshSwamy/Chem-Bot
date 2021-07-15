module.exports = {
    name: 'element',
    description: 'Element command!',
    execute(message, args, Discord){
        const elememtEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("What Is An Element ?")
        .setDescription("In Chemistry, An Element Is A Pure Substance Which Cannot Be Broken Down By Chemical Means, Consisting Of Atoms Which Have Identical Numbers Of Protons In Their Atomic Nuclei. The Number Of Protons In The Nucleus Is The Defining Property Of An Element, & Is Referred To As The Atomic Numbers.")
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(elememtEmbed)
    }
}