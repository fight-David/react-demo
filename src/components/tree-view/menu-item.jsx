
import { FaMinus, FaPlus } from 'react-icons/fa'
import MenuList from './menu-list'
import { useState } from 'react'

export default function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})


    function handleToggleChildren(label) {

        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [label]: !displayCurrentChildren[label]
        })
    }
    console.log(displayCurrentChildren);

    return (
        <li >
            <div className="menu-item">
                <p>{item.label}</p>
                {
                    item?.children?.length && (
                        <span onClick={() => handleToggleChildren(item.label)}>
                            {
                                displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
                            }
                        </span>
                    )
                }
            </div>
            {
                item?.children?.length && displayCurrentChildren[item.label] && <MenuList list={item.children} />
            }
        </li>
    )
}