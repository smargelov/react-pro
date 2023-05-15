import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export function AppRouter() {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{ Object.values(routeConfig).map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={element}
					/>
				)) }
			</Routes>
		</Suspense>
	)
}
