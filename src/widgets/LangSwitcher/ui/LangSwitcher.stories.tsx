import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LangSwitcher } from './LangSwitcher'

export default {
	title: 'widgets/LangSwitcher',
	component: LangSwitcher,
	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component: 'LangSwitcher component'
			}
		}
	}
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />

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
