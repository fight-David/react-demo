
import { useState } from 'react'
import data from './data'
import './style.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMulti, setEnableMulti] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleClick(id) {
        setSelected(id === selected ? null : id)
    }

    function handleMultipleClick(id) {
        const cpyMutiple = [...multiple]
        const findIndexOfCurrentId = multiple.indexOf(id)

        if (findIndexOfCurrentId === -1) cpyMutiple.push(id)
        else cpyMutiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMutiple)
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMulti(!enableMulti)}>{enableMulti ? 'disable' : 'enable'} Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length ? (
                        data.map(item => (
                            <div className="item" key={item.id} onClick={
                                enableMulti
                                    ? () => handleMultipleClick(item.id)
                                    : () => handleSingleClick(item.id)}>
                                <div className="title">
                                    <h3>{item.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMulti
                                        ? multiple.includes(item.id) && <div className='content'>{item.answer}</div>
                                        : selected === item.id && <div className='content'>{item.answer}</div>
                                }
                            </div>
                        ))
                    ) : (
                        <div>No data found!</div>
                    )
                }
            </div>
        </div>
    )
}