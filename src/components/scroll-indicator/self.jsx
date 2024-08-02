import { useEffect, useState } from "react";
import './self.css'

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([])
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()

            if (data?.products?.length) {
                setData(data.products)
                setLoading(false)
            }

        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    function handleScrollPercentage() {
        // console.log(
        //     document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight
        // );
        // 500      视口高度
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        // 3800-953 总高度-视口高度 = 要滑动的高度
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((howMuchScrolled / height) * 100);

    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, [])

    console.log(scrollPercentage);

    if (errorMsg) {
        return <div>Error ! {errorMsg}</div>;
    }

    if (loading) {
        return <div>Loading data ! Pleaae wait</div>;
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-container">
                    <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>
            <div className="data-container">
                {
                    data?.length && data.map(item => (
                        <p>{item.title}</p>
                    ))
                }
            </div>
        </div>
    )

}