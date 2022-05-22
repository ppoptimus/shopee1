import React, { useEffect, useState, Fragment } from 'react'
import Tabletop from 'tabletop'

export default function Product() {
	const [data, setData] = useState([])

	useEffect(() => {}, [])

	const test = () => {}

	return (
		<div>
			<button onClick={test}>Test</button>
		</div>
	)
}
