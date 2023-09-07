import { useEffect, useState } from "react"
import './Users.css'

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div className="boxs">
            <h3>Users: {users.length}</h3>
        </div>
    )
}