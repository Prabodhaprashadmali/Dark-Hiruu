//═══════════════════════════════════════════════════════//
//
//                              ♥️HIRU𝚄_QUEEN 𝓫𝔂 Sihilel♥️
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94704209801']
global.premium = ['94704209801']
global.ownernomer = '94704209801'
global.ownername = '❤️ℙ𝕋𝔸𝔹𝕆𝔻ℍ𝔸 ℙℝ𝔸𝕊ℍ𝔸𝔻 𝕄𝔸𝕃𝕀ℕ𝔾𝔸❤️'
global.botname = '❤️ℙℝ𝔸𝔹𝕆𝔻ℍ𝔸 ℙℝ𝔸𝕊ℍ𝔸𝔻 𝕄𝔸𝕃𝕀ℕ𝔾𝔸 𝔹𝕆𝕋❤️'
global.footer = '©ℙℝ𝔸𝔹𝕆𝔻ℍ𝔸 ℙℝ𝔸𝕊ℍ𝔸𝔻 𝕄𝔸𝕃𝕀ℕ𝔾𝔸.'
global.ig = 'https://chat.whatsapp.com/Jow3H9DlzNw4XjLRCfmxsy'
global.region = '𝕊ℝ𝕀  𝕃𝔸ℕ𝕂𝔸'
global.sc = 'https://chat.whatsapp.com/Jow3H9DlzNw4XjLRCfmxsy'
global.myweb = 'https://chat.whatsapp.com/Jow3H9DlzNw4XjLRCfmxsy'
global.packname = '❤️ℙℝ𝔸𝔹𝕆𝔻ℍ𝔸 ℙℝ𝔸𝕊ℍ𝔸𝔻 𝕄𝔸𝕃𝕀ℕ𝔾𝔸❤️'
global.author = '❤️ℙℝ𝔸𝔹𝕆𝔻ℍ𝔸 ℙℝ𝔸𝕊ℍ𝔸𝔻 𝕄𝔸𝕃𝕀ℕ𝔾𝔸❤️'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: '♥️S+H♥️ ඇඩ්මින්ලට විතරයි මේක පුලුවන් ළමයෝ 🌝',
    botAdmin: '♥️S+H♥️ ඇඩ්මින් දියන්කෝ මුලින් 😒',
    owner: '♥️S+H♥ Owner ට විතරයි ළමයෝ ඕක පුලුවන් 🙏 ',
    group: '♥️S+H♥️ group වල විතරයි ඕක😒',
    private: '♥️S+H♥️ inbox විතරයි පුලුවන්🌝',
    bot: '♥️S+H♥️ මේක මට විතරයි පුලුවන්😌👍 ඔයා පාඩුවේ ඉන්න 😒',
    wait: '♥️S+H♥️ චුට්ටක් ඉන්න බබා 🌸🙏',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
