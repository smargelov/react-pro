import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOTE_FOUND_PAGE = 'not-found-page'
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOTE_FOUND_PAGE]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: routePath[AppRoutes.MAIN],
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: routePath[AppRoutes.ABOUT],
		element: <AboutPage />
	},
	[AppRoutes.NOTE_FOUND_PAGE]: {
		path: routePath[AppRoutes.NOTE_FOUND_PAGE],
		element: <NotFoundPage />
	}
}
