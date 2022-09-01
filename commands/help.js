const { EmbedBuilder } = require('discord.js')
module.exports = {
name: "help",
description: "Yardım almanızı sağlar.",
permissions: "0x0000000000000800",
options: [],
showHelp: false,
run: async (client, interaction) => {
    let lang = client.language
const commands = client.commands.filter(x => x.showHelp !== false);

const embed = new EmbedBuilder()
.setColor('007fff')
.setTitle(client.user.username)
.setThumbnail(client.user.displayAvatarURL())
.setDescription(lang.msg32)
.addFields([
{ name: `${lang.msg33}`, value: commands.map(x => `\`/${x.name}\``).join(' | ') }
])
.setTimestamp()
.setFooter({ text: `BETA` })
interaction.reply({ embeds: [embed] }).catch(e => { })
},
};
