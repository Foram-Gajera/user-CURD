import React, { useContext, useState } from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

function AddUser() {
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name: name,
      email: email,
    };
    addUser(newUser);
    history.push("/");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Add User</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Enter Name"
          />
          <Label>Email</Label>
          <Input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder="Enter Email"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default AddUser;
