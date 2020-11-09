import { useState } from "react"

export default function Todo({
	id, todo, toggleTodo, removeTodo, toggleEditMode, editTodo
}) {
	const [value, setValue] = useState(todo.task)
	return (
		<div className="Todo">
			{!todo.editMode ?
				<p
					style={{ backgroundColor: todo.done && "green" }}>
					{todo.task}
				</p>
				:
				<form onSubmit={event => {
					event.preventDefault()
					editTodo(id, value)
				}}>
					<input
						type="text"
						name="toggleEditMode"
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</form>
			}
			<button onClick={() => toggleTodo(id)}>Toggle</button>
			<button onClick={() => toggleEditMode(id)}>Edit</button>
			<button onClick={() => removeTodo(id)}>Remove</button>
		</div>
	)
}