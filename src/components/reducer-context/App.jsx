import AddTask from './projects/Reducer-Context/AddTask';
import TaskList from './projects/Reducer-Context/TaskList';
import { TasksProvider } from './projects/Reducer-Context/TasksContext';
export default function TaskApp() {

  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}
 