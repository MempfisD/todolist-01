import './App.css'
import { Todolist } from './Todolist.tsx'

function App() {
	return (
		<div className='app'>
			<Todolist title='Todolist 1' />
			<Todolist title='Todolist 2' />
			<Todolist title='Todolist 3' />
		</div>
	)
}

export default App
