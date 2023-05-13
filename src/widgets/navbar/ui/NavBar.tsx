import './NavBar.sass'
import bem from 'shared/lib/classNames/bem'
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface NavBarProps {
	className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
	return (
		<nav className={ bem('navbar', {}, [className]) }>
			<ThemeSwitcher/>
			<ul className={ bem('navbar', 'list') }>
				<li className={ bem('navbar', 'item') }>
					<Link className={ bem('navbar', 'link') } to="/">Main</Link>
				</li>
				<li className={ bem('navbar', 'item') }>
					<Link className={ bem('navbar', 'link') } to="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}
