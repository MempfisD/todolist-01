type TodolistHeaderProps = {
	title: string
}

export const TodolistHeader = (props: TodolistHeaderProps) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input />
				<button>+</button>
			</div>
		</div>
	)
}
