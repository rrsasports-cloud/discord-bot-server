module.exports = {
  apps: [
    {
      name: "discord-bot",
      script: "index.js",
      watch: false,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
