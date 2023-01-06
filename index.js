const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHATID;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Matches "/echo [whatever]"
bot.onText(/\/start/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = '환영합니다.';

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

bot.onText(/\/crawl (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const keyword = match[1]
    const resp = `키워드 ${keyword}로 크롤링을 시작합니다.`;
    const waitForMe = `잠시만 기다려주세요.`;

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
    bot.sendMessage(chatId, waitForMe);

    bot.sendDocument(chatId, '/Users/jake_kakao/lubiksss/telegram-bot/test.txt');
});

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on('message', (msg) => {
//     console.log(msg)
//     const chatId = msg.chat.id;
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });