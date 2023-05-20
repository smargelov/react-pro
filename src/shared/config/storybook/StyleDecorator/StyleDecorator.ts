import 'app/styles/index.scss'
import './story.scss'
import { Story } from '@storybook/react'

export const StyleDecorator = (story: () => Story) => story()
