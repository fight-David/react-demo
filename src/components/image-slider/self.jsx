import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './self.css'

export default function ImageSlider({ url, page, limit }) {
    const [imgs, setImgs] = useState([])
    const [currentSlice, setCurrentSlice] = useState(0)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    async function fetchData(getUrl) {

        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImgs(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    function handlePrevious() {
        setCurrentSlice(currentSlice === 0 ? imgs.length - 1 : currentSlice - 1)
    }
    function handleNext() {
        setCurrentSlice(currentSlice === imgs.length - 1 ? 0 : currentSlice + 1)

    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    console.dir(imgs)

    if (loading) return <div>Loading data ! Please wait</div>

    if (errorMsg !== null) return <div>Error occured ! {errorMsg}</div>

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {
                imgs?.length && (
                    imgs.map((item, index) => (
                        <img key={item.id}
                            alt={item.download_url}
                            src={item.download_url}
                            className={
                                currentSlice === index
                                    ? "current-image"
                                    : "current-image hide-current-image"
                            }
                        />
                    ))
                )
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators">
                {imgs?.length
                    ? imgs.map((_, index) => (
                        <button
                            key={index}
                            className={
                                currentSlice === index
                                    ? "current-indicator"
                                    : "current-indicator inactive-indicator"
                            }
                            onClick={() => setCurrentSlice(index)}
                        ></button>
                    ))
                    : null}
            </span>
        </div>
    )
}