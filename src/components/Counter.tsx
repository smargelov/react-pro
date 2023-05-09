import { useState } from 'react'
import './Counter.sass'

const Counter = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>Counter</h1>
			<p>Current count: <strong>{ count }</strong></p>
			<button onClick={ () => setCount(count + 1) }>Increment</button>
		</div>
	)
}

export default Counter
