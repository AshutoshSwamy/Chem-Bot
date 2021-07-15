module.exports = {
    name: 'lithium',
    description: 'Lithium command!',
    execute(message, args, Discord){
        const lithiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setTitle("Lithium")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setDescription("Lithium compounds, also known as lithium salts, are primarily used as a psychiatric medication. It is primarily used to treat bipolar disorder and treat major depressive disorder that does not improve following the use of antidepressants. In these disorders, it reduces the risk of suicide. Lithium is taken orally.")
        .addFields(
        {name : "Symbol" , value : "Li", inline : true},
        {name : "Atomic Mass" , value : "6.941 u", inline : true},
        {name : "Atomic Number" , value : "3 ", inline : true},
        {name : "Electronegativity" , value : "0.98", inline : true},
        {name : "Density" , value : "0.534 g/cc", inline : true},
        {name : "Discoverer" , value : "Johan August Arfwedson", inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(lithiumEmbed)
    }
}