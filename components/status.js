
export default () => (
	<div className="status">
		<form>
			<input name="task" type="text" placeholder="Type a task..."></input>
			<input name="priority" type="number" placeholder="1" min="1" max="3"></input>
		</form>
		<style jsx>{`
			.status input {
				outline: none;
				padding: 10px;
				width: 12em;
				font-size: 14pt;
				font-weight: 300;
				border: 1px solid rgba(0,0,0,.15);
				border-radius: 3px;
				transition: border 150ms ease-in-out;
			}

			.status input:focus {
				border: 1px solid rgba(66, 134, 244, .85);
			}

			.status input[name="priority"] {
				display: inline-block;
				margin: 10px;
				width: 2em;
			}
		`}
		</style>
	</div>
)