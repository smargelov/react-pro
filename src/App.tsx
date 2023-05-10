import './styles/index.sass'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'
import { useTheme } from './themes/useTheme'
import bem from './helpers/classNames/bem'

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
					<Route path="/about" element={ <AboutPageAsync/> }/>
					<Route path="/" element={ <MainPageAsync/> }/>
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
