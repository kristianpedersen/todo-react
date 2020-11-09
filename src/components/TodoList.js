import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
	const [todos, setTodos] = useState([])

	function toggleTodo(id) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, done: !todo.done }
			}
			return todo
		}))
	}

	function addNewTodo(event) {
		event.preventDefault()
		const inputValue = event.target[0].value
		setTodos([...todos, {
			task: inputValue,
			done: false,
			editMode: false,
			id: uuidv4()
		}])
	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	function toggleEditMode(id) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, editMode: !todo.editMode }
			}
			return todo
		}))
	}

	function editTodo(id, value) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, task: value, editMode: !todo.editMode }
			}
			return todo
		}))
	}

	return (
		<div className="TodoList">
			<h1>2do</h1>
			<NewTodoForm addNewTodo={addNewTodo} />
			{todos.map(todo => (
				<Todo
					id={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
					key={todo.id}
					removeTodo={removeTodo}
					toggleEditMode={toggleEditMode}
					todos={todos}
					setTodos={setTodos}
					editTodo={editTodo}
				/>
			))}
		</div>
	)
}