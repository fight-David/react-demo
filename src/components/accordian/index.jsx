// single
// multiple
import { useState } from 'react'
import data from './data'
import './style.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(id) {
        setSelected(selected === id ? null : id)
    }

    function handleMultipleSelection(id) {
        const cpyMutiple = [...multiple]
        const findIndexOfCurrentId = multiple.indexOf(id)

        if (findIndexOfCurrentId === -1) cpyMutiple.push(id)
        else cpyMutiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMutiple)
    }
    console.log(selected, multiple);

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length ? (
                        data.map(item => (
                            <div className="item" key={item.id}>
                                <div className="title" onClick={
                                    enableMultiSelection
                                        ? () => handleMultipleSelection(item.id)
                                        : () => handleSingleSelection(item.id)
                                }>
                                    <h3>{item.question}</h3>
                                    <span>+</span>
                                </div>
                                {enableMultiSelection
                                    ? multiple.indexOf(item.id) !== -1 && (<div className='content '>{item.answer}</div>)
                                    : selected === item.id && (<div className='content '>{item.answer}</div>)
                                }
                            </div>
                        ))
                    ) : (
                        <div>No data found!</div>
                    )
                }
            </div>
        </div >
    )
}