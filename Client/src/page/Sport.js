import { useState } from "react";
import NewsList from "../component/NewsList";
import TopNews from "../component/TopNews";
import useFetch from "../component/useFetch";
const Sport = () => {
	const [page, setPage] = useState(1);
	const changePage = (page) => {
		setPage(page);
	};

	const { data: news, isPending, error } = useFetch("/api?page=" + page);

	// console.log(news[0].category);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading.....</div>}
			{news && <TopNews />}
			{news && <NewsList news={news} changePage={changePage} error={error} />}
		</div>
	);
};

export default Sport;
