<div align="center">
  <p>
    <a href="https://nodei.co/npm/@xoalone/discordjs-pagination
/"><img src="https://nodei.co/npm/@xoalone/discordjs-pagination.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>


# discordjs-pagination
A simple utility to paginate discord embeds. Built on discord.js@^12.0.0 (master) but should work on older versions. Compatible with MessageEmbeds, RichEmbeds (not tested). Pages are embeds.

NOTE: This is an edit of discord.js-pagination, there is a back to homepage feature on this edit.

# Installation
* `npm install @xoalone/discordjs-pagination`

# Usage
__Basic Bot Example__
```js
// Import the discord.js-pagination package
const paginationEmbed = require('@xoalone/discordjs-pagination');

// Use either MessageEmbed or RichEmbed to make pages
// Keep in mind that Embeds should't have their footers set since the pagination method sets page info there
const { MessageEmbed } = require('discord.js');
const embed1 = new MessageEmbed();

// Create an array of embeds
pages = [
	embed1,
	embed2,
	//....
	embedn
];

// Call the paginationEmbed method, first two arguments are required
// emojiList is the pageturners defaults to ['⏪', '🚪', '⏩']
// timeout is the time till the reaction collectors are active, after this you can't change pages (in ms), defaults to 120000
paginationEmbed(msg, pages, emojiList, timeout);
// There you go, now you have paged embeds
```
# Preview
![Demo](https://raw.githubusercontent.com/XoAlone/discordjs-pagination/master/example/demo.png)

Here is the package used as an example.