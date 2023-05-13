import './LangSwitcher.sass'
import bem from 'shared/lib/classNames/bem'
import { Button, ButtonType } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()
	return (
		<div className={ bem('lang-switcher', {}, [className]) }>
			<Button
				bType={ButtonType.CLEAN}
				className={ bem('lang-switcher', 'button', {'active': i18n.language === 'ru'}) }
				aria-label={ t('Переключить язык на русский') }
				onClick={ () => i18n.changeLanguage('ru')}
			>
				ru
			</Button>
			<Button
				bType={ButtonType.CLEAN}
				className={ bem('lang-switcher', 'button', {'active': i18n.language === 'en'}) }
				aria-label={ t('Переключить язык на английский') }
				onClick={ () => i18n.changeLanguage('en')}
			>
				en
			</Button>
		</div>
	)
}
