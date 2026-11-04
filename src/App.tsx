import './App.css'
import { Todolist } from './Todolist.tsx'

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

function App() {
	const todolist = [
		{
			id: 1,
			title: 'Todolist 1',
			tasks: [
				{ id: 1, title: 'Task 1', isDone: false },
				{ id: 2, title: 'Task 2', isDone: true },
				{ id: 3, title: 'Task 3', isDone: false },
			],
		},
		{
			id: 2,
			title: 'Todolist 2',
			tasks: [
				{ id: 4, title: 'Task 4', isDone: false },
				{ id: 5, title: 'Task 5', isDone: true },
				{ id: 6, title: 'Task 6', isDone: false },
			],
		},
		{
			id: 3,
			title: 'Todolist 3',
			tasks: [
				{ id: 7, title: 'Task 7', isDone: false },
				{ id: 8, title: 'Task 8', isDone: true },
				{ id: 9, title: 'Task 9', isDone: false },
			],
		},
	]

	return (
		<div className='app'>
			{todolist.map(t => (
				<Todolist key={t.id} title={t.title} tasks={t.tasks} />
			))}
		</div>
	)
}

export default App
