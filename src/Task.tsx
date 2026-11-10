type TaskProps = {
	title: string
	isDone: boolean
}

export const Task = ({ title, isDone }: TaskProps) => {
	return (
		<li>
			<input type='checkbox' checked={isDone} readOnly />
			<span>{title}</span>
		</li>
	)
}
