import './Button.sass'
import bem from 'shared/lib/classNames/bem'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	className?: string,
	bType?: ButtonType,
	size?: ButtonSize
}

export enum ButtonType {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	ACCENT = 'accent',
	TEXT = 'text',
	CLEAN = 'clean'
}

export enum ButtonSize {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large'
}

export const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		bType,
		size,
		...otherProps
	} = props
	return (
		<button
			className={ bem('button', {[bType]: bType, [size]: size }, [className]) }
			{ ...otherProps }
		>
			{ children }
		</button>
	)
}
