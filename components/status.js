
export default () => (
	<div className="status">
		<form>
			<input type="text" placeholder="Type a task..."></input>
		</form>
		<style jsx>{`
			.status input {
				outline: none;
				padding: 10px;
				width: 500px;
				font-size: 14pt;
				font-weight: 300;
				border: 1px solid rgba(0,0,0,.15);
				border-radius: 3px;
				transition: border 150ms ease-in-out;
			}

			.status input:focus {
				border: 1px solid rgba(66, 134, 244, .85);
			}
		`}
		</style>
	</div>
)