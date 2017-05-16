
export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<li className="task">
			{this.props.text}
			<style jsx>{`
				.task {
					color: red;
					list-style-type: none;
				}
			`}
			</style>
		</li>
		)

	}
}
