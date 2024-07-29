import Item from './Item'

export default function List({ todos, updateTodo, deleteTodo }) {
    return (
        <ul>
            {
                todos.map(todo =>
                    <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} ></Item>
                )
            }
        </ul>
    )
}