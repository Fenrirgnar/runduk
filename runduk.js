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
    image: 'https://avatars.mds.yandex.net/i?id=bb6ac1d889880133bad5759fcc89b3e336a54cbf-12691405-images-thumbs&n=13'
  },
  {
    text: 'Ansuz',
    image: 'https://avatars.mds.yandex.net/i?id=6b424c4755aa3b16da15430c4dd658c8b832becc-9882580-images-thumbs&n=13'
  },
  {
    text: 'Raidu',
    image: 'https://avatars.mds.yandex.net/i?id=3c2b9081149e291ab0c2e75db1cd95c4ad93934c-5229005-images-thumbs&n=13'
  },
  {
    text: 'Wunju',
    image: 'https://avatars.mds.yandex.net/i?id=f949ff055823580cb444269e562f59cb7316c080-12938662-images-thumbs&n=13'
  },
  {
    text: 'Hagalaz',
    image: 'https://avatars.mds.yandex.net/i?id=37284abd7061a03550732077c315952dbd2c078c-10641465-images-thumbs&n=13'
  },
  {
    text: 'Naudiz',
    image: 'https://avatars.mds.yandex.net/i?id=4346c8717a9f72382b7135a646e6de32ca977896-12716737-images-thumbs&n=13'
  },
  {
    text: 'Isaz',
    image: 'https://avatars.mds.yandex.net/i?id=6aa1c233583efffce87c2ea14bc216682434e7e4-11003380-images-thumbs&n=13'
  },
  {
    text: 'Jara',
    image: 'https://avatars.mds.yandex.net/i?id=3b282fcb64181bec3b15e6323487d5e3064f0ae1-10812288-images-thumbs&n=13'
  },
  {
    text: 'Iwaz',
    image: 'https://avatars.mds.yandex.net/i?id=dddb3606e5a0dadf3789f24bb28f98cdb99aa648-8539554-images-thumbs&n=13'
  },
  {
    text: 'Perþu',
    image: 'https://avatars.mds.yandex.net/i?id=a41ab7b673f13768f1f0e9012826d222-4697805-images-thumbs&n=13'
  },
  {
    text: 'Algiz',
    image: 'https://avatars.mds.yandex.net/i?id=2a0000017a037552f5a9ea76418cf7c51834-4460890-images-thumbs&n=13'
  },
  {
    text: 'Sowilu',
    image: 'https://avatars.mds.yandex.net/i?id=9569189da07dc37e6f799e330b045ae2_sr-9068872-images-thumbs&n=13'
  },
  {
    text: 'Tiwaz',
    image: 'https://avatars.mds.yandex.net/i?id=42f94e1ad486224e65a12fa55be211f9f29fa0a8-9150622-images-thumbs&n=13'
  },
  {
    text: 'Berkana',
    image: 'https://avatars.mds.yandex.net/i?id=9d2486e4d83f70a3763477e77e5d01059f802ccf-5233584-images-thumbs&n=13'
  },
  {
    text: 'Ehwaz',
    image: 'https://avatars.mds.yandex.net/i?id=13aa7bdaca5ade4d2d4c0d4b9a14274227e10a55-12460761-images-thumbs&n=13'
  },
  {
    text: 'Mannaz',
    image: 'https://avatars.mds.yandex.net/i?id=817d957d4e6d6c892cf0476a671c80c6fa545bc8-10841731-images-thumbs&n=13'
  },
  {
    text: 'Laguz',
    image: 'https://avatars.mds.yandex.net/i?id=7b7adda94d5f2825f6fec8eb367d7ab73f0ebaa3-6974550-images-thumbs&n=13'
  },
  {
    text: 'Iŋwaz',
    image: 'https://avatars.mds.yandex.net/i?id=38d753b894e116b0d955002aaf8f105632187655-11374488-images-thumbs&n=13'
  },
  {
    text: 'Dagaz',
    image: 'hhttps://avatars.mds.yandex.net/i?id=868ae665e717f4c61d5d6677296c0563e80238b9-12932496-images-thumbs&n=13'
  },
  {
    text: 'Oþila',
    image: 'https://avatars.mds.yandex.net/i?id=6b2b7ba28269ec4773ed6818bb025f5330c8565c-12614240-images-thumbs&n=13'
  },
  /* {
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
  }, */
  
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