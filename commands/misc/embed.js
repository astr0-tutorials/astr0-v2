const { WebEmbed } = require('discord.js-selfbot-v13');

module.exports = {
    name: "embed",
    aliases: [],
    description: "Sends an embed.",
    run: async (message, args, command, client) => {

      message.delete();

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 3000)
      }

      if (!args[0]) return await message.channel.send("Please put some arguments to customize your embed");
      const allParameters = args.join(' ');

      try {
          var embedTitle = allParameters.split("title: ")[1].split(',')[0];
      } catch {
          var embedTitle = ""
      }

      try {
          var embedAuthor = allParameters.split("author: ")[1].split(',')[0];
      } catch {
          var embedAuthor = ""
      }

      try {
          var embedColor = allParameters.split("color: ")[1].split(',')[0];
      } catch {
          var embedColor = ""
      }

      try {
          var embedDescription = allParameters.split("description: ")[1].split(',')[0];
      } catch {
          var embedDescription = ""
      }

      try {
          var embedImage = allParameters.split("image: ")[1].split(',')[0];
      } catch {
          var embedImage = ""
      }

      try {
          var embedThumbnail = allParameters.split("thumbnail: ")[1].split(',')[0];
      } catch {
          var embedThumbnail = ""
      }

      try {
          var embedProvider = allParameters.split("provider: ")[1].split(',')[0];
      } catch {
          var embedProvider = ""
      }

      if(!embedTitle) return await message.channel.send("Please specify a title for your embed.").then(m => deleteMessage(m));
      if(embedImage && embedThumbnail) return await message.channel.send("You can either put an image or a thumbnail on your embed, but not both!").then(m => deleteMessage(m));

      var finalEmbed = new WebEmbed().setTitle(embedTitle);

      if(embedDescription) finalEmbed.setDescription(embedDescription);
      if(embedAuthor) finalEmbed.setAuthor({
          name: embedAuthor
      })
      if(embedProvider) finalEmbed.setProvider({
          name: embedProvider
      })
      if(embedColor) finalEmbed.setColor(embedColor);
      if(embedImage) finalEmbed.setImage(embedImage);
      if(embedThumbnail) finalEmbed.setThumbnail(embedThumbnail);

      message.channel.send({
          embeds: finalEmbed
      });

    }
}
