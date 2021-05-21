import Home from "./page/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./page/Create";
import NewsDetails from "./page/NewsDetails";
import NotFound from "./page/NotFound";
import Header from "./component/Header";
import Footer from "./component/Footer";

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
						<Route exact path="/create">
							<Create />
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
