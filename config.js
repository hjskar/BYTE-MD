
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "917530060988";
global.owner = process.env.OWNER_NUMBER || "918714437106";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUw4amFCZkhxb3JSZ2hJSTVrTE4rMW10ZG1nQjA5NGpWdWtFNkI4RmcyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2dQSWJNYU83d2ZSWTUrMlZGL3psdEdwWkdEWU9EKzdIck93TmRiUTR3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQUtFUDJOc09iMGpZRnlhL01xSWVyMEZKV25udzZoaXNQUUcvclJxUWxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKUDI0bElXcUR1YThUci9aSlFvdStjd2lYb1MyQ0tvNzhpQ3R0NVpJR3lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHbjE2WC83K0RZTS9mOUJRZTYyL2lqdHB3bWlvc1UvNk9ycm5uOSthM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlovbVc1bitkWkpzL3I0VkliZzlmV3ZYS2VNYkt2d3h1NFlLYVpMS1BGZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEpQMGhibEpDaytHY09xNVZad3BJMU5oSzFKOTI1cE54SSthMUVTcWkwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGorVUc3aTBBOFZSNGVaeXFZU1gwMTFyeVNUVU1sMU1mSGtkTFRpUHZ5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkppSC92dldYQ3IyajEzbjNrSWc4cUVFNXlpTEIwWEFRcmtPNys4V3V3S2lod3J3Q3ZuTSsyekdzNk5aeGprR1pERHZZRkJaSHAyUENndW5zSEFDeEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiUjRHN0NtazdzbDRzcXR2TDl1MU9QcnBBUjEvWlRxSFJlc0ZZd3FISk5oQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg3MTQ0MzcxMDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDdGOEUzRERCRERFQzZEQkI2NjgyREZDOTM5REFCNkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjU3NDI5Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4NzE0NDM3MTA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcxMTk4M0ZEQTZDNjlERDFFNzczMkNFOEZGQUVDMjA0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1NzQyOTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxODcxNDQzNzEwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0MURBNDZFMDA0MDM2NUE4MEQ0ODU5Q0Y5NTA1MDYxNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTc0MjkzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg3MTQ0MzcxMDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDdGQTE4M0M5RjZCMzYwMjJGNTYzMDk4MjZFNENDOTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjU3NDI5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNGIwdDZIZ1BTRUt1TVExbUx1aDE3dyIsInBob25lSWQiOiIyZWY4ZTgyNi00NzY4LTQ3MGEtOTUxNS05NGE5NDcwMTIwNmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXNkem0wV3l1K29uV3BTWGF0aHJ0L1QwQklVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRSWStLM09RUWY5S200eDk3U3ZoTXhpOXNlTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXUkZENVJTWiIsIm1lIjp7ImlkIjoiOTE4NzE0NDM3MTA2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnFmOGFNQkVNWExzYlVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiamZLQ0l3cmsyeG5NdkdPaVdWQ09ONWtKN1JqSVFnZE5Ib3ArWmxNZnBYbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRmRzck1OSEpBQ05uY0o2d0Nnc2taaWdmYlZkRkRvYzlKZWx0aEhPYk9VM0VCUXpGSmNOMnp0blJEenk1WkcvQnFGZW1IMldEbU0xWjRhUTIwTnFWQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjlpdGNoOWlzTlVqQ1REa3VPbTg0d0c5U0xrWVpnT3FCdUY1YTE2Q2UvNWZSbzVxaStKeW5MVU5uS25kZkRETjhUWFhlZm5jYkZaZTZRbXVYMUk5MUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4NzE0NDM3MTA2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTN5Z2lNSzVOc1p6THhqb2xsUWpqZVpDZTBZeUVJSFRSNktmbVpUSDZWNiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjU3NDI5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNdk4ifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "𝗻 𝗮 𝗿 𝙯 𝗼 ↧ 𝗴 𝗼 𝗱",
  botname: process.env.BOT_NAME || "𝗻 𝗮 𝗿 𝙯 𝗼 ↧ 𝗴 𝗼 𝗱",
  ownername: process.env.OWNER_NAME || "𝗻 𝗮 𝗿 𝙯 𝗼 ↧ 𝗴 𝗼 𝗱",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
