export default function Header({ addTodo }) {
    const handleKeyUp = (event) => {
        // 解构赋值获取keyCode和target
        let { keyCode, target } = event
        // 判断是否点击的回车键
        if (keyCode !== 13) return
        // 输入为空判断
        if (target.value.trim() === '') {
            alert("输入内容不能为空！")
            return
        }
        // 准备todo对象
        const todoObj = {
            id: Math.random(),
            name: target.value,
            done: false
        }
        addTodo(todoObj)
        target.value = ''
    }

    return (
        <div>
            <input onKeyUp={handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"></input>
        </div>
    )
}