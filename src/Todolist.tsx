import { useState } from 'react'
import { TaskType } from './App.tsx'
import { Task } from './Task.tsx'
import { TodolistFilter } from './TodolistFilter.tsx'
import { TodolistHeader } from './TodolistHeader.tsx'

type TodolistType = {
	id: number
	title: string
	tasks: TaskType[]
}

export const Todolist = ({ id, title, tasks }: TodolistType) => {
	console.log('Todolist rendered')
	const [counter, setCounter] = useState(0)

	return (
		<div>
			<TodolistHeader title={title} countTasks={tasks.length} />
			<span onClick={() => setCounter(counter + 1)}>{counter}</span>
			<ul>
				{tasks.map((task: TaskType) => (
					<Task key={task.id} title={task.title} isDone={task.isDone} />
				))}
			</ul>
			<TodolistFilter />
		</div>
	)
}
