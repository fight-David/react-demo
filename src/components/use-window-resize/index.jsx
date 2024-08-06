import { useLayoutEffect } from "react";
import { useState } from "react";

// 使用 useEffect 进行常规副作用处理，确保不会影响用户体验。
// 使用 useLayoutEffect 在需要立即读取布局或进行 DOM 操作时，确保在用户看到更新之前完成。

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }


  useLayoutEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
