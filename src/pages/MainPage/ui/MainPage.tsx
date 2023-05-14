import { useTranslation } from 'react-i18next'

function MainPage() {
	const { t } = useTranslation('main')
	return (
		<div>
			{ t('ГЛАВНАЯ СТРАНИЦА') }
		</div>
	)
}

export default MainPage
