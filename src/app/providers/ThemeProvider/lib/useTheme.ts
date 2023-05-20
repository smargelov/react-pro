import { useContext } from 'react'
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

interface UseThemeResult {
	setTheme: (theme: Theme) => void,
	toggleTheme: () => void,
	theme: Theme
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	const setNewTheme = (newTheme: Theme) => {
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	const toggleTheme = () => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		setNewTheme(newTheme)
	}

	return {
		setTheme: setNewTheme,
		toggleTheme,
		theme
	}
}
