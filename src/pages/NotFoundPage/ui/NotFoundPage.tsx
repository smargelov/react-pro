import './NotFoundPage.scss'
import bem from 'shared/lib/classNames/bem'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
	className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation()
	return (
		<div className={bem('not-found-page', {}, [className])}>
			<h1>{t('404: Страница не найдена')}</h1>
		</div>
	)
}
