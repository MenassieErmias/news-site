import news1 from "../images/news1.jpg";

const TopNews = () => {
	const posts = [
		{
			title: "Integer hendrerit elit eget purus sodales maximus",
			body: "The Senate Wednesday passed a bill seeking to establish the Nigeria Steel University, Ajaokuta, Kogi State. Also passed were the Agricultural Research Council Act (Amendment) Bill, 2021; and the Federal Medical Centre Mubi, Adamawa State (Establishment)",
			id: 0,
		},
		{
			title: "Senate Passes Bill to Establish Nigeria Steel Varsity, 2 Others",
			body: "The Senate Wednesday passed a bill seeking to establish the Nigeria Steel University, Ajaokuta, Kogi State. Also passed were the Agricultural Research Council Act (Amendment) Bill, 2021; and the Federal Medical Centre Mubi, Adamawa State (Establishment)",
			id: 1,
		},
		{
			title: "Senate Passes Bill to Establish Nigeria Steel Varsity, 2 Others",
			body: "The Senate Wednesday passed a bill seeking to establish the Nigeria Steel University, Ajaokuta, Kogi State. Also passed were the Agricultural Research Council Act (Amendment) Bill, 2021; and the Federal Medical Centre Mubi, Adamawa State (Establishment)",
			id: 2,
		},
	];

	console.log(posts[0].title);

	return (
		<div className="TopNews">
			<div class="top-news">
				<div class="container">
					<div class="row">
						<div class="col-md-6 tn-left">
							<div class="row tn-slider">
								<div class="col-md-12">
									<div class="tn-img">
										<img src={news1} />
										<div class="tn-title">
											<a href="">{posts[0].title}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 tn-right">
							<div class="row">
								<div class="col-md-6">
									<div class="tn-img">
										<img src={news1} />
										<div class="tn-title">
											<a href="">{posts[1].title}</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="tn-img">
										<img src={news1} />
										<div class="tn-title">
											<a href="">{posts[2].title}</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="tn-img">
										<img src={news1} />
										<div class="tn-title">
											<a href="">{posts[0].title}</a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="tn-img">
										<img src={news1} />
										<div class="tn-title">
											<a href="">{posts[1].title}</a>
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

export default TopNews;
