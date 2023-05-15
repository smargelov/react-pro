import './PageLoader.scss'
import bem from 'shared/lib/classNames/bem'
import { Loader } from 'shared/ui/Loader/ui/Loader'

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
	<div className={bem('page-loader', {}, [className])}>
		<Loader />
	</div>
)
