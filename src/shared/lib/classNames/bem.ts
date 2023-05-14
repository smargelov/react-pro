type Modifiers = Record<string, string | boolean>
type ExtraClasses = string[]

function bem(
	block: string,
	elementOrModifiers?: string | Modifiers,
	modifiersOrExtraClasses?: Modifiers | ExtraClasses,
	originalExtraClasses?: ExtraClasses
): string {
	let baseClass = block
	let classes = ''
	let modifiers: Modifiers | undefined
	let extraClasses: ExtraClasses | undefined

	if (typeof elementOrModifiers === 'string') {
		baseClass += `__${elementOrModifiers}`
		modifiers = modifiersOrExtraClasses as Modifiers | undefined
		extraClasses = originalExtraClasses
	} else if (typeof elementOrModifiers === 'object') {
		extraClasses = modifiersOrExtraClasses as ExtraClasses
		modifiers = elementOrModifiers
	}
	classes += baseClass
	if (modifiers) {
		Object.entries(modifiers).forEach(([key, value]) => {
			if (value) {
				classes += ` ${baseClass}--${key}`
			}
		})
	}
	if (extraClasses) {
		extraClasses.forEach((extraClass) => {
			if (extraClass) {
				classes += ` ${extraClass}`
			}
		})
	}
	return classes
}

export default bem
