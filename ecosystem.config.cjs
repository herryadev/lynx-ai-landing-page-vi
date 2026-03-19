/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: 'lynx-landing',
      script: 'pnpm',
      args: 'start',
      cwd: __dirname,
      env: { PORT: 5012 },
      interpreter: 'none',
    },
  ],
};
