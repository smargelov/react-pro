import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

export function AppRouter() {
	const { t } = useTranslation()
	return (
		<Suspense fallback={<div>{t('Loading...')}</div>}>
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
