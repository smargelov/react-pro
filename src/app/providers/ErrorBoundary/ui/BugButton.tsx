import bem from 'shared/lib/classNames/bem'
import { Button } from 'shared/ui/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface BugButtonProps {
	className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
	const { t } = useTranslation()
	const [error, setError] = useState(false)
	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])
	return (
		<Button
			onClick={() => setError(true)}
			className={bem('bug-button', {}, [className])}
		>
			{t('throw this')}
		</Button>
	)
}
