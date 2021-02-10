const paginationEmbed = async (
  msg,
  pages,
  emojiList = ["⏪", "◀️", "⏹️", "▶️", "⏩"],
  timeout = 120000,
  botReaction = false,
  userIDs = [msg.author.id]
) => {
  if (!msg && !msg.channel) throw new Error("Channel is inaccessible.");
  if (!pages) throw new Error("Pages are not given.");
  if (emojiList.length !== 5)
    throw new Error(
      "There needs to be five emojis! Look at the example on the NPM package or Github."
    );
  let page = 0;
  const curPage = await msg.channel.send(
    pages[page].setFooter(`Page ${page + 1} / ${pages.length}`)
  );
  for (const emoji of emojiList) await curPage.react(emoji);
  const reactionCollector = curPage.createReactionCollector(
    (reaction, user) =>
      emojiList.includes(reaction.emoji.name || reaction.emoji.id) &&
      botReaction === true
        ? user.bot
        : !user.bot && userIDs.includes(user.id),
    { time: timeout }
  );
  reactionCollector.on("collect", (reaction, user) => {
    reaction.users.remove(user);
    switch (reaction.emoji.name) {
      case emojiList[0]:
        page = 0;
        break;
      case emojiList[1]:
        page = page > 0 ? --page : pages.length - 1;
        break;
      case emojiList[2]:
        reactionCollector.stop();
        if (!curPage.deleted) {
          curPage.reactions.removeAll();
        }
        break;
      case emojiList[3]:
        page = page + 1 < pages.length ? ++page : 0;
        break;
      case emojiList[4]:
        page = pages.length - 1;
        break;
      default:
        break;
    }
    curPage.edit(pages[page].setFooter(`Page ${page + 1} / ${pages.length}`));
  });
  reactionCollector.on("end", () => {
    if (!curPage.deleted) {
      curPage.reactions.removeAll();
    }
  });
  return curPage;
};

module.exports = paginationEmbed;
