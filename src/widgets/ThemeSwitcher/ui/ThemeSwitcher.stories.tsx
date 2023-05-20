import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
	title: 'widgets/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs'],
	argTypes: {
		className: {
			name: 'Class name',
			description: 'Use "small" to make the button smaller'
		}
	},
	parameters: {
		docs: {
			code: {
				source: 'test'
			},
			description: {
				component: 'Component to switch between light and dark themes'
			}
		}
	}
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ThemeDecorator(Theme.LIGHT)]

export const DefaultSmall = Template.bind({})
DefaultSmall.args = {
	className: 'small'
}
DefaultSmall.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkSmall = Template.bind({})
DarkSmall.args = {
	className: 'small'
}
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)]
