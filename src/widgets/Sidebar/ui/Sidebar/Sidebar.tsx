import './Sidebar.scss'
import bem from 'shared/lib/classNames/bem'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonType } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import ArrowCircle from 'shared/assets/icons/arrow-circle-left.svg'
import { Link } from 'react-router-dom'
import { AppRoutes, routePath } from 'shared/config/routeConfig/routeConfig'
import Home from 'shared/assets/icons/home.svg'
import Info from 'shared/assets/icons/feed.svg'

interface SidebarProps {
	className?: string
}

export function Sidebar({ className }: SidebarProps) {
	const { t } = useTranslation()
	const [collapsed, setCollapsed] = useState(false)
	const navbarElements = [
		{
			title: t('Главная'),
			link: routePath[AppRoutes.MAIN],
			icon: Home
		},
		{
			title: t('О нас'),
			link: routePath[AppRoutes.ABOUT],
			icon: Info
		}
	]
	const toggleSidebar = () => setCollapsed(!collapsed)
	return (
		<aside data-testid="sidebar" className={bem('sidebar', { collapsed }, [className])}>
			<Button
				data-testid="toggle-btn"
				onClick={toggleSidebar}
				className={bem('sidebar', 'toggle-btn', { collapsed })}
				bType={ButtonType.CLEAR}
			>
				<ArrowCircle className={bem('sidebar', 'toggle-icon', { collapsed })} />
				<span className={bem('sidebar', 'toggle-text')}>
					{collapsed ? t('развернуть') : t('свернуть')}
				</span>
			</Button>
			<div className={bem('sidebar', 'header')} />
			<div className={bem('sidebar', 'content')}>
				<nav className={
					[
						bem('sidebar', 'navbar'),
						bem('navbar')
					].join(' ')
				}
				>
					<ul className={bem('navbar', 'list')}>
						{navbarElements.map((el) => (
							<li key={el.link} className={bem('navbar', 'item')}>
								<Link className={bem('navbar', 'link', { collapsed })} to={el.link} title={el.title}>
									<el.icon className={bem('navbar', 'icon')} />
									<span className={bem('navbar', 'text', { collapsed })}>{el.title}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className={bem('sidebar', 'footer')}>
				<LangSwitcher className={collapsed && 'small'} />
				<ThemeSwitcher className={collapsed && 'small'} />
			</div>
		</aside>
	)
}
