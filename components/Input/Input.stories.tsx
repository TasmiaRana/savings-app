import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    setText: () => {},
    placeholder: "Enter my amount",
    leftIcon: <span>💰</span>,
    rightIcon: <span>HUF</span>
  },
};