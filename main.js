require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith("js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Chem Bot is online!");
  client.user.setActivity("!help", { type: "WATCHING" });
});

client.on("guildMemberAdd", (member) => {
  member.guild.channels.cache
    .get("823512157097558037")
    .send(
      `**Hey 👋 <@${member.user.id}>, Welcome to the Chem Bot Support Server! Make sure you read <#787392760101470208> for important things!**`
    );
});

client.on("message", (message) => {
  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "info") {
    client.commands.get("info").execute(message, args, Discord);
  } else if (command === "inviteme") {
    client.commands.get("inviteme").execute(message, args, Discord);
  } else if (command === "help") {
    client.commands.get("help").execute(message, args, Discord);
  } else if (command === "mute") {
    client.commands.get("mute").execute(message, args, Discord);
  } else if (command === "unmute") {
    client.commands.get("unmute").execute(message, args, Discord);
  } else if (command === "kick") {
    client.commands.get("kick").execute(message, args, Discord);
  } else if (command === "ban") {
    client.commands.get("ban").execute(message, args, Discord);
  } else if (command === "clear") {
    client.commands.get("clear").execute(message, args, Discord);
  } else if (command === "suggestions") {
    client.commands.get("suggestions").execute(message, args, Discord);
  } else if (command === "reactionrole") {
    client.commands.get("reactionrole").execute(message, args, Discord, client);
  } else if (command === "modrole") {
    client.commands.get("modrole").execute(message, args, Discord, client);
  } else if (command === "periodictable") {
    client.commands.get("periodictable").execute(message, args, Discord);
  } else if (command === "playperiodictable") {
    client.commands.get("playperiodictable").execute(message, args, Discord);
  } else if (command === "chemistry") {
    client.commands.get("chemistry").execute(message, args, Discord);
  } else if (command === "atom") {
    client.commands.get("atom").execute(message, args, Discord);
  } else if (command === "molecule") {
    client.commands.get("molecule").execute(message, args, Discord);
  } else if (command === "ion") {
    client.commands.get("ion").execute(message, args, Discord);
  } else if (command === "element") {
    client.command.get("element").execute(message, args, Discord);
  } else if (command === "compound") {
    client.command.get("compound").execute(message, args, Discord);
  } else if (command === "mixture") {
    client.commands.get("mixture").execute(message, args, Discord);
  } else if (command === "gif") {
    client.commands.get("gif").execute(message, args, Discord);
  } else if (command === "hydrogen") {
    client.commands.get("hydrogen").execute(message, args, Discord);
  } else if (command === "helium") {
    client.commands.get("helium").execute(message, args, Discord);
  } else if (command === "lithium") {
    client.commands.get("lithium").execute(message, args, Discord);
  } else if (command === "beryllium") {
    client.commands.get("beryllium").execute(message, args, Discord);
  } else if (command === "boron") {
    client.commands.get("boron").execute(message, args, Discord);
  } else if (command === "carbon") {
    client.commands.get("carbon").execute(message, args, Discord);
  } else if (command === "nitrogen") {
    client.commands.get("nitrogen").execute(message, args, Discord);
  } else if (command === "oxygen") {
    client.commands.get("oxygen").execute(message, args, Discord);
  } else if (command === "fluorine") {
    client.commands.get("fluorine").execute(message, args, Discord);
  } else if (command === "neon") {
    client.commands.get("neon").execute(message, args, Discord);
  } else if (command === "sodium") {
    client.commands.get("sodium").execute(message, args, Discord);
  } else if (command === "magnesium") {
    client.commands.get("magnesium").execute(message, args, Discord);
  } else if (command === "aluminium") {
    client.commands.get("aluminium").execute(message, args, Discord);
  } else if (command === "silicon") {
    client.commands.get("silicon").execute(messgae, args, Discord);
  } else if (command === "phosphorous") {
    client.commands.get("phosphorous").execute(message, args, Discord);
  } else if (command === "sulfur") {
    client.commands.get("sulfur").execute(message, args, Discord);
  } else if (command === "chlorine") {
    client.commands.get("chlorine").execute(message, args, Discord);
  } else if (command === "argon") {
    client.commands.get("argon").execute(message, args, Discord);
  } else if (command === "potassium") {
    client.commands.get("potassium").execute(message, args, Discord);
  } else if (command === "calcium") {
    client.commands.get("calcium").execute(message, args, Discord);
  } else if (command === "scandium") {
    client.commands.get("scandium").execute(message, args, Discord);
  } else if (command === "titanium") {
    client.commands.get("titanium").execute(message, args, Discord);
  } else if (command === "vanadium") {
    client.commands.get("vanadium").execute(message, args, Discord);
  } else if (command === "chromium") {
    client.commands.get("chromium").execute(message, args, Discord);
  } else if (command === "manganese") {
    client.commands.get("manganese").execute(message, args, Discord);
  } else if (command === "iron") {
    client.commands.get("iron").execute(message, args, Discord);
  } else if (command === "cobalt") {
    client.commands.get("cobalt").execute(message, args, Discord);
  } else if (command === "nickel") {
    client.commands.get("nickel").execute(message, args, Discord);
  } else if (command === "copper") {
    client.commands.get("copper").execute(message, args, Discord);
  } else if (command === "zinc") {
    client.commands.get("zinc").execute(message, args, Discord);
  } else if (command === "gallium") {
    client.commands.get("gallium").execute(message, args, Discord);
  } else if (command === "germanium") {
    client.commands.get("germanium").execute(message, args, Discord);
  } else if (command === "arsenic") {
    client.commands.get("arsenic").execute(message, args, Discord);
  } else if (command === "selenium") {
    client.commands.get("selenium").execute(message, args, Discord);
  } else if (command === "bromine") {
    client.commands.get("bromine").execute(message, args, Discord);
  } else if (command === "krypton") {
    client.commands.get("krypton").execute(message, args, Discord);
  } else if (command === "rubidium") {
    client.commands.get("rubidium").execute(message, args, Discord);
  } else if (command === "strontium") {
    client.commands.get("strontium").execute(message, args, Discord);
  } else if (command === "yttrium") {
    client.commands.get("yttrium").execute(message, args, Discord);
  } else if (command === "zicronium") {
    client.commands.get("zicromium").execute(message, args, Discord);
  }
});

client.login(process.env.BOT_TOKEN);
