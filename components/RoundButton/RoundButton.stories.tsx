import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import RoundButton from './RoundButton';

const meta = {
    title: 'RoundButton',
    component: RoundButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: fn()
    },
    args: { onClick: fn() },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        icon: <i className="fa-solid fa-sliders"></i>,
        onClick: fn()
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        icon: <i className="fa-solid fa-xmark"></i>,
        onClick: fn()
    },
};

