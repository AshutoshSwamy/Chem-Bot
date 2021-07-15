module.exports = {
    name: 'clear',
    description: 'Clear command!',
    async execute(message, args, Discord){
        if(!args[0]) return message.reply('Please enter the amount of messages that you want to Clear!');
        if(isNaN(args[0])) return message.reply('Please enter a valid number!');

        if(args[0] > 100) return message.reply('You cannnot clear/delete more than 100 messages!');
        if(args[0] < 1) return message.reply('You must atleast clear/delete one message!');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}