const discord = require("discord.js");
const bot = new discord.Client();
const token = ""; //Token  HERE;
const receivemsg = ["อีกะเทย", "อีตอแหล", "ไอมาค"];
const sendmsg = ["มึงสิกะเทย", "มึงอะฟอด", "เหี้ยยยที่สุด"];
bot.on("message", (msg) => {
  receivemsg.forEach((word, index) => {
    console.log("1");

    if (msg.content === word) {
      msg.reply(sendmsg[index]);
      console.log("2");
    }
  });
});

bot.login(token);
