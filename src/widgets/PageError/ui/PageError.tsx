import './PageError.scss'
import bem from 'shared/lib/classNames/bem'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from 'shared/ui/Button'

interface PageErrorProps {
	className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation()
	const reloadPage = () => window.location.reload()
	return (
		<div className={bem('page-error', {}, [className])}>
			<h1>{t('Произошла непредвиденная ошибка')}</h1>
			<Button onClick={reloadPage} bType={ButtonType.PRIMARY}>{t('Перезагрузить')}</Button>
		</div>
	)
}
