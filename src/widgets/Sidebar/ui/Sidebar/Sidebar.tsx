import './Sidebar.scss'
import bem from 'shared/lib/classNames/bem'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonType } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import ArrowCircle from 'shared/assets/icons/arrow-circle-left.svg'

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
			</div>
			<Button
				data-testid="toggle-btn"
				onClick={toggleSidebar}
				className={bem('sidebar', 'toggle-btn', { collapsed })}
				bType={ButtonType.CLEAN}
			>
				<ArrowCircle className={bem('sidebar', 'toggle-icon', { collapsed })} />
				<span className={bem('sidebar', 'toggle-text')}>
					{collapsed ? t('развернуть') : t('свернуть')}
				</span>
			</Button>
		</aside>
	)
}
