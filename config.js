//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/MANNO-GDS/Queen_Nikka";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM";
global.website = process.env.GURL || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/pcv6wTh.jpeg";
global.devs = "923094029835";
global.sudo = process.env.SUDO || "923094029835";
global.owner = process.env.OWNER_NUMBER || "923094029835";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/pcv6wTh.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VhMXN4NlhvMFE5cjhEVytFVjZPdVdXLzhWLzlRT0VzaEpwdzRweHBXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidklJUU5pakZMWVdmcFVDOG8yVkwwT2JNTG56OW90cWtpVnJiUnBRd3BrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUFR2MUMzMG9YSERXcTVqZVltR0xqREZuRUFGQjJLcDZ1TnRRQlc5NGwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzeXFjUERvTWJMemgvU2JpSUZxUGNBVDdKeDFTWFd6am8xOElIb29HMzBFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CSEZtZVhmdmcwUStFaUVSUnhCTUdjWlJGVWMyQXB6eE90OGY1Q1h2Vnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldSN1R2VTZhelAvUDRyaVJMd29qL0FGOGh3dkhsaWFKejA1aCtTR3VZRXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdzYTFiOG8xSkJpWC9nT2c2RjJhMW5PdFpITlNuODg3SVd0cU1HOHlXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVlndUZJenY2ODFsc3BqajYwZkZGVGNrZi9ieHVQVW5CV25CSzBPaDZRWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpHWVQ1eVUzOXErZEloOWtXSGdPK0NCeFpTYW5GSk8rZ01hcFdXRVVhejA0eENCUm5zbHlxd0hWSjIrb0c2dTJJaktYK2tEVTZpUllvVEdFSGFKakJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6IlREcnI1eTAxUCt0S1JPdm1zWnpxcFBDeU1TeFUrMnRyK1pYdWdFZ0taYTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkllYWVabVRUU1VXOXozTENHQ0xFdGciLCJwaG9uZUlkIjoiMTM0OWEyYWQtNDM3YS00NDYwLTliMDEtMjgxNWQ5ZjViOTZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJUTcwZDBjSm1qR3hxTDlSMzI5VU56YkMvZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q0FMRndxWTBSZDVSc2ovZk9iTGd3S2hUTjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVlTSjFLQkoiLCJtZSI6eyJpZCI6IjkyMzA5NDAyOTgzNTo0N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTYW1paWkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0szdjBiNENFTTNlejdnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRQWEFVd0tnQ29hWmg1aFYvcnl3akJzQjN1SzdVK0xZaHh3ZSszSExHa0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZQNGUvN3lkSGZOdkw4c2ZJYjRYSHBtYjVDMmtKbjBEREtHalEzNlhSS1c1aE9ZbXFZZXFNellTNXVwRGpZYndadGhtbmFhZnkrN3c2RGk4b2dXMUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4Wm92b2xDam1GWFJtb3N0OTRQUllzdmQ3QjNzNU1MbWw0K2ZQdTFKRnpoTkNTUitKZHB0MnpNSTZzckt6UVc0OHFaTmRCUUpkZ0JHdVNnT2lrRkxCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA5NDAyOTgzNTo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVejF3Rk1Db0FxR21ZZVlWZjY4c0l3YkFkN2l1MVBpMkljY0h2dHh5eHBBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MzU5NzA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBpRCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 💌`",
  author: process.env.PACK_AUTHER || "Saim",
  packname: process.env.PACK_NAME || "Saim ❤️",
  botname: process.env.BOT_NAME || "💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 💌",
  ownername: process.env.OWNER_NAME || "SAIM",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
