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
		
	);
};

export default Home;
