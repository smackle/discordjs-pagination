/* Pagination Async Function */
const paginate = async (
  msg,
  pages,
  emojiList = ["⏪", "◀️", "⏹️", "▶️", "⏩"],
  timeout = 120000,
  botReaction = false,
  userIDs = [msg.author.id]
) => {
  /* Checkpoints */
  if (!msg && !msg.channel)
    throw new Error(
      "The Message class object you have passed in is not a valid message."
    );
  if (!pages || pages.length === 0)
    throw new Error(
      "An array of pages were not passed in! Please make sure you have passed in at least one."
    );
  if (emojiList.length !== 5)
    throw new Error(
      "There needs to be five emojis! Look at the example on the NPM package or Github."
    );
  let page = 0;
  /* Send the first embed. */
  const curPage = await msg.channel.send(
    pages[page].setFooter(`Page ${page + 1} / ${pages.length}`)
  );
  /* Loop through the array of emojis and react to the embed. */
  for (const emoji of emojiList) await curPage.react(emoji);
  /* Create a reaction collector on the embed to handle reactions. */
  const reactionCollector = curPage.createReactionCollector(
    (reaction, user) =>
      emojiList.includes(reaction.emoji.name || reaction.emoji.id) &&
      botReaction === true
        ? user.bot
        : !user.bot && userIDs.includes(user.id),
    { time: timeout }
  );
  /* Collect Event */
  reactionCollector.on("collect", (reaction, user) => {
    reaction.users.remove(user);
    switch (reaction.emoji.name) {
      case emojiList[0]:
        /* First emoji indicates to go back to page 0 (first page). */
        page = 0;
        break;
      case emojiList[1]:
        /* Second emoji indicates to go back to the page before the current page the embed is on. */
        page = page > 0 ? --page : pages.length - 1;
        break;
      case emojiList[2]:
        /* Third emoji indicates to stop the reaction collection and remove all the emojis from the embed. */
        reactionCollector.stop();
        if (!curPage.deleted) {
          curPage.reactions.removeAll();
        }
        break;
      case emojiList[3]:
        /* Fourth emoji indicates to go forward to the page after the current page the embed is on. */
        page = page + 1 < pages.length ? ++page : 0;
        break;
      case emojiList[4]:
        /* Fifth emoji indicates to go forward to page X (last page). */
        page =
          pages.length -
          1; /* We subtract 1 from the pages.length because arrays start counting at 0 and not 1. */
        break;
      default:
        break;
    }
    /* Edit the embed to go to the current page number. */
    curPage.edit(pages[page].setFooter(`Page ${page + 1} / ${pages.length}`));
  });
  /* End Event */
  reactionCollector.on("end", () => {
    if (!curPage.deleted) {
      curPage.reactions.removeAll();
    }
  });
  /* Return the embed to the user so if they want to do anything with it, they can. */
  return curPage;
};

/* Export the function so that users can use the function outside of this file. */
module.exports = paginate;
