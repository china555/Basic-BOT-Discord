const discord = require("discord.js");
const bot = new discord.Client();
const token = "NzI3Mzk5MzI3NjEzNDUyMzE4.Xvrupg.mXAOXdSCTrxc4dLOTN6J-KIhxGQ";
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
