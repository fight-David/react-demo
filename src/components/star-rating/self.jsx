import { FaStar } from "react-icons/fa"
import './styles.css'
import { useState } from "react"


export default function StatRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(index) {
        setRating(index)
    }

    function handleMouseMove(index) {
        setHover(index)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    return <FaStar
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                    />
                })
            }
        </div>
    )
}