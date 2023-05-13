import './styles/index.sass'
import bem from 'shared/lib/classNames/bem'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/navbar'

const App = () => {
	const { theme } = useTheme()
	return (
		<div className={ bem('app', { [theme]: true }) }>
			<NavBar/>
			<div className="main-content"><AppRouter/></div>
		</div>
	)
}

export default App
