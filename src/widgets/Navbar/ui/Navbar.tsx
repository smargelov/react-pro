import './Navbar.sass'
import bem from 'shared/lib/classNames/bem'
import { Link } from 'react-router-dom'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<nav className={ bem('navbar', {}, [className]) }>
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
