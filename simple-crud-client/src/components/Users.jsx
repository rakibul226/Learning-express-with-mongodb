
import {
    useLoaderData,
  } from "react-router-dom";

const Users = () => {

    const users = useLoaderData()
    return (
        <div>
            <h1>These Data coming from mongodb server</h1>
            <h3>Number of users {users.length}</h3>
            {users.map(user => (
                <p key={user._id}> {user.name} {user.email}</p>
            ))}
        </div>
    );
};

export default Users;