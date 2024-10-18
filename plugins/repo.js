const axios = require("axios");
const { cmd } = require("../lib/plugins");
const { smd } = require("../lib");

smd({
  pattern: "botrepo",
  react: "💌",
  alias: ["repo", "bot"],
  desc: "Sends info about the WhatsApp bot repository",
  category: "general",
  filename: __filename
}, async (message) => {
  try {
    const response = await axios.get("https://github.com/MANNO-GDS/Queen_Nikka");
    const repoData = response.data;

    let replyMessage = `*📃WhatsApp Bot Repository Info*\n\n`;
    replyMessage += `*🩹Repository Name:* ${repoData.name}\n`;
    replyMessage += `*💭Description:* ${repoData.description || 'No description available'}\n`;
    replyMessage += `*⭐Stars:* ${repoData.stargazers_count}\n`;
    replyMessage += `📊Forks:* ${repoData.forks_count}\n`;
    replyMessage += `🌚Watchers:* ${repoData.watchers_count}\n`;
    replyMessage += `💭Open Issues:* ${repoData.open_issues_count}\n`;
    replyMessage += `🧭Repository URL:* [Click here]👉(https://github.com/MANNO-GDS/Queen_Nikka)\n`;

    await message.send(replyMessage);
  } catch (error) {
    await message.error("Error fetching repository info. Please try again later.", error);
  }
});
