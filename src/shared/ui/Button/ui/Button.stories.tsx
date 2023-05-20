import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonType } from './Button'

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text'
}

export const Clean = Template.bind({})
Clean.args = {
	children: 'Text',
	bType: ButtonType.CLEAN
}

export const Accent = Template.bind({})
Accent.args = {
	children: 'Text',
	bType: ButtonType.ACCENT
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: 'Text',
	bType: ButtonType.SECONDARY
}
