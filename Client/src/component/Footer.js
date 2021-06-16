import classes from "./Footer.module.css";
const Footer = () => {
	return (
		<div>
			<div className={classes.footer}>
				<div className={classes.container} class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div className={classes.footerwidget}>
								<h3 className={classes.title}>Get in Touch</h3>
								<div className={classes.contactinfo}>
									<p>
										<i class="fa fa-map-marker"></i>123 News Street, AA, Ethiopia
									</p>
									<p>
										<i class="fa fa-envelope"></i>news@mail.com
									</p>
									<p>
										<i class="fa fa-phone"></i>+123-456-7890
									</p>
									<div className={classes.social}>
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
							</div>
						</div>

						<div class="col-lg-3 col-md-6">
							<div className={classes.footerwidget}>
								<h3 className={classes.title}>Useful Links</h3>
								<ul>
									<li>
										<a href="#">Breaking</a>
									</li>
									<li>
										<a href="#">Local</a>
									</li>
									<li>
										<a href="#">Global</a>
									</li>
									<li>
										<a href="#">Business</a>
									</li>
									<li>
										<a href="#">Entertainment and Sports</a>
									</li>
								</ul>
							</div>
						</div>

						<div class="col-lg-3 col-md-6">
							<div className={classes.footerwidget}>
								<h3 className={classes.title}>Quick Links</h3>
								<ul>
									<li>
										<a href="#">US elections</a>
									</li>
									<li>
										<a href="#">GERD</a>
									</li>
									<li>
										<a href="#">Ethiopian Politics</a>
									</li>
									<li>
										<a href="#">Covid-19</a>
									</li>
									<li>
										<a href="#">UEFA Champions League</a>
									</li>
								</ul>
							</div>
						</div>

						<div class="col-lg-3 col-md-6">
							<div className={classes.footerwidget}>
								<h3 className={classes.title}>Newsletter</h3>
								<div className={classes.newsletter}>
									<p>
										Send us your email for daily mail updates.
									</p>
									<form>
										<input
											className={classes.formcontrol}
											class="form-control"
											type="email"
											placeholder="Your email here"
										/>
										<button className={classes.btn} class="btn">
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Footer End --> */}

			{/* <!-- Footer Menu Start --> */}
			<div className={classes.footermenu}>
				<div className={classes.container} class="container">
					<div className={classes.fmenu}>
						<a href="">Terms of use</a>
						<a href="">Privacy policy</a>
						<a href="">Cookies</a>
						<a href="">Accessibility help</a>
						<a href="">Advertise with us</a>
						<a href="">Contact us</a>
					</div>
				</div>
			</div>
			{/* <!-- Footer Menu End --> */}


			{/* <!-- Back to Top --> */}
			<a href="#" class="back-to-top">
				<i class="fa fa-chevron-up"></i>
			</a>
		</div>
	);
};

export default Footer;
