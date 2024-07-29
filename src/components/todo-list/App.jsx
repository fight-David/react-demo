import { useState } from "react";
import Header from "./projects/TodoList/Header";
import List from "./projects/TodoList/List";
import Footer from "./projects/TodoList/Footer";
export default function App() {
  const [todos, setTodos] = useState(initData)

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const updateTodo = (id, done) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done }
      return todo
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const checkAllTodo = (done) => {
    let newTodos = todos.map((todo) => {
      return { ...todo, done }
    })
    setTodos(newTodos)
  }

  const clearALLDone = () => {
    let newTodos = todos.filter(todo => !todo.done)
    setTodos(newTodos)
  }


  return (
    <div>
      <Header addTodo={addTodo} ></Header>
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}></List>
      <Footer todos={todos} checkAllTodo={checkAllTodo} clearALLDone={clearALLDone} />
    </div>
  )
}


const initData = [
  { id: '001', name: '吃饭', done: true },
  { id: '002', name: '睡觉', done: true },
  { id: '003', name: '色色', done: false },
  { id: '004', name: '游戏', done: false },
]