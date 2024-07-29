export default function Item(props) {
    const { name, done, id, updateTodo, deleteTodo } = props

    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={(e) => updateTodo(id, e.target.checked)}></input>
                <span>{name}</span>
            </label>
            <button className="" onClick={() => deleteTodo(id)}>删除</button>
        </li>
    )
}