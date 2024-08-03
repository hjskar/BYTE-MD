
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
global.sudo = process.env.SUDO || "919744102854";
global.owner = process.env.OWNER_NUMBER || "917530060988";
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUYwMkUvSUpCaWt5UGY0YUl3cGJuQjNpNHlwKysrQzdPUnNmaHVBNFBXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzdUQzdjMzNiOWdDdFpydlc5SUNUZ0drWHEwUUhJUEcya1VnaWcwNVRHND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTUhjMWJHN2NXSzFxSGdZcTlFbG9DdDR0MjNNTmVJRlIxWTdVN2lEdkVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIra3FWelJKMFNrZzlSditXTVNvTXpxaU5ySksrdGtzc1RrSE1FdVRKRUhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKclZpV0RNVW13RWRsZEtEMkN2dDR4VFBreEprUFVwbDRvN2hqSGt2VTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ2Z0hnQS9RTUdydzRRTVNTTSt5WHJEVW9uTHlWb2pKbUVGRkdrYlYvWHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BsMFp6VzVMWW9kZnBncnE5WmpKd1c3RVo4WlFxdG82K3haeUdEelRWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEp4RVFORjVKeG5IM3oyS3BzUXRieEkyWWJsVHNPdjRRQkVWTERCVnloVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRQa2FEelRDRVA0ai81SUN4V2VobE5LMHlKQlNaelEycUZXa0NZZjVzZ21IWGhCN24yejlLMWtaY0Qzb0ZqL1pmamxDYXVoTnRJSmRVOC8vU0ExZmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJjejQ2MDZqaVBraTFBVnlud3dwZXdxbWdSZllablNod0U1ZGcwRys1TUdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzUzMDA2MDk4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRTg1NDhDREQyQzNEMzY4N0I2M0Y2RDY4NzU4NTEzOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzAxMzYwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTc1MzAwNjA5ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkU0N0ExMENGMzU1QjI5NUM2NjE0NUI3QjgzNTBENDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjcwMTM2MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWjZQWlhtRkpTU2VNOVRydGVLaG83USIsInBob25lSWQiOiJhYjdlMDgzZi1lY2JiLTRiMmYtYjkzYy0yMDg5NjZjMTU0MWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGRlK2tVaDN3Mnp5K2VxNzlqSmx1WHczc1dNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVoblFrZk9uYXNwTVNNaVZRTGowY0hLc3pJaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4RkpNQlFSRSIsIm1lIjp7ImlkIjoiOTE3NTMwMDYwOTg4OjQwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKGq/CdkajwnZG08J2RrPCdkazwnZG54pun8J2Rv/CdkazwnZG54piHIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZWgyRVlRb0t5NXRRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5L3NOb2FOaCtTNUFmMnF0RkplVGk1Qm54eDVZZm1oQi9mcTRTQzhtZ3pnPSIsImFjY291bnRTaWduYXR1cmUiOiJRczJwdGtoNk1COUc3TzExY3U2aWhDb2NvM1g4ZkNseUpKcjAwNFp5SmZMeWYyWUp0b3NqSzM3UlQ3a2JBd2RWd1FZWDR3eGtQbksxMXdVQ1V1dmREdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ0JRblhicnd6alROMXZKT1ZTRGxOVDAxblhxVm9Wc08xZ1ZwREx2ekZlcXJmbHV3WkQwNWkzSi85QTY3Tkw3VEVEeUpkUm8yenhoS0M3UWJEYUxyZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTc1MzAwNjA5ODg6NDBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmY3RGFHallma3VRSDlxclJTWGs0dVFaOGNlV0g1b1FmMzZ1RWd2Sm9NNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjcwMTM1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQeWEifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "🇧🇷⃞₊₉₁₇ͣ₅ͫ₃ͤͤ₀ͤ₀ͬ₆₀ᷤ₉ͤ₈ͬ₈ϟ➤⁩",
  packname: process.env.PACK_NAME || "↫𝑨𝑴𝑬𝑬𝑹⛧𝑿𝑹☇ ",
  botname: process.env.BOT_NAME || "Ameer Ser",
  ownername: process.env.OWNER_NAME || "↫𝑨𝑴𝑬𝑬𝑹⛧𝑿𝑹☇ ",
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
