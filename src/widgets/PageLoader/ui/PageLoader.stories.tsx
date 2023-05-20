import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageLoader } from './PageLoader'

export default {
	title: 'widgets/PageLoader',
	component: PageLoader,
	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component: 'PageLoader component'
			}
		}
	}
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
