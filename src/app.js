const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET
});

module.exports =  app;