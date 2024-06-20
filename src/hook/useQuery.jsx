import { useState } from "react";
let result = new Array(4).fill(() => { });

const useQuery = (callApiCallback) => {
	const [apiStatus, setApiStatus] = useState(`pending`);
	const [error, setError] = useState();
	const [data, setData] = useState();
	const callQuery = async (...params) => {
		try {
			if (apiStatus === 'fetching') {
				return;
			}
			setApiStatus('fetching');
			const resp = await callApiCallback(...params);
			setData(resp);
			setApiStatus('fullfilled');
		} catch (error) {
			setApiStatus('rejected');
			setError(error);
		}
	}

	result[0] = callQuery;
	result[1] = apiStatus;
	result[2] = error;
	result[3] = data;
	return result;
}

export default useQuery;