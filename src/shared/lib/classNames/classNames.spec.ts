import { classNames } from './classNames'

describe('classNames function', () => {
	test('should return class name without modifications if no mods or additional classes are provided', () => {
		expect(classNames('test')).toBe('test')
	})

	test('should handle additional classes', () => {
		expect(classNames('test', {}, ['additional'])).toBe('test additional')
	})

	test('should ignore falsy additional classes', () => {
		expect(classNames('test', {}, ['additional', ''])).toBe('test additional')
	})

	test('should handle mods', () => {
		expect(classNames('test', { mod: true })).toBe('test mod')
	})

	test('should ignore falsy mods', () => {
		expect(classNames('test', { mod: false })).toBe('test')
	})

	test('should handle both mods and additional classes', () => {
		expect(classNames('test', { mod: true }, ['additional'])).toBe('test additional mod')
	})

	test('should ignore all falsy values', () => {
		expect(classNames('test', { mod: false }, ['', undefined, null])).toBe('test')
	})

	test('should handle string values in mods', () => {
		expect(classNames('test', { mod: 'modValue' })).toBe('test mod')
	})
})
