type TaskProps = {
	title: string
	isDone: boolean
}

export const Task = (props: TaskProps) => {
	return (
		<li>
			<input type='checkbox' checked={props.isDone} readOnly />
			<span>{props.title}</span>
		</li>
	)
}
