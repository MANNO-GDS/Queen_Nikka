const emojis = ['❤', '💕', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥']
const { smd, bot_ } = require('../lib')
let bots = false;
let utd = false;

smd({
  pattern: "areact",
  alias: ["autoreaction", "autoreact"],
  desc: "enable/disable auto reaction",
  category: "chats",
  filename: __filename
}, async (message, text) => {
  try {
    let checkinfo = await bot_.findOne({ 'id': `bot_${message.user}` }) || await bot_.new({ 'id': `bot_${message.user}` });
    let textt = text ? text.toLowerCase().trim() : '';
    let action = textt.startsWith('on') || textt.includes('act') || textt.includes('true') ? 'true' :
      textt.includes('disable') || textt.includes('deact') || textt.includes('off') ? 'false' :
      textt.includes('cmd') ? 'cmd' :
      textt.includes('all') ? 'all' : '';

    utd = true;

    if (!action) {
      await message.reply(`*_Auto_Reaction currently *${checkinfo.autoreaction === 'true' ? 'Enabled' : 'Disabled'}!_*\n${checkinfo.autoreaction === 'true' ? '' : `_Status: ${checkinfo.autoreaction}_\n`}*_Use on/cmd/all/off to Auto_Reaction_*`);
    } else {
      if (action === 'false') {
        if (checkinfo.autoreaction === 'false') return await message.reply('*_Auto_Reaction Already Disabled_*');
        await bot_.updateOne({ 'id': `bot_${message.user}` }, { 'autoreaction': 'false' });
        await message.reply('*_Auto_Reaction Succesfully Disable!_*');
      } else if (action === 'cmd' || action === 'all' || action === 'true') {
        if (checkinfo.autoreaction === action) return await message.reply('*_Auto_Reaction already enabled!_*');
        await bot_.updateOne({ 'id': `bot_${message.user}` }, { 'autoreaction': action });
        await message.send('*_Auto_Reaction succesfully enabled!_*');
      } else {
        await message.reply('*_Please provide valid instructions!_*\n*_Use true/all/cmd/off to set autoreaction!_*');
      }
    }
  } catch (e) {
    await message.error(`${e}\n\ncommand:areact`, e);
  }
});

smd({ on: "main" }, async (message, text, { icmd, chat, connection }) => {
  try {
    if (!message || message.reaction) return;
    if (!bots || utd) {
      bots = await bot_.findOne({ id: `bot_${message.user}` });
      utd = false;
    }
    if (!bots || !bots.autoreaction || bots.autoreaction === "false") return;
    else if (bots.autoreaction === 'true' || (icmd && bots.autoreaction === 'cmd')) {
      await message.react(emojis[Math.floor(Math.random() * (emojis.length))]);
    } else if (bots.autoreaction === 'all') {
      await message.react(mojis[Math.floor(Math.random() * (mojis.length))]);
    }
  } catch (e) {
    console.log("error in auto reatcion : ", e);
  }
});
