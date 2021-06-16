import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	const [search, setSearch] = useState("");

	return (
		<div className="header">
			<div className="top-bar">
				<div className="container">
					<div className="row">
						<div className="col-md-6"></div>
						<div className="col-md-6">
							<div class="tb-menu">
								<a href="">About</a>
								<a href="">Privacy</a>
								<a href="">Terms</a>
								<a href="">Contact</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="brand">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-3 col-md-4">
							<div class="b-logo">
								<a href="index.html">
									<img src={logo} alt="Logo" />
								</a>
							</div>
						</div>
						<div class="col-lg-6 col-md-4"></div>
						<div class="col-lg-3 col-md-4">
							<div class="b-search">
								<input
									type="text"
									required
									value={search}
									placeholder="Search"
									onChange={(e) => setSearch(e.target.value)}
								/>
								<button>
									<i class="fa fa-search"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Nav Bar Start --> */}
			<div class="nav-bar">
				<div class="container">
					<nav class="navbar navbar-expand-md bg-dark navbar-dark">
						<a href="#" class="navbar-brand">
							MENU
						</a>
						<button
							type="button"
							class="navbar-toggler"
							data-toggle="collapse"
							data-target="#navbarCollapse"
						>
							<span class="navbar-toggler-icon"></span>
						</button>

						<div
							class="collapse navbar-collapse justify-content-between"
							id="navbarCollapse"
						>
							<div class="navbar-nav mr-auto">
								<Link to="/" class="nav-item nav-link active">
									Home
								</Link>

								<Link to="/sport" class="nav-item nav-link">
									Sports
								</Link>
								<Link to="/technology" class="nav-item nav-link">
									Technology
								</Link>

								<Link to="/business" class="nav-item nav-link">
									Business
								</Link>

								<Link to="/create" class="nav-item nav-link">
									Add New News
								</Link>
							</div>
							<div class="social ml-auto">
								<a href="">
									<i class="fab fa-twitter"></i>
								</a>
								<a href="">
									<i class="fab fa-facebook-f"></i>
								</a>
								<a href="">
									<i class="fab fa-linkedin-in"></i>
								</a>
								<a href="">
									<i class="fab fa-instagram"></i>
								</a>
								<a href="">
									<i class="fab fa-youtube"></i>
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
			{/* <!-- Nav Bar End --> */}
		</div>
	);
};

export default Header;
