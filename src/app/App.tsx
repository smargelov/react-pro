import './styles/index.sass'
import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import bem from 'shared/lib/classNames/bem'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { useTheme } from 'app/providers/ThemeProvider'

const App = () => {
	const {theme, toggleTheme} = useTheme()
	return (
		<div className={bem('app',{[theme]: true})}>
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
			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path="/about" element={ <AboutPage/> }/>
					<Route path="/" element={ <MainPage/> }/>
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
