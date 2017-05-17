
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
					display: flex;
					justify-content: center;
					font-weight: 300;
					width: 50%;
					padding: 20px;
					margin: 0 auto;
					border: 1px solid #efefef;
					border-top: none;
					list-style-type: none;
					transition: all 200ms ease-in-out;
				}

				.task:nth-child(1) {
					border-top: 1px solid #efefef !important;
				}

				.task:hover {
					background: #efefef;
				}
			`}
			</style>
		</li>
		)

	}
}
