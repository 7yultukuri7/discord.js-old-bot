const { Command } = require("discord.js-commando");
const { RichEmbed, discord } = require('discord.js');
const puppeteer = require('puppeteer');


const config = require("/app/config/main.js");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "webshot",
            aliases: ["ウェブショット"],
            group: "bot",
            memberName: "webshot",
            description: "ウェブショットをします。",
            guildOnly: true,
            args: [
                {
                    key: "url",
                    prompt: "実行したいURLを入力してください",
                    type: "string",
                },
            ],
        });
    }

    run(message, {url}) {
(async () => {
  //ブラウザを定義(headless:false ブラウザを表示する, true 表示しない)
  const browser = await puppeteer.launch({ headless: false });
  //タブを定義
  const page = await browser.newPage();
  //ブラウザのサイズを定義
  await page.setViewport({width: 1240, height:1080});

  //待機
  async function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  // Googleにアクセス
  await page.goto('https://www.google.co.jp/');
  // 検索窓に「ラクス　エンジニアブログ」と入力
  await page.type('.gLFyf', 'ラクス　エンジニアブログ');
  //スクリーンショット撮影
  await page.screenshot({path: 'google.png'});
  // 検索ボタンクリック
  //待機時間を設けないと止まってしまうことがあるので記述
  await sleep(5000);
  await page.focus('input[name="btnK"]');
  await page.click('input[name="btnK"]');
  //待機時間を設けないと止まってしまうことがあるので記述
  await sleep(5000);
  //スクリーンショット撮影
  await page.screenshot({path: 'search_result.png'});
  // 検索結果の先頭リンクをクリック
  await page.click('.rc > .r > a');
  //スクリーンショット撮影
  await page.screenshot({path: 'blog.png'});
  //ブラウザを閉じる
  await browser.close();
})();
        return
  }
};
