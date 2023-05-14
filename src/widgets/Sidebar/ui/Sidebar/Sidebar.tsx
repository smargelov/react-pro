import './Sidebar.sass'
import bem from 'shared/lib/classNames/bem'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button'

interface SidebarProps {
	className?: string
}

export function Sidebar({ className }: SidebarProps) {
	const [collapsed, setCollapsed] = useState(false)
	return (
		<aside className={bem('sidebar', { collapsed }, [className])}>
			<div className={bem('sidebar', 'header')} />
			<div className={bem('sidebar', 'content')}>
				<Button onClick={() => setCollapsed(!collapsed)}>Toggle</Button>
			</div>
			<div className={bem('sidebar', 'footer')}>
				<LangSwitcher className={collapsed && 'small'} />
				<ThemeSwitcher className={collapsed && 'small'} />
			</div>
		</aside>
	)
}