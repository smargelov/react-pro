import { render, screen } from '@testing-library/react'
import { Button, ButtonType } from './Button'

describe('Button', () => {
	test('should render', () => {
		render(<Button>Test</Button>)
		expect(screen.getByText('Test')).toBeInTheDocument()
	})
	test('should render with type', () => {
		render(<Button bType={ButtonType.PRIMARY}>Test</Button>)
		expect(screen.getByText('Test')).toHaveClass('button--primary')
		screen.debug()
	})
})
