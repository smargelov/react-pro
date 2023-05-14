import './Navbar.sass'
import bem from 'shared/lib/classNames/bem'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
	className?: string
}

export function Navbar({ className }: NavbarProps) {
	const { t } = useTranslation()
	return (
		<nav className={bem('navbar', {}, [className])}>
			<ul className={bem('navbar', 'list')}>
				<li className={bem('navbar', 'item')}>
					<Link className={bem('navbar', 'link')} to="/">{t('Главная')}</Link>
				</li>
				<li className={bem('navbar', 'item')}>
					<Link className={bem('navbar', 'link')} to="/about">{t('О нас')}</Link>
				</li>
			</ul>
		</nav>
	)
}
