const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://asta-md-vzs4.onrender.com"
global.email ="astromedia0010@gmail.com"
global.location="Astro,World"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0.yln1igg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Astropeda/Asta-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/JMsAFRD.jpeg" ;
global.caption = process.env.CAPTION || global.caption || "αѕтα-м∂ 2024" 


global.devs = "2348108144288"
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348108144288";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348108144288";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'
global.flush = process.env.FLUSH   || "false"; 
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" 
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/mHEqQgr.jpg,https://i.imgur.com/lSdca7B.jpg,https://i.imgur.com/XakNh3r.jpg,https://i.imgur.com/UslG8eB.jpg,https://i.imgur.com/0OQxTyt.jpg,https://i.imgur.com/MJCmdiA.jpg,https://i.imgur.com/K7zFZl2.jpg"
global.waPresence= process.env.WAPRESENCE ||  "online" ;


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348108144288";


global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348108144288";

global.api_smd = "https://api-smd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlWZ0JYdGQzd1Q0ZmFRaXk3SzlhWVNZMWFTNktCTkdPSm02NkgwVURVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnMwTXBXeTE5Wk1XK1N1a29yT1JZbkVueWRVZDAyaUpraGVaejZZMkIwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTXZPaE5jK3UwWWN5bWUwYmluYWhsZHFVWitSeEJwWlhzdEhDTGNmU25VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZlNIUWZhTFlkbGtYOU1mZlNnQ2xIdktJSWRjeTZmS0JXNlFUc1F3YkFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLZ29hWXlsaUc1dDRMcThTdUNGa2lmQW5DN1JnSGE4VzUwOVg5SXowSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5sYWhGVzRNZWZwQ0RYTzc2bHJwWGtiMFBWc2xmdFdQZ0txUlA4a0ZrejQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU82dFZnUkxDU3hPVkRTaFkyWW5sbTVodFlsRjVybVRhYS9tRnJFOGtGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjRKM1l1WXdiWEF4WnhzSy8vcjBWSm9JcmFJd3FsSWxQaXEvOXdHSEkyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ3M2ZzcVFaOEF3MFVYMEpzZGpNdk5zQ282NUFGWnhtZW1vaUpZSXUzMDMyUjcxM3ZIbUlqVTdjZUJWbnR2UkdJYnFlQVo1Rjc5OFZmTFdUMU9GSGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IjhwMkZyOXVXaGVGTU13TmIrRmVQcnpVMW9ISDVPWWcvVjVKUzczck9BOWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEwODE0NDI4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMjM1RUQzRTNCNTBDODBFMjM2Q0I0MTRBMTM0ODYwNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE1OTUwMDY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2Y1NEVDR2Y1RsdWFmMHZBRzFzT2NBIiwicGhvbmVJZCI6ImZjNGM2MmFjLTU3MTUtNGZjMy1iNzRhLTc3ZDVhOWU0ZWI2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5KzNiN1lYM0E1Zy9YWTZaZFl3ZW43TjAzNFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0kzbnZVUjJON0FyV1B3WFlIUWlWSHNQZGE4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBYOExWQUZLIiwibWUiOnsiaWQiOiIyMzQ4MTA4MTQ0Mjg4OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNoYWRvd2J5dGVlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTFZrYTBCRU9Lam5iSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMZFN0VWc1QThvVzg1TCt1ajBNVk8yUzJZUUJwbkVITCszSnVieS9za2dFPSIsImFjY291bnRTaWduYXR1cmUiOiJhckl1Sm5vQ3krWXVBQWltcXV1WC9ybDEyUG9oTzZQeFJnN1JxTWNtUjhxbUlWOE9sK2VFZlpZbmlndWkzdlE2K3M4Y0dpRkJGTitjK3ZXRzltMFdDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ1pJSEZkYkxQcXpHZmduUjl4cmRpUTR4dTNZSDRPeGJyenJ3NGNlclpKRkV0VnoxL1VCS1dOdFpKdEZ0dkZMMTg1OEhjdDh2MzliNk10Q3NVQnZLakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTA4MTQ0Mjg4OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMzVXJWSU9RUEtGdk9TL3JvOURGVHRrdG1FQWFaeEJ5L3R5Ym04djdKSUIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTU5NTAwNjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3M5In0="


module.exports = {

  menu: process.env.MENU || "v1", 

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.0",
  caption : global.caption || "αѕтα-м∂ 2024" , 
 
  author : process.env.PACK_AUTHER|| "αѕтяσ",
  packname: process.env.PACK_NAME || "αѕтяσ",
  botname : process.env.BOT_NAME  || "ᴀsᴛᴀ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "αѕтяσ",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "main"  ).toUpperCase(),
};
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated" // Don't Touch
global.isMongodb = false; // Don't Touch Else Bot Won't Work
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
