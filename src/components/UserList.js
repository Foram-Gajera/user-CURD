import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

function UserList() {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);
  const noUsers = (
    <tr>
      <td colSpan="3" className="h2" style={{ textAlign: "center" }}>
        No Users!
      </td>
    </tr>
  );
  const userData = users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/edit/${user.id}`} className="btn btn-warning mr-2">
          Edit
        </Link>
        <Button onClick={() => removeUser(user.id)} color="danger">
          Delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <Table bordered className="mt-2">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{users.length > 0 ? userData : noUsers}</tbody>
    </Table>
  );
}

export default UserList;
