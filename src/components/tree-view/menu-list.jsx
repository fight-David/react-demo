import MenuItem from "./menu-item";


export default function MenuList({ list = [] }) {
    return (
        <ul className="menu-list-container">
            {
                list?.length && list.map(item => <MenuItem key={item.label} item={item} />)
            }
        </ul>
    )
}