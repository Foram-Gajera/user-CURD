import React, { useContext, useState, useEffect } from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

function EditUser(props) {
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();

  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setselectedUser(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = () => {
    debugger;
    editUser(selectedUser);
    history.push("/");
  };

  const [selectedUser, setselectedUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleName = (e) => {
    setselectedUser({ ...selectedUser, name: e.target.value });
  };

  const handleEmail = (e) => {
    setselectedUser({ ...selectedUser, email: e.target.value });
  };

  // const handleChange = (e) => {
  //   setselectedUser({ ...setselectedUser, [e.target.name]: e.target.value });
  // [e.target.name]: e.target.value => to use this we need to add name attr in each field
  // };

  return (
    <div>
      <h1>Edit User</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={selectedUser.name}
            onChange={handleName}
            placeholder="Enter Name"
          ></Input>
          <Label>Email</Label>
          <Input
            type="text"
            value={selectedUser.email}
            onChange={handleEmail}
            placeholder="Enter Email"
          ></Input>
        </FormGroup>
        <Button type="submit">Edit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default EditUser;
