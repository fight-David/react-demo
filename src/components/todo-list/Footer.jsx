export default function Footer({ todos, checkAllTodo, clearALLDone }) {

    const total = todos.length
    const doneTotal = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={(e) => checkAllTodo(e.target.checked)} checked={total === doneTotal && total !== 0 ? true : false} />
            </label>
            <span>
                <span>已完成 {doneTotal} </span> / 全部 {total}
            </span>
            <button onClick={clearALLDone} className="btn btn-danger">清楚已选择任务</button>
        </div>
    )
}