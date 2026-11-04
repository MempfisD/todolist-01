import { Task } from './Task.tsx'
import { TodolistFilter } from './TodolistFilter.tsx'
import { TodolistHeader } from './TodolistHeader.tsx'

type TaskType = {
	id: number
	title: string
	isDone: boolean
}

type TodolistProps = {
	title: string
	tasks: TaskType[]
}

export const Todolist = (props: TodolistProps) => {
	return (
		<div>
			<TodolistHeader title={props.title} />
			<ul>
				{props.tasks.map(t => (
					<Task key={t.id} title={t.title} isDone={t.isDone} />
				))}
			</ul>
			<TodolistFilter />
		</div>
	)
}
