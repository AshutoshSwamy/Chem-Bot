require("dotenv").config();
const axios = require("axios");

module.exports = {
  name: "gif",
  description: "Gif command!",
  execute(message, args, Discord) {
    const query = args.join(" ");
    if (!query) {
      message.channel.send("Please enter a search query to search a GIF!");
    } else {
      let url = `https://g.tenor.com/v1/search?q=${query}&key=${process.env.TENOR_API_KEY}&limit=100`;
      axios.get(url).then((res) => {
        const randomGIF = Math.floor(Math.random() * res.data.results.length);
        message.channel.send(res.data.results[randomGIF].url);
      });
    }
  },
};
