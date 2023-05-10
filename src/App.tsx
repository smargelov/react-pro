import './index.sass'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'

const App = () => {
	return (
		<div className="app">
			<nav>
				<ul>
					<li>
						<Link to="/">Main</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
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
