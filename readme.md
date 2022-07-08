# Rollbar Webhook to Telegram

This is a simple worker to take webhooks from [Rollbar](https://rollbar.com/) and send them to [Telegram](https://core.telegram.org/method/messages.sendMessage)

## Development

- Run `npx wrangler dev src/index.js` in your terminal to start a development server

## Deploy


- Create a [Telegram bot](https://core.telegram.org/bots)
- Work out your `CHAT_ID`, one way is to mesage your bot then visit api.telegram.org/bot<bot_token>/getUpdates
- Run `npx wrangler publish`
- Run `npx wrangler secret put BOT_TOKEN` 
- Run `npx wrangler secret put CHAT_ID` 
