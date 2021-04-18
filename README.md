

# @smacklex/discordjs-pagination

A simple utility to paginate Discord embeds. Built on discord.js@^12.0.0 (master) but should work on older versions. Compatible with MessageEmbeds, RichEmbeds (not tested). Pages are embeds.

NOTE: This is an edit of @xoalone/discord.js-pagination, I have configured it a little bit for my personal use.

# Installation

- `npm install @smacklex/discordjs-pagination`

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


paginationEmbed(msg, pages, emojiList, timeout, botReaction, userIDs);

```

# Preview


