<div align="center">
  <p>
    <a href="https://nodei.co/npm/@xoalone/discordjs-pagination
/"><img src="https://nodei.co/npm/@xoalone/discordjs-pagination.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# @xoalone/discordjs-pagination

A simple utility to paginate Discord embeds. Built on discord.js@^12.0.0 (master) but should work on older versions. Compatible with MessageEmbeds, RichEmbeds (not tested). Pages are embeds.

NOTE: This is an edit of discord.js-pagination, I have added a lot of useful features.

# Installation

- `npm install @xoalone/discordjs-pagination`

# Usage

**Basic Bot Example**

```js
// Import the discord.js-pagination package
const paginationEmbed = require("@xoalone/discordjs-pagination");

// Use either MessageEmbed or RichEmbed to make pages
// Keep in mind that Embeds should't have their footers set since the pagination method sets page info there
const { MessageEmbed } = require("discord.js");
const embed1 = new MessageEmbed();

// Create an array of embeds
const pages = [
  embed1,
  embed2,
  //....
  embedn,
];

// Call the paginationEmbed method, first two arguments are required.
// msg is your Message class object.

// pages is your array of pages.

// emojiList is an array and the pagination controls, defaults to ['⏪', '◀️', '⏹️', '▶️', '⏩']. Also, you can use custom emojis, just provide their IDs instead of an unicode emoji. */

// timeout is an integer and the time until the reaction collectors are going to stop collection (in ms), after this you can't change pages, defaults to 120000 ms. */

// botReaction is a boolean and if it is set to true then bots can react to messages, defaults to false. */

// userIDs is an array and it allows you to add users who can react to the message with their ID, defaults to message.author.id.

paginationEmbed(msg, pages, emojiList, timeout, botReaction, userIDs);
// There you go, now you have paged embeds
```

# Preview

<img src="https://raw.githubusercontent.com/XoAlone/discordjs-pagination/master/example/demo.png" alt="DEMO" align="center" />

Here is the package used as an example.
