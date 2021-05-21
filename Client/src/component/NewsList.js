import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

import news1 from "../images/news1.jpg";

// import { Pagination } from "./Pagination";

const NewsList = (props) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);
	// Get current

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = props.news.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const [page, setPage] = useState(1);

	props.changePage(page);

	const prev = () => {
		if (page > 1) {
			setPage(page - 1);
			props.changePage(page);
		}
	};

	const next = () => {
		if (props.error) {
			setPage(1);
			props.changePage(page);
		}
		setPage(page + 1);
		props.changePage(page);
	};

	return (
		<div className="news-list">
			<Pagination
				PostsPerPage={postsPerPage}
				totalPage={props.news.length}
				paginate={paginate}
				prev={prev}
				next={next}
			/>
			<br />

			<div class="tab-news">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<ul class="nav nav-pills nav-justified">
								<li class="nav-item">
									<a
										class="nav-link active"
										data-toggle="pill"
										href="#featured"
									>
										Featured News
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="pill" href="#popular">
										Popular News
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="pill" href="#latest">
										Latest News
									</a>
								</li>
							</ul>

							<div class="tab-content">
								<div id="featured" class="container tab-pane active">
									{currentPosts.map((post) => (
										<div class="tn-news" key={post.id}>
											<div class="tn-img">
												<img src={news1} />
											</div>
											<div class="tn-title">
												<Link to={"/" + post.id}>
													<a href="">{post.title}</a>
												</Link>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div class="col-md-6">
							<ul class="nav nav-pills nav-justified">
								<li class="nav-item">
									<a
										class="nav-link active"
										data-toggle="pill"
										href="#m-viewed"
									>
										Most Viewed
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="pill" href="#m-read">
										Most Read
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="pill" href="#m-recent">
										Most Recent
									</a>
								</li>
							</ul>

							<div class="tab-content">
								<div id="featured" class="container tab-pane active">
									{currentPosts.map((post) => (
										<div class="tn-news" key={post.id}>
											<div class="tn-img">
												<img src={news1} />
											</div>
											<div class="tn-title">
												<Link to={"/" + post.id}>
													<a href="">{post.title}</a>
												</Link>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Pagination
				PostsPerPage={postsPerPage}
				totalPage={props.news.length}
				paginate={paginate}
				prev={prev}
				next={next}
			/>
		</div>
	);
};

export default NewsList;
