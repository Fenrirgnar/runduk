const TelegramBot = require('node-telegram-bot-api');
const token = '6863290425:AAG2ctyl-oxf-VEI71TxOQDfQjg8Gs8FqKk';
const bot = new TelegramBot(token, {polling: true});

/* const items = [
  {
    text: 'Random text 1',
    image: 'https://example.com/image1.jpg'
  },
  {
    text: 'Random text 2',
    image: 'https://example.com/image2.jpg'
  },
  {
    text: 'Random text 3',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 4',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 5',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 6',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 7',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 8',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 9',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 10',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 11',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 12',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 13',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 14',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 15',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 16',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 17',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 18',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 19',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 20',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 21',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 22',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 23',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Random text 24',
    image: 'https://example.com/image3.jpg'
  },
  
]; */


const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'начальное приветсвие'},
        {command: '/info', description: 'Информация'},
        {command: '/run', description: 'руна'},
    ])
    bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text;
      /* const randomIndex = Math.floor(Math.random() * items.length);
      const item = items[randomIndex]; */
        /* bot.sendMessage(chatId,`Руна ${text}`) */
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://chpic.su/_data/archived/stickers/r/re/real_viking.webp')
           return bot.sendMessage(chatId,`Добро пожаловать викинг ${msg.from.first_name}`)
        }
        if (text === '/info') {
           return bot.sendMessage(chatId,`Мы только создали бота, пока он гадает на 1 руну, но планируем сделать гадание до 3х рун`)
        }
        return bot.sendMessage(chatId, 'Попробуй повторить запрос')
    
      /* bot.sendPhoto(chatId, item.image, {caption: item.text});
      console.log(msg) */
      console.log(msg)
    });
}

start();