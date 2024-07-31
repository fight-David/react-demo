// 自定义 Hook 使得在 React 组件中使用本地存储变得更加简单和直观
// 避免了重复的代码，并提供了更好的错误处理。

import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        // 这个函数只会在第一次渲染时执行
        let currentValue

        try {
            currentValue = localStorage.getItem(key) || String(defaultValue)
        } catch (error) {
            console.log(error);
            currentValue = defaultValue
        }

        return currentValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue];
}