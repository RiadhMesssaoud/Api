import React ,{useState,useEffect} from 'react';
import instance from './axios';
import axios from './axios';
function UserList() {
    const [users, setUser] = useState([])

useEffect(() => {
    async function fetchData(){
const request = await axios.get('https://jsonplaceholder.typicode.com/users');
console.log (request);
setUser(request.data)
    }
    fetchData()

    }
, [])
    return (
        <div>
            {users.map(user=>
                <p key={user.id} style={{color: "red"}}>
                {user.name}
                </p> )}
        </div>
    )
}

export default UserList