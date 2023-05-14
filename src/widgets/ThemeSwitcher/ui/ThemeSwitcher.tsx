import './ThemeSwitcher.sass'
import bem from 'shared/lib/classNames/bem'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/dark-mode.svg'
import LightIcon from 'shared/assets/icons/light-mode.svg'
import { Button, ButtonType } from 'shared/ui/Button'

interface ThemeSwitcherProps {
	className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={bem('theme-switcher', { dark: theme === 'dark' }, [className])}>
			<LightIcon className={bem('theme-switcher', 'icon', { dark: theme === Theme.DARK })} />
			<Button
				bType={ButtonType.CLEAN}
				onClick={toggleTheme}
				className={bem('theme-switcher', 'button', { dark: theme === Theme.DARK })}
				area-label="Toggle theme"
			/>
			<DarkIcon className={bem('theme-switcher', 'icon', { dark: theme === Theme.DARK })} />
		</div>
	)
}
