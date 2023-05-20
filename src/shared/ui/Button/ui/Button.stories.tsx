import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonSize, ButtonType } from './Button'

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		children: {
			name: 'Content'
		},
		bType: {
			name: 'Button Type',
			defaultValue: ButtonType.PRIMARY,
			description: 'Changes the button\'s color scheme',
			control: {
				label: 'Button Type',
				type: 'select',
				options: Object.values(ButtonType)
			}
		},
		size: {
			name: 'Size',
			defaultValue: ButtonSize.MEDIUM,
			control: {
				type: 'select',
				options: Object.values(ButtonSize)
			}
		},
		className: {
			name: 'Class Name'
		},
		type: {
			name: 'Native type',
			defaultValue: 'button',
			control: {
				type: 'select'
			}
		}
	},
	args: {
		children: 'Text'
	}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
