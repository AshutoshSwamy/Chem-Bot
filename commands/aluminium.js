module.exports = {
    name: 'aluminium',
    decsription: 'Aluminium command!',
    execute(message, args, Discord){
        const aluminiumEmbed = new Discord.MessageEmbed()
        .setColor("#FFC300")
        .setThumbnail("https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        .setTitle("Aluminium")
        .setDescription("Aluminium (aluminum in American and Canadian English) is a chemical element with the symbol Al and atomic number 13. It is a silvery-white, soft, non-magnetic and ductile metal in the boron group. By mass, aluminium is the most abundant metal in the Earth's crust and the third most abundant element (after oxygen and silicon). The abundance of aluminium decreases relative to other elements at greater depths into Earth's mantle and beyond. The chief ore of aluminium is bauxite. Aluminium metal is highly reactive, so native specimens are rare and limited to extreme reducing environments. ")
        .addFields(
        {name : "Symbol" , value : "Al" , inline : true},
        {name : "Atomic Mass" , value : "24.305 u" , inline : true},
        {name : "Atomic Number" , value : "13" , inline : true},
        {name : "Electronegativity" , value : "1.61" , inline : true},
        {name : "Density" , value : "	2.7 g/cm³" , inline : true},
        {name : "Discoverer" , value : "	Hans Christian Ørsted" ,inline : true}
        )
        .setTimestamp()
        .setFooter("Chem Bot" , "https://serving.photos.photobox.com/829203883717b7cd3543a65b7651e1d86d2081ee13374df99846aa1e4479bb021a90aa9f.jpg")
        message.channel.send(aluminiumEmbed)
    }
}