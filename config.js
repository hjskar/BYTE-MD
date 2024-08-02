
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlZcC9RUzhONVliRDlpWlpnK0RieGJZSDZLa0RrVlJBUVVpUllLODUzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnJoREFFSDZkM1NOY2VHMlRWVGxXcEMvZXQ0dFpoWjFjUnowU0hwcFh5VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTHZiNVFUclRrb255eHByRFFXMkNHa3lXcEtabnZ5aE1GeUlqUmxMZUZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0eXMzT0dZSzBnZU0vdUsyblVtQ1ExaEd4ZTUycXRqR2x3OC9SWk0rZmxFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGN2YzSmd3Z1Z0WENkSEJWeUpRQ3lWNnBsa3JMRFFmKzdGZnJ1VXlnVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JQlFVU0pLWlpZRisxUkxFZHJaMVBUZTJxTmszaUpaRVFMSkVSTHFaRXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUoyQk4yM3JJMy83amo3akw3dkVUa29JWURLRlZ3OHEzNjh5bWNuNEhFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianAwcHpXSkVkRGN2ekV1VDd0VGh6QlYrUUlqMS9CK2VzQVJGUHlYVVNnQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldTbTI2dkg5VVhXSWo5NS9sNml0K0hWTkJkcjk0djlmcC9pVkNZWVNTNVJXUk5wdWY2TWdMRElHZGNYM0twYlk5VWUrK0NZaEdsQVZSQjhJK01sR2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJ4YlQzM1ZTS3pRbldMdkhLRTEzcGdxMlRxV3U5Z0pZUnFnNFJPQXNmSGpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODcxNDQzNzEwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMTcxRUJGRTc4NTlFNjVGMTU0RTQzMTNFQTZFQUNGQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTc1NDQxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg3MTQ0MzcxMDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzE0M0FCREE5MTFEMkJFODM1QzRCQzE2NzY2Mzg1RDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjU3NTQ0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4NzE0NDM3MTA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU3NDY5MzRGOUZENTQxMDcxNkY5OUUyOTE1QTMwODBGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1NzU0NDR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxODcxNDQzNzEwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzkwNEM2Q0YwQzY4N0NBQjk4Nzk3NTlBMzBGNzE2QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTc1NDQ0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPNXlPRHpUblFkLWdEcHFILXNkVTN3IiwicGhvbmVJZCI6ImQ2M2M5OTliLTVlOWItNDE3NS05ODE5LTA4ZWNmMGQ3ZmQwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCL3FVZVlkV0ZmamQ1S0pEeFROVko1YmRiZEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmFlRWF2aGNPN2NxRnprQ0MrY0VqUjdFcllJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlTUjZXNEdKIiwibWUiOnsiaWQiOiI5MTg3MTQ0MzcxMDY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcWY4YU1CRU1UVXNiVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqZktDSXdyazJ4bk12R09pV1ZDT041a0o3UmpJUWdkTkhvcCtabE1mcFhvPSIsImFjY291bnRTaWduYXR1cmUiOiJJSzhzVzFSeGFzWm5ab3dmMjNvSSt6eVFqc3E1R290eVZqb3RJOE9nbHo5cHlZdEdpMzIxQjV1a3k1TXMwNEtOSjlCWi9DNi9oMytLUU8rVkF3YU9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSENYMjBGcE1aaVk2VU1JYmZQQTMvMXZtSGtSblJzRXNCSVdKVFdOSU5DZ3dVaHhaSCtLVDhVck9LaXR4TlVvNitCOFVWTFN5NS9sZnpsYVhBRkE2aEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg3MTQ0MzcxMDY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZM3lnaU1LNU5zWnpMeGpvbGxRamplWkNlMFl5RUlIVFI2S2ZtWlRINlY2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTc1NDM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU12TiJ9" //Make sure session id starts with Byte;;;



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
