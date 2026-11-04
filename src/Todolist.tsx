import { Task } from './Task.tsx'
import { TodolistHeader } from './TodolistHeader.tsx'
import { TodolistFilter } from './TodolistFilter.tsx'

type TodolistProps = {
	title: string
}

export const Todolist = (props: TodolistProps) => {
	return (
		<div>
			<TodolistHeader title={props.title} />
			<ul>
				<Task />
				<Task />
			</ul>
			<TodolistFilter />
		</div>
	)
}
