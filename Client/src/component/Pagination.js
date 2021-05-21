import { Link } from "react-router-dom";

const Pagination = (props) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(props.totalPage / props.PostsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div class="center">
			<div class="pagination">
				<Link to="/" onClick={() => props.prev()}>
					&laquo;
				</Link>
				{pageNumbers.map((number) => (
					<Link
						onClick={() => props.paginate(number)}
						to="/"
						className="page-link"
					>
						{number}
					</Link>
				))}
				<Link to="/" onClick={() => props.next()}>
					&raquo;
				</Link>
			</div>
		</div>
	);
};

export default Pagination;
