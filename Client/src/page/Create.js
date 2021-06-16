import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
	const [category, setCategory] = useState("Sport");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	// const [author, setAuthor] = useState("abdu");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		const blog = { title, body, category };
		fetch("/api/postNewNews", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("added new blog");
			setIsPending(false);
		});
		// history.go(-1);
		history.push("/");
	};

	console.log(category);
	return (
		<div className="create">
			<h2>Add a New News</h2>
			<form onSubmit={handleSubmit}>
				<label>News title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>News body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				{/* <label>News author</label> */}
				{/* <select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="abdu">abdu</option>
					<option value="teddy">teddy</option>
				</select> */}
				<select
					value={category}
					onChange={(e) => {
						const selectcat = e.target.value;
						setCategory(selectcat);
					}}
				>
					<option>Select category</option>
					<option value="sport">Sport</option>
					<option value="technology">Technology</option>
					<option value="business">Business</option>
					<option value="other">Other</option>
				</select>
				{!isPending && <button>Add News</button>}
				{isPending && <button disabled>Adding news....</button>}
			</form>
		</div>
	);
};

export default Create;
