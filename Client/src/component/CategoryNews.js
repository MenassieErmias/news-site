import news1 from "../images/news1.jpg";

const CategoryNews = () => {
	const posts = [
		{
			title: "Integer hendrerit elit eget",
			body: "The Senate Wednesday passed a bill seeking to establish the Nigeria Steel University, Ajaokuta, Kogi State. Also passed were the Agricultural Research Council Act (Amendment) Bill, 2021; and the Federal Medical Centre Mubi, Adamawa State (Establishment)",
			id: 0,
		},
		{
			title: "Senate Passes Bill to Establish ",
			body: "The Senate Wednesday passed a bill seeking to establish the Nigeria Steel University, Ajaokuta, Kogi State. Also passed were the Agricultural Research Council Act (Amendment) Bill, 2021; and the Federal Medical Centre Mubi, Adamawa State (Establishment)",
			id: 1,
		},
		{
			title: "Senate Passes Bill to Establish ",
			body: "The Senate Wednesday passed a bill seeking to establish the Nigeria Steel University, Ajaokuta, Kogi State. Also passed were the Agricultural Research Council Act (Amendment) Bill, 2021; and the Federal Medical Centre Mubi, Adamawa State (Establishment)",
			id: 2,
		},
	];
	return (
		<div className="CategoryNews">
			<div class="cat-news">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<h2>Sports</h2>
							<div class="row cn-slider">
								<div class="col-md-6">
									<div class="cn-img">
										<img src={news1} />
										<div class="cn-title">
											<a href="">{posts[0].title}</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="cn-img">
										<img src={news1} />
										<div class="cn-title">
											<a href="">{posts[1].title}</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="cn-img">
										<img src={news1} />
										<div class="cn-title">
											<a href="">{posts[2].title}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<h2>Technology</h2>
							<div class="row cn-slider">
								<div class="col-md-6">
									<div class="cn-img">
										<img src={news1} />
										<div class="cn-title">
											<a href="">{posts[0].title}</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="cn-img">
										<img src={news1} />
										<div class="cn-title">
											<a href="">{posts[2].title}</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="cn-img">
										<img src={news1} />
										<div class="cn-title">
											<a href="">{posts[0].title}</a>
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

export default CategoryNews;
