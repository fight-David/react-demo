import { useEffect, useState } from "react"
import './self.css'

export default function LoadMoreData() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
            );
            const data = await response.json()

            if (data?.products?.length) {
                setProducts((prevData) => [...prevData, ...data.products]);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }



    useEffect(() => {
        fetchData()
    }, [count])

    useEffect(() => {
        if (products?.length >= 100) setDisableButton(true)
    }, [products])


    if (loading) {
        return <div>Loading data ! Please wait.</div>;
    }

    return (
        <div className="load-more-data">
            <div className="product-container">
                {
                    products?.length && (
                        products.map((item) => (
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        ))
                    )
                }
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
                {disableButton ? <p>You have reached to 100 products</p> : null}
            </div>
        </div>
    )
}
