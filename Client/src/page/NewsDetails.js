import { useHistory, useParams } from "react-router";
import useFetch from "../component/useFetch";

import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";
import news4 from "../images/news4.jpg";
import news5 from "../images/news5.jpg";
import news6 from "../images/news6.jpg";
import news7 from "../images/news7.jpg";
import news8 from "../images/news8.jpg";

const NewsDetails = () => {
	const { id } = useParams();
	const { data: news, error, isPending } = useFetch("/api/" + id);
	const history = useHistory();

	const handleclick = () => {
		fetch("/api/" + id, {
			method: "DELETE",
		}).then(() => {
			history.push("/");
		});
	};
	return (
		<div className="news-details">
			<div class="top-news">
				<div class="container">
					<div class="row">
						<div class="col-md-6 tn-left">
							<div class="row tn-slider">
								<div class="col-md-12">
									<div class="tn-img">
										<img src={news1} />
										<div class="tn-title">
											<a href="">Lorem ipsum dolor sit amet</a>
										</div>
									</div>
								</div>
							</div>

							<div class="row tn-slider">
								<div class="col-md-12">
									{isPending && <div>Loading...</div>}
									{error && <div>{error}</div>}
									{news && (
										<article>
											<h2>{news.title}</h2>
											{/* <p>written by {blog.author}</p> */}
											<div>{news.body}</div>
											<button onClick={handleclick}>delete</button>
										</article>
									)}
								</div>
							</div>
						</div>
						<div class="col-md-6 tn-right">
							<div class="row">
								<div class="col-md-6">
									<div class="tn-img">
										<img src={news3} />
										<div class="tn-title">
											<a href="">Lorem ipsum dolor sit</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="tn-img">
										<img src={news4} />
										<div class="tn-title">
											<a href="">Lorem ipsum dolor sit</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="tn-img">
										<img src={news5} />
										<div class="tn-title">
											<a href="">Lorem ipsum dolor sit</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="tn-img">
										<img src={news5} />
										<div class="tn-title">
											<a href="">Lorem ipsum dolor sit</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
