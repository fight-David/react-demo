// const response = await fetch("https://dummyjson.com/users");

import { useEffect, useState } from "react"
import Suggestions from "./suggesstions"


export default function SearchAutocomplete() {

    const [users, setUsers] = useState([]);
    const [searchParam, setSearchParam] = useState('')
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);


    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }

        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users?.length
                ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(event) {
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }

    useEffect(() => {
        fetchData()
    }, [])


    console.log(users);
    return (
        <div className="search-auto-container">
            <input type="text"
                value={searchParam}
                name="search-users"
                placeholder="Search Users here..."
                onChange={handleChange}
            />

            {
                showDropdown && <Suggestions data={filteredUsers} handleClick={handleClick} />
            }
        </div>
    )

}