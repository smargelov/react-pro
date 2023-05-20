import './Button.scss'
import bem from 'shared/lib/classNames/bem'
import { HTMLAttributes } from 'react'

export enum ButtonType {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	ACCENT = 'accent',
	TEXT = 'text',
	CLEAR = 'clear'
}

export enum ButtonSize {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string,
	bType?: ButtonType,
	size?: ButtonSize,
	type?: 'button' | 'submit' | 'reset'
}

export function Button(props: ButtonProps) {
	const {
		type = 'button',
		className,
		children,
		bType = ButtonType.PRIMARY,
		size,
		...otherProps
	} = props
	return (
		<button
			/* eslint-disable-next-line react/button-has-type */
			type={type}
			className={bem('button', { [bType]: bType, [size]: size }, [className])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
