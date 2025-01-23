const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    filename: 'main.js',
    path: join(__dirname, '../../dist/apps/backend'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ["./assets"],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    })
  ],
};
