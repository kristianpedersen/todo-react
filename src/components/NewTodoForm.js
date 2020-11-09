export default function NewTodoForm({ addNewTodo }) {
	return (
		<div className="NewTodoForm">
			<form onSubmit={addNewTodo}>
				<input
					type="text"
					name="todo"
					id="NewTodoForm"
					placeholder="lol"
					autoFocus
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}