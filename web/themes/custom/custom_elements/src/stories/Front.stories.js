import { fetchDrupalPage } from '.sb/helper'

export default {
  title: 'Example/Front',
  parameters: {
    layout: 'fullscreen'
  }
};

const page = await fetchDrupalPage('body')

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user };
  },
  // Then, those values can be accessed directly in the template
  template: page,
  compilerOptions: {isCustomElement: (tag) => tag.includes('-')}
});

export const Front = Template.bind({});
