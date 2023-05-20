import './NotFoundPage.scss'
import bem from 'shared/lib/classNames/bem'
import { useTranslation } from 'react-i18next'

export const NotFoundPage = () => {
	const { t } = useTranslation()
	return (
		<div className={bem('not-found-page', {})}>
			<h1>{t('404: Страница не найдена')}</h1>
		</div>
	)
}
