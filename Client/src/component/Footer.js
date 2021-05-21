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
										<i class="fa fa-map-marker"></i>123 News Street, NY, USA
									</p>
									<p>
										<i class="fa fa-envelope"></i>info@example.com
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
										<a href="#">Lorem ipsum</a>
									</li>
									<li>
										<a href="#">Pellentesque</a>
									</li>
									<li>
										<a href="#">Aenean vulputate</a>
									</li>
									<li>
										<a href="#">Vestibulum sit amet</a>
									</li>
									<li>
										<a href="#">Nam dignissim</a>
									</li>
								</ul>
							</div>
						</div>

						<div class="col-lg-3 col-md-6">
							<div className={classes.footerwidget}>
								<h3 className={classes.title}>Quick Links</h3>
								<ul>
									<li>
										<a href="#">Lorem ipsum</a>
									</li>
									<li>
										<a href="#">Pellentesque</a>
									</li>
									<li>
										<a href="#">Aenean vulputate</a>
									</li>
									<li>
										<a href="#">Vestibulum sit amet</a>
									</li>
									<li>
										<a href="#">Nam dignissim</a>
									</li>
								</ul>
							</div>
						</div>

						<div class="col-lg-3 col-md-6">
							<div className={classes.footerwidget}>
								<h3 className={classes.title}>Newsletter</h3>
								<div className={classes.newsletter}>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vivamus sed porta dui. Class aptent taciti sociosqu
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

			{/* <!-- Footer Bottom Start --> */}
			<div className={classes.footerbottom}>
				<div className={classes.container} class="container">
					<div class="row">
						<div class="col-md-6" className={classes.copyright}>
							<p>
								Copyright &copy; <a href="https://htmlcodex.com">HTML Codex</a>.
								All Rights Reserved
							</p>
						</div>

						<div class="col-md-6" className={classes.templateby}>
							<p>
								Template By <a href="https://htmlcodex.com">HTML Codex</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Footer Bottom End --> */}

			{/* <!-- Back to Top --> */}
			<a href="#" class="back-to-top">
				<i class="fa fa-chevron-up"></i>
			</a>
		</div>
	);
};

export default Footer;
