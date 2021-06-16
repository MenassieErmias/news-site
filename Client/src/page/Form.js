import { useState } from "react";

const Form = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mystyle, setmystyle] = useState();

	const loginBtn = () => {
		const style = {
			marginLeft: "0%",
		};
		setmystyle(style);
		console.log(mystyle);
	};

	const signupBtn = () => {
		const style = {
			marginLeft: "-50%",
		};
		setmystyle(style);
		console.log(mystyle);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// setIsPending(true);
		const admin = { username, email, password };
		fetch("/api/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(admin),
		}).then(() => {
			console.log("added new admin");
			// setIsPending(false);
		});
		// history.go(-1);
		// history.push("/");
	};

	const handleSubmitlogin = (e) => {
		e.preventDefault();
		// setIsPending(true);
		const admin = { email, password };
		fetch("/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(admin),
		}).then(() => {
			console.log("login successfull");
			// setIsPending(false);
		});
		// history.go(-1);
		// history.push("/");
	};

	return (
		<div className="form">
			<div class="wrapper">
				<div class="title-text">
					<div class="title login">Login Form</div>
					<div class="title signup">Signup Form</div>
				</div>
				<div class="form-container">
					<div class="slide-controls">
						<input type="radio" name="slide" id="login" checked />
						<input type="radio" name="slide" id="signup" />
						<label for="login" class="slide login" onClick={loginBtn}>
							Login
						</label>
						<label for="signup" class="slide signup" onClick={signupBtn}>
							Signup
						</label>
						<div class="slider-tab"></div>
					</div>
					<div class="form-inner">
						<form
							action="#"
							class="login"
							style={mystyle}
							onSubmit={handleSubmitlogin}
						>
							<div class="field">
								<input
									type="text"
									placeholder="Email Address"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div class="field">
								<input
									type="password"
									placeholder="Password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div class="pass-link">
								<a href="#">Forgot password?</a>
							</div>
							<div class="field btn">
								<div class="btn-layer"></div>
								<input type="submit" value="Login" />
							</div>
							<div class="signup-link">
								Not a member? <a href="">Signup now</a>
							</div>
						</form>
						<form action="#" class="signup" onSubmit={handleSubmit}>
							<div class="field">
								<input
									type="username"
									placeholder="username"
									required
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div class="field">
								<input
									type="text"
									placeholder="Email Address"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div class="field">
								<input
									type="password"
									placeholder="Password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<div class="field btn">
								<div class="btn-layer"></div>
								<input type="submit" value="Signup" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
