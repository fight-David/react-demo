import { useMemo, useState } from "react"
import users from './data.json'
import './style.css'

const columns = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Age", key: "age" },
    { label: "Occupation", key: "occupation" },
];

function paginateUsers(userList, page, pageSize) {

    const start = (page - 1) * pageSize
    const end = start + pageSize
    const pageUsers = userList.slice(start, end)
    const totalPages = Math.ceil(userList.length / pageSize)

    return {
        pageUsers, totalPages
    }
}

export default function DataTablePaginated() {

    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)

    const { pageUsers, totalPages } = useMemo(() => paginateUsers(users, page, pageSize), [users, page, pageSize])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            columns.map(({ label, key }) => <td key={key}>{label}</td>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        pageUsers.map(({ id, name, age, occupation }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{occupation}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="pagination">
                <select onChange={(e) => {
                    setPageSize(+e.target.value)
                    setPage(1)
                }}>
                    {
                        [5, 10, 20].map(item => <option key={item} value={item}>Show {item}</option>)
                    }
                </select>

                <button disabled={page === 1} onClick={() => setPage(page - 1)}>prev</button>
                <span>Page {page} of {totalPages}</span>
                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>next</button>
            </div>
        </div>
    )
}