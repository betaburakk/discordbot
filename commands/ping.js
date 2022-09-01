const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: "ping",
  description: "Ping.",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    let lang = client.language
    const start = Date.now();
    interaction.reply("Pong!").then(msg => {
      const end = Date.now();
      const embed = new EmbedBuilder()
        .setColor('007fff')
        .setTitle(client.user.username + " - Pong!")
        .setThumbnail(client.user.displayAvatarURL())
        .addFields([
          { name: lang.msg49, value: `\`${end - start}ms\` 🛰️` },
          { name: lang.msg50, value: `\`${Date.now() - start}ms\` 🛰️` },
          { name: lang.msg51, value: `\`${Math.round(client.ws.ping)}ms\` 🛰️` }
        ])
        .setTimestamp()
        .setFooter({ text: `BETA` })
      return interaction.editReply({ embeds: [embed] }).catch(e => { });
    }).catch(err => { })
  },
};
