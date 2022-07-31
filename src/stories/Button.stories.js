import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    onClick: {},
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'alternative',
        'dark',
        'light',
        'green',
        'red',
        'yellow',
        'purple',
      ],
    },
  },
};

const Template = args => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  label: 'Button',
  rounded: false,
};

export const Pill = Template.bind({});
Pill.args = {
  color: 'green',
  label: 'Button',
  rounded: true,
};
