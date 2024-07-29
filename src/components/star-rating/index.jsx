import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(index) {
        setRating(index)
    }
    function handleMouseEnter(index) {
        setHover(index)
    }
    function handleMouseLeave() {
        // 例如我如果此前设置了5，但是我hover中leave 的index为2，但是我还是得设置为5
        setHover(rating)
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index++
                    return <FaStar
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        key={index}
                        size={40}
                    />
                })
            }
        </div>
    )
}