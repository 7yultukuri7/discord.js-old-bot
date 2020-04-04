const Discord = require("discord.js");

class pageMenu {
  getEmbed(page) {
    let embed = new Discord.MessageEmbed()
      .setTitle(page.title)
      .setDescription(page.description)
      .setFooter(
          (this.currentPage + 1) +
        "ページ " +
          " / " +
          Object.keys(this.pages).length +
          "ページ"
      )
	    .setTimestamp()
      .setThumbnail(page.thumbnail ? page.thumbnail : null)
      .setImage(page.image ? page.image : null);

    if (page.fields) {
      page.fields.forEach(field => {
        embed.addField(field.name, field.value, field.inline || false);
      });
    }

    if (page.timestamp) embed.setTimestamp();

    if (page.url) embed.setURL(page.url);

    if (page.color) embed.setColor(page.color);
  

    return embed;
  }

 addPage(pageOptions) {
    if (
      !pageOptions.title ||
      !pageOptions.description ||
      !pageOptions.fields ||
      !pageOptions.color ||
      !pageOptions.thumbnail
    )
      throw new Error("addPageの引数が無効です。");

    return new Promise((resolve, reject) => {
      let title = pageOptions.title;
      let description = pageOptions.description;
      let pagefunction = pageOptions.function || undefined;
      let fields = pageOptions.fields;
      let color = pageOptions.color;
      let thumbnail = pageOptions.thumbnail;
      let push = {
        title: title,
        description: description,
        fields: fields,
        color: color,
        thumbnail: thumbnail
      };
      if (pagefunction) push.function = pagefunction;

      this.pages.push(push);

      resolve(this.pages);
    });
  }
  addPages(pages) {
    if (!pages) return new Error("addPageの引数が無効です。");

    return new Promise(async (resolve, reject) => {
      await pages.forEach(async page => {
        await this.addPage(page).catch(e => reject(e));
      });

      resolve(this.pages);
    });
  }

  removePage(index = undefined) {
    if (index == undefined) throw new Error("removePageの引数が無効です。");

    if (index > this.pages.length || index < 0)
      throw new Error("大きすぎるまたは小さすぎるインデックス。");

    return new Promise((resolve, reject) => {
      this.pages.splice(index, 1);
      resolve(this.pages);
    });
  }

  removePages(indices = undefined) {
    if (indices == undefined)
      throw new Error("removePagesの引数が無効です。(array)");

    return new Promise(async (resolve, reject) => {
      await indices.forEach(async index => {
        await this.removePage(index).catch(e => reject(e));
      });

      resolve(this.pages);
    });
  }

  swapPages(index1, index2) {
    if (index1 == undefined || index2 == undefined)
      throw new Error("swapPagesの引数が無効です。");

    let pagesize = this.pages.length;

    if (index1 > pagesize || index1 < 0 || index2 > pagesize || index2 < 0)
      throw new Error("指数が大きすぎるか小さすぎます。");

    return new Promise((resolve, reject) => {
      let temp = this.pages[index1];

      this.pages[index1] = this.pages[index2];
      this.pages[index2] = temp;

      resolve(this.pages);
    });
  }

  reversePages() {
    return new Promise((resolve, reject) => {
      resolve(this.pages.reverse());
    });
  }

  run() {
    if (this.pages.length < 0)
      return new Error("メニューにページがありません。");

    try {
      let message = this.message;

      message.channel
        .send({
          embed: new Discord.MessageEmbed()
            .setColor(this.waitingColor)
            .setAuthor(`${message.author.tag} / ${message.author.id}`, message.author.avatarURL())
            .setDescription(this.waitingText)
            .setTimestamp()
        })
        .then(async m => {
          for (let i = 0; i < this.emojis.length; i++) {
            await m.react(this.emojis[i]);
          }

          let page = this.pages[this.currentPage];

          m.edit({ embed: this.getEmbed(page) });

          const filter = (reaction, user) => {
            return (
              this.emojis.includes(reaction.emoji.name) &&
              user.id == message.author.id
            );
          };
          const collector = m.createReactionCollector(filter, {
            time: this.duration
          });

          collector.on("collect", async r => {
            switch (r.emoji.name) {
              case this.emojis[0]:
                this.currentPage = 0;
                break;
              case this.emojis[1]:
                  this.currentPage = 1;
                break;
              case this.emojis[2]:
                  this.currentPage = 2;
                break;
              case this.emojis[3]:
                collector.stop();
                return this;
              default:
                return;
            }

            page = this.pages[this.currentPage];

            await m.reactions.cache
              .find(react => react.emoji.name == r.emoji.name).users.remove(message.author.id);
            if (page.function) page.function();

            m.edit({ embed: this.getEmbed(page) });
          });

          collector.on("end", collected => {
            if (collected.size == 0) {
              this.expireFunction(m);
              m.clearReactions();
            }
          });

          return this;
        });
    } catch (e) {
      console.log("ドキュメントビューアエラー: " + e);
    }
  }

  getPage(index) {
    return this.pages[index];
  }

  page_addfield(name, value, inline = undefined, page) {
    if (inline == undefined) inline = false;
    if (!page.fields) page.fields = [];

    page.fields.push({
      name: name,
      value: value,
      inline: inline
    });
  }

  pages_addfield(name, value, inline = undefined, pages) {
    if (inline == undefined) inline = false;
    if (!pages.fields) pages.fields = [];

    pages.fields.push({
      name: name,
      value: value,
      inline: inline
    });
  }

  page_edit(type, val, page) {
    page[type] = val;
  }

  page_set_func(func, page) {
    page["function"] = func;
  }

  page_settimestamp(page) {
    page["timestamp"] = true;
  }

  constructor(message, pages, options = {}) {
    if (!message || !pages) throw new Error("ドキュメントビューアの引数が無効です。");

    this.message = message;
    this.pages = pages;
    this.duration = options.duration || 60000;
    this.currentPage = 0;
    this.emojis = options.emojis || ["📕", "🔷", "🔶", "⏹"];
    this.waitingText = options.waitingText || "ドキュメントビューア読み込み中…";
    this.waitingColor = options.waitingColor != undefined || 0;
    this.expireFunction =
      options.expireFunction ||
      function(message) {
        message.edit("ドキュメントビューアの有効期限が切れました", { embed: null });
      };

    pages.forEach(page => {
      page.addField = (name, value, inline) =>
        this.page_addfield(name, value, inline, page);
      page.setTitle = title => this.page_edit("title", title, page);
      page.setDescription = description =>
        this.page_edit("description", description, page);
      page.setFunction = func => this.page_set_func(func, page);
      page.setThumbnail = url_or_file =>
        this.page_edit("thumbnail", url_or_file, page);
      page.setImage = url_or_file => this.page_edit("image", url_or_file, page);
      page.addBlankField = inline =>
        this.page_addfield("\u200B", "\u200B", inline, page);
      page.setTimestamp = () => this.page_settimestamp(page);
      page.setURL = url => this.page_edit("url", url, page);
      page.setColor = color => this.page_edit("color", color, page);
    });
  }
}

module.exports = pageMenu;