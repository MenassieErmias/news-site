import { useState } from "react";
import NewsList from "../component/NewsList";
import TopNews from "../component/TopNews";
import CategoryNews from "../component/CategoryNews";
import useFetch from "../component/useFetch";

const Home = () => {
	const [page, setPage] = useState(1);
	const changePage = (page) => {
		setPage(page);
	};

	const { data: news, isPending, error } = useFetch("/api?page=" + page);

	console.log(page);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading.....</div>}
			{news && <TopNews />}
			{news && <CategoryNews />}
			{news && <NewsList news={news} changePage={changePage} error={error} />}
		</div>
	);
};

export default Home;
