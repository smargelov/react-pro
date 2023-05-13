import './Sidebar.sass'
import bem from 'shared/lib/classNames/bem'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface SidebarProps {
	className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	return (
		<aside className={ bem('sidebar', { 'collapsed': collapsed }, [className]) }>
			<div className={ bem('sidebar', 'header') }></div>
			<div className={ bem('sidebar', 'content') }>
				<button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
			</div>
			<div className={ bem('sidebar', 'footer') }>
				<ThemeSwitcher className={collapsed && 'small'}/>
			</div>
		</aside>
	)
}
