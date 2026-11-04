import { TaskType } from './App.tsx'
import { Task } from './Task.tsx'
import { TodolistFilter } from './TodolistFilter.tsx'
import { TodolistHeader } from './TodolistHeader.tsx'

type TodolistProps = {
	title: string
	tasks: TaskType[]
}

export const Todolist = (props: TodolistProps) => {
	return (
		<div>
			<TodolistHeader title={props.title} countTasks={props.tasks.length} />
			<ul>
				{props.tasks.map(t => (
					<Task key={t.id} title={t.title} isDone={t.isDone} />
				))}
			</ul>
			<TodolistFilter />
		</div>
	)
}
