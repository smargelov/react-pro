import { Story } from '@storybook/react'
import React from 'react'
import { Theme, ThemeSBProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
	<ThemeSBProvider initialTheme={theme}>
		<div className={`story story--${theme}`}>
			<StoryComponent />
		</div>
	</ThemeSBProvider>
)
