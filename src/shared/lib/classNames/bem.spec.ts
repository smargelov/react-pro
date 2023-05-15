import bem from './bem'

describe('bem function', () => {
	test('should handle only block class', () => {
		expect(bem('block')).toBe('block')
	})

	test('should handle block with element', () => {
		expect(bem('block', 'element')).toBe('block__element')
	})

	test('should handle block with modifiers', () => {
		expect(bem('block', { mod: true })).toBe('block block--mod')
	})

	test('should handle block with falsey modifiers', () => {
		expect(bem('block', { mod: false })).toBe('block')
	})

	test('should handle block with element and modifiers', () => {
		expect(bem('block', 'element', { mod: true })).toBe('block__element block__element--mod')
	})

	test('should handle block with element and falsey modifiers', () => {
		expect(bem('block', 'element', { mod: false })).toBe('block__element')
	})

	test('should handle block with element, modifiers, and extra classes', () => {
		expect(bem('block', 'element', { mod: true }, ['extra'])).toBe('block__element block__element--mod extra')
	})

	test('should handle block with element, falsey modifiers, and extra classes', () => {
		expect(bem('block', 'element', { mod: false }, ['extra'])).toBe('block__element extra')
	})

	test('should handle block with element, modifiers, and falsey extra classes', () => {
		expect(bem('block', 'element', { mod: true }, ['extra', ''])).toBe('block__element block__element--mod extra')
	})

	test('should handle string values in modifiers', () => {
		expect(bem('block', { mod: 'modValue' })).toBe('block block--mod')
	})
})
