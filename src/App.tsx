import { useEffect, useState } from 'react'
import './App.css'
import { Todolist } from './Todolist.tsx'

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

type TodolistType = {
	id: number
	title: string
	tasks: TaskType[]
}

const todolistsFromServer: TodolistType[] = [
	{
		id: 1,
		title: 'Что купить',
		tasks: [
			{ id: 1, title: 'молоко', isDone: false },
			{ id: 2, title: 'хлеб', isDone: true },
			{ id: 3, title: 'яйца', isDone: false },
			{ id: 4, title: 'масло', isDone: true },
			{ id: 5, title: 'соль', isDone: false },
		],
	},
	{
		id: 2,
		title: 'Что сделать',
		tasks: [
			{ id: 1, title: 'поесть', isDone: false },
			{ id: 2, title: 'поспать', isDone: true },
			{ id: 3, title: 'помыть посуду', isDone: false },
		],
	},
	{
		id: 3,
		title: 'Что почитать',
		tasks: [
			{ id: 1, title: 'книга', isDone: true },
			{ id: 2, title: 'газета', isDone: false },
		],
	},
]

function App() {
	const [todolists, setTodolists] = useState<null | TodolistType[]>(null)

	useEffect(() => {
		setTimeout(() => {
			setTodolists(todolistsFromServer)
		}, 1000)
	}, [])

	const handleDeleteTodolistClick = (todolistIdToDelete: number) => {
		if (!todolists) return
		const newTodolistsArray = todolists.filter(tl => tl.id !== todolistIdToDelete)
		setTodolists(newTodolistsArray)
	}

	const handleRefreshClick = () => {
		setTodolists(null)
		setTimeout(() => {
			setTodolists(todolistsFromServer)
		}, 2000)
	}

	return (
		<div className='app'>
			<h2>Todolists</h2>
			<button onClick={handleRefreshClick}>refresh</button>
			{!todolists && <span>Loading...</span>}
			<hr />
			{todolists && todolists.length === 0 && <div>No todolists found</div>}
			{todolists &&
				todolists.map(tl => (
					<div key={tl.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
						<button onClick={() => handleDeleteTodolistClick(tl.id)}>delete</button>
						<Todolist id={tl.id} title={tl.title} tasks={tl.tasks} />
					</div>
				))}
		</div>
	)
}

export default App
