import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
	test('should render', () => {
		componentRender(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
	test('should toggle collapsed by toggle-button', () => {
		componentRender(<Sidebar />)
		const toggleBtn = screen.getByTestId('toggle-btn')
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).toHaveClass('sidebar--collapsed')
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).not.toHaveClass('sidebar--collapsed')
	})
})
