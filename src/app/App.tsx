import './styles/index.scss'
import bem from 'shared/lib/classNames/bem'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'

function App() {
	const { theme } = useTheme()
	return (
		<Suspense fallback="">
			<div className={bem('app', { [theme]: true })}>
				<Navbar className={bem('app', 'navbar')} />
				<Sidebar className={bem('app', 'sidebar')} />
				<div className={bem('app', 'content')}>
					<AppRouter />
				</div>
			</div>
		</Suspense>
	)
}

export default App
