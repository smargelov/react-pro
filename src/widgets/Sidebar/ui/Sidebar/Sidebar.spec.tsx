import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
	test('should render', () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
	test('should toggle collapsed by toggle-button', () => {
		renderWithTranslation(<Sidebar />)
		const toggleBtn = screen.getByTestId('toggle-btn')
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).toHaveClass('sidebar--collapsed')
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).not.toHaveClass('sidebar--collapsed')
	})
})
