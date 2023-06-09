type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods?: Mods, aditional?: string[]): string {
	return [
		cls,
		...(aditional ? aditional.filter(Boolean) : []),
		...Object.entries(mods || {})
			.filter(([, value]) => Boolean(value))
			.map(([className]) => className)
	].join(' ')
}
