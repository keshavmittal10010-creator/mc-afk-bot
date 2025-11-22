const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST,         // Your server IP
    port: parseInt(process.env.MC_PORT) || 25565, // Default port 25565
    username: process.env.BOT_USERNAME, // Bot username
    version: process.env.MC_VERSION || "1.12.2"
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
