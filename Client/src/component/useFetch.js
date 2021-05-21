import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setDatas] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					if (!res.ok) {
						throw Error("could not fetch the data for that resource");
					}
					console.log(url);
					return res.json();
				})
				.then((data) => {
					setDatas(data);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					setError(err.message);
					setIsPending(false);
				});
		}, 1000);
	}, [url]);

	return { data, isPending, error };
};

export default useFetch;
