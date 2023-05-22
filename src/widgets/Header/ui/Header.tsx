import './Header.scss'
import bem from 'shared/lib/classNames/bem'

interface HeaderProps {
	className?: string
}

export function Header({ className }: HeaderProps) {
	return (
		<header className={bem('header', {}, [className])} />
	)
}
