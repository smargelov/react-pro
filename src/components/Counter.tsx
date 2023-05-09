import { useState } from 'react'
import classes from './Counter.module.sass'

const Counter = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>Counter</h1>
			<p>Current count: <strong>{ count }</strong></p>
			<button className={classes.button} onClick={ () => setCount(count + 1) }>Increment</button>
		</div>
	)
}

export default Counter
