const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: "CRITSSMP.aternos.me",
    port: 39984,
    username: "BOT123",
    version: "1.12.2"
  })

  bot.on('spawn', () => {
    console.log("Bot joined server ✔")
    bot.chat("AFK bot online 👋")
  })

  bot.on('kick', (reason) => {
    console.log("Kicked ❌ Reason:", reason)
    console.log("Reconnecting in 10 seconds...")
    setTimeout(startBot, 10000)
  })

  bot.on('error', (err) => {
    console.log("Error:", err)
  })
}

startBot()
