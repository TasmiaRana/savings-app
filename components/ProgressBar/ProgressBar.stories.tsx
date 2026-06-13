import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProgressBar from './ProgressBar';

const meta = {
    title: 'ProgressBar',
    component: ProgressBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        totalAmount: 50000,
        savedAmount: 20000,
        title: 'Switzerland trip',
        icon: <span>💰</span>,
        currency: 'HUF',
        gradientIndex: 0
    },
};