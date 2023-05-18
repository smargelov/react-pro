import './Sidebar.scss'
import bem from 'shared/lib/classNames/bem'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
	className?: string
}

export function Sidebar({ className }: SidebarProps) {
	const { t } = useTranslation()
	const [collapsed, setCollapsed] = useState(false)
	const toggleSidebar = () => setCollapsed(!collapsed)
	return (
		<aside data-testid="sidebar" className={bem('sidebar', { collapsed }, [className])}>
			<div className={bem('sidebar', 'header')} />
			<div className={bem('sidebar', 'content')} />
			<div className={bem('sidebar', 'footer')}>
				<LangSwitcher className={collapsed && 'small'} />
				<ThemeSwitcher className={collapsed && 'small'} />
				<Button data-testid="toggle-btn" onClick={toggleSidebar}>{t('toggle')}</Button>
			</div>
		</aside>
	)
}
