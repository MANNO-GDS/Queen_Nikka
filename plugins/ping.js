const { smd } = require("../lib");
const { runtime } = require("../lib"); // Assuming you have a runtime function for uptime

smd(
  {
    pattern: "ping", 
    react: "🧭", 
    desc: "Check the bot's latency and uptime", 
    category: "misc",
    filename: __filename,
  },
  async (message, client) => {
    const start = Date.now();

    // Simulate a small delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Calculate latency
    const latency = Date.now() - start;

    // Get the bot's uptime
    const uptime = runtime(process.uptime());

    // Prepare final message with "Pong!", uptime, and latency
    const finalMessage = `
🤖 *Pong!*

*Latency:* ${latency}ms

*Uptime:* ${uptime}


== |💌| 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 |💌| ==
    `;

    // Send the final message directly
    await message.reply(finalMessage);
  }
);
