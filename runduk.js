const TelegramBot = require('node-telegram-bot-api');
const token = '6863290425:AAG2ctyl-oxf-VEI71TxOQDfQjg8Gs8FqKk';
const bot = new TelegramBot(token, {polling: true});

const items = [
  {
    text: 'Fehu',
    image: 'https://i0.wp.com/taynoeznanie.com/wp-content/uploads/2019/09/fehu.jpg'
  },
  {
    text: 'Þurisaz',
    image: 'https://example.com/image2.jpg'
  },
  {
    text: 'Ansuz',
    image: 'https://example.com/image3.jpg'
  },
  {
    text: 'Raidu',
    image: 'https://example.com/image4.jpg'
  },
  {
    text: 'Wunju',
    image: 'https://example.com/image5.jpg'
  },
  {
    text: 'Hagalaz',
    image: 'https://example.com/image6.jpg'
  },
  {
    text: 'Random text 7',
    image: 'https://example.com/image7.jpg'
  },
  {
    text: 'Random text 8',
    image: 'https://example.com/image8.jpg'
  },
  {
    text: 'Random text 9',
    image: 'https://example.com/image9.jpg'
  },
  {
    text: 'Random text 10',
    image: 'https://example.com/image10.jpg'
  },
  {
    text: 'Random text 11',
    image: 'https://example.com/image11.jpg'
  },
  {
    text: 'Random text 12',
    image: 'https://example.com/image12.jpg'
  },
  {
    text: 'Random text 13',
    image: 'https://example.com/image13.jpg'
  },
  {
    text: 'Random text 14',
    image: 'https://example.com/image14.jpg'
  },
  {
    text: 'Random text 15',
    image: 'https://example.com/image15.jpg'
  },
  {
    text: 'Random text 16',
    image: 'https://example.com/image16.jpg'
  },
  {
    text: 'Random text 17',
    image: 'https://example.com/image17.jpg'
  },
  {
    text: 'Random text 18',
    image: 'https://example.com/image18.jpg'
  },
  {
    text: 'Random text 19',
    image: 'https://example.com/image19.jpg'
  },
  {
    text: 'Random text 20',
    image: 'https://example.com/image20.jpg'
  },
  {
    text: 'Random text 21',
    image: 'https://example.com/image21.jpg'
  },
  {
    text: 'Random text 22',
    image: 'https://example.com/image22.jpg'
  },
  {
    text: 'Random text 23',
    image: 'https://example.com/image23.jpg'
  },
  {
    text: 'Random text 24',
    image: 'https://example.com/image24.jpg'
  },
  
];


const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'начальное приветсвие'},
        {command: '/info', description: 'Информация'},
        {command: '/run', description: 'руна'},
    ])
    bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text;
      
      
        /* bot.sendMessage(chatId,`Руна ${text}`) */
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://chpic.su/_data/archived/stickers/r/re/real_viking.webp')
           return bot.sendMessage(chatId,`Добро пожаловать викинг ${msg.from.first_name}`)
        }
        if (text === '/info') {
           return bot.sendMessage(chatId,`Мы только создали бота, пока он гадает на 1 руну, но планируем сделать гадание до 3х рун`)
        }
        if (text === '/run') {
            const randomIndex = Math.floor(Math.random() * items.length);
            const item = items[randomIndex];
            bot.sendPhoto(chatId, item.image, /* {caption: item.text} */);
            bot.sendMessage(chatId,item.text);
        }
        /* return bot.sendMessage(chatId, 'Попробуй повторить запрос') */
    
      /* bot.sendPhoto(chatId, item.image, {caption: item.text});
      console.log(msg) */

    });
}

start();