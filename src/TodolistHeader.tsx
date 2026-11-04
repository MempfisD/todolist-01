type TodolistHeaderProps = {
	title: string
	countTasks: number
}

export const TodolistHeader = (props: TodolistHeaderProps) => {
	return (
		<div>
			<h3>
				{props.title} <span>({props.countTasks})</span>
			</h3>
			<div>
				<input />
				<button>+</button>
			</div>
		</div>
	)
}
