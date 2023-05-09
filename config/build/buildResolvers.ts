import { ResolveOptions } from 'webpack'

export default function buildResolvers(): ResolveOptions {
	return {
		// расширения файлов для импорта
		extensions: ['.tsx', '.ts', '.js']
	}
}
