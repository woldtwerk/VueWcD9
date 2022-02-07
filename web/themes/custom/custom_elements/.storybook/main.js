const vue = require('@vitejs/plugin-vue')
const path = require('path')

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  core: { builder: "storybook-builder-vite" },
  async viteFinal(config, { configType }) {
    config.resolve.alias['~/'] = `${path.resolve(__dirname, '../src')}/`,
    config.resolve.alias['.sb/'] = `${path.resolve(__dirname, '../.storybook')}/`,
    config.plugins.splice(config.plugins.findIndex(plugin => plugin.name === 'vite:vue'), 1)
    config.plugins.push(
      vue({
        customElement: true,
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('-')
          }
        }
      }),
    )
    return config;
  },
};
