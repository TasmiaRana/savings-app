import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from './Input';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setText: () => { },
    placeholder: "Enter my amount",
    leftIcon: <span>💰</span>,
    rightIcon: <span>HUF</span>
  },
};