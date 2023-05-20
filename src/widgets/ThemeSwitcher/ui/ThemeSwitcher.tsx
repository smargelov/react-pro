import './ThemeSwitcher.scss'
import bem from 'shared/lib/classNames/bem'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/dark-mode.svg'
import LightIcon from 'shared/assets/icons/light-mode.svg'
import { Button, ButtonType } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import React from 'react'

interface ThemeSwitcherProps {
	className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
	const { theme, toggleTheme } = useTheme()
	const { t } = useTranslation()
	return (
		<Button
			bType={ButtonType.CLEAR}
			className={bem('theme-switcher', { dark: theme === Theme.DARK }, [className])}
			onClick={toggleTheme}
			area-label={t('Toggle theme')}
		>
			<LightIcon className={bem('theme-switcher', 'icon', { dark: theme === Theme.DARK })} />
			<div
				className={bem('theme-switcher', 'button', { dark: theme === Theme.DARK })}
			/>
			<DarkIcon className={bem('theme-switcher', 'icon', { dark: theme === Theme.DARK })} />
		</Button>
	)
}
