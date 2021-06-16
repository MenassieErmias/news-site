import Home from "./page/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./page/Create";
import NewsDetails from "./page/NewsDetails";
import Sport from "./page/Sport";
import Technology from "./page/Technology";
import Business from "./page/Business";
import NotFound from "./page/NotFound";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Form from "./page/Form";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/form">
							<Form />
						</Route>
						<Route exact path="/create">
							<Create />
						</Route>
						<Route exact path="/sport">
							<Sport />
						</Route>
						<Route exact path="/technology">
							<Technology />
						</Route>
						<Route exact path="/business">
							<Business />
						</Route>
						<Route path="/:id">
							<NewsDetails />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
