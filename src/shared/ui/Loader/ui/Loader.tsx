import './Loader.scss'
import bem from 'shared/lib/classNames/bem'

interface LoaderProps {
	className?: string
}

export const Loader = ({ className }: LoaderProps) => (
	<div className={bem('loader', {}, [className])}>
		<div />
		<div />
		<div />
	</div>
)
