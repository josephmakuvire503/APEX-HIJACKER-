const BOT_NAME = "APEX HIJACKER";
const OWNER_NAME = "CYBER MAN";
const PARTNER_NAME = "DANGER GUY";
const VERSION = "1.0.0";
const PREFIX = ".";

const OWNER_NUMBER = "+263781768235";
const PARTNER_NUMBER = "+263788723887";

const menus = {
main: [
".menu",
".all-menu",
".help",
".gc-menu",
".chnn-menu",
".social-menu",
".ping",
".alive",
".owner",
".uptime"
],

group: [
".groupinfo",
".tagall",
".hidetag",
".welcome",
".goodbye",
".antilink",
".promote",
".demote",
".kick",
".admins",
".mute",
".unmute"
],

channel: [
".channelinfo",
".channel-link",
".channel-help"
],

social: [
".song",
".video",
".tiktok",
".instagram",
".facebook"
],

text: [
".fancy",
".quote",
".reverse",
".uppercase",
".lowercase",
".sticker",
".toimg"
],

fun: [
".joke",
".fact",
".riddle",
".compliment",
".8ball"
],

utilities: [
".time",
".date",
".calculator",
".qr",
".translate"
],

settings: [
".prefix",
".mode",
".settings",
".restart"
]
};

function createSection(title, commands) {
return [
"> ╭┈〔 *${title}* 〕",
"> ┆𖤍╭────↯",
...commands.map(command => "> ┃𖤍│➣ *${command}*"),
"> ┆𖤍╰────↯",
"> ╰┄┄┄┄┄┄┄┄┄┄┄┄┄〩"
].join("\n");
}

function createMenu() {
return [
createSection("𝙸𝙽𝙵𝙾 𝙱𝙾𝚃", [
"𝙽𝙰𝙼𝙴: ${BOT_NAME}",
"𝙾𝚆𝙽𝙴𝚁: ${OWNER_NAME}",
"𝙿𝙰𝚁𝚃𝙽𝙴𝚁: ${PARTNER_NAME}",
"𝚅𝙴𝚁𝚂𝙸𝙾𝙽: ${VERSION}",
"𝙿𝚁𝙴𝙵𝙸𝚇: ${PREFIX}",
"𝙾𝚆𝙽𝙴𝚁: ${OWNER_NUMBER}",
"𝙿𝙰𝚁𝚃𝙽𝙴𝚁: ${PARTNER_NUMBER}"
]),
createSection("𝟶𝟷. 𝙼𝙰𝙸𝙽 𝙼𝙴𝙽𝚄", menus.main),
createSection("𝟶𝟸. 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄", [
".gc-menu",
...menus.group
]),
createSection("𝟶𝟹. 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙼𝙴𝙽𝚄", [
".chnn-menu",
...menus.channel
]),
createSection("𝟶𝟺. 𝚂𝙾𝙲𝙸𝙰𝙻 𝙼𝙴𝙽𝚄", [
".social-menu",
...menus.social
]),
createSection("𝟶𝟻. 𝚃𝙴𝚇𝚃 𝚃𝙾𝙾𝙻𝚂", menus.text),
createSection("𝟶𝟼. 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄", menus.fun),
createSection("𝟶𝟽. 𝚄𝚃𝙸𝙻𝙸𝚃𝙸𝙴𝚂", menus.utilities),
createSection("𝟶𝟾. 𝙱𝙾𝚃 𝚂𝙴𝚃𝚃𝙸𝙽𝙶𝚂", menus.settings),
"> ⚡ *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝚈𝙱𝙴𝚁-𝙼𝙰𝙽*"
].join("\n\n");
}

function getAllCommands() {
return [...new Set(Object.values(menus).flat())];
}

function handleCommand(command) {
switch (command.toLowerCase()) {
case ".menu":
case ".all-menu":
case ".help":
return createMenu();

case ".gc-menu":
  return createSection("𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄", menus.group);

case ".chnn-menu":
  return createSection("𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙼𝙴𝙽𝚄", menus.channel);

case ".social-menu":
  return createSection("𝚂𝙾𝙲𝙸𝙰𝙻 𝙼𝙴𝙽𝚄", menus.social);

case ".ping":
  return "🏓 PONG! APEX HIJACKER is running.";

case ".alive":
  return `✅ ${BOT_NAME} is alive!\nVersion: ${VERSION}`;

case ".owner":
  return `👑 ${OWNER_NAME}: ${OWNER_NUMBER}\n🤝 ${PARTNER_NAME}: ${PARTNER_NUMBER}`;

case ".uptime":
  return "⏱️ Uptime ichawanikwa kana bot yabatanidzwa neWhatsApp.";

default:
  return null;

}
}

module.exports = {
BOT_NAME,
OWNER_NAME,
PARTNER_NAME,
VERSION,
PREFIX,
OWNER_NUMBER,
PARTNER_NUMBER,
menus,
createMenu,
getAllCommands,
handleCommand
};
