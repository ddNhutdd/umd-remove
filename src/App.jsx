import React, { useEffect, useRef } from 'react';
import useQuery from './hook/useQuery';
const fetchMyData = async (id) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
	return res.json();
};

function App() {
	const [callQuery, apiStatus, , data] = useQuery(fetchMyData);
	const firstTime = useRef(false);
	if (!firstTime.current) {
		firstTime.current = true;
		callQuery(1);
	}

	useEffect(() => {
		console.log(data)
	}, [data])

	if (apiStatus === 'fetching') {
		return (
			<>
				Fetching ...
			</>
		)
	}

	return (
		<div>
			234234
		</div>
	)
}

export default App
