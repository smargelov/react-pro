import './styles/index.sass'
import { Link } from 'react-router-dom'
import bem from 'shared/lib/classNames/bem'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={ bem('app', { [theme]: true }) }>
			<nav>
				<ul>
					<li>
						<Link to="/">Main</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
				<button onClick={ toggleTheme }>Toggle theme</button>
			</nav>
			<AppRouter/>
		</div>
	)
}

export default App
