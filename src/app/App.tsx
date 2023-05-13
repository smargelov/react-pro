import './styles/index.sass'
import bem from 'shared/lib/classNames/bem'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
	const { theme } = useTheme()
	return (
		<div className={ bem('app', { [theme]: true }) }>
			<Navbar className={ bem('app', 'navbar') }/>
			<Sidebar className={ bem('app', 'sidebar') }/>
			<div className={bem('app', 'content')}>
				<AppRouter/>
			</div>
		</div>
	)
}

export default App
