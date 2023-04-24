import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
export default function AddUser(props) {
  const [state, setState] = useState({
    username: "",
    age: 0,
  });
  function onHandlerChange(e) {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function addUser(event) {
    event.preventDefault();
    if(state.username.trim().length === 0 || +state.age <1){
        setErr({
          title: "Invalid input",
          content: "Please enter valid name and age!"
        })
        return
    }
    props.onAddUser(state)
    setState({
      username: "",
      age: 0,
    });
  }

  const [err,setErr] = useState()

  return (
    <>{err && <ErrorModal resetErr={setErr} title={err.title} content={err.content}></ErrorModal>}
    <Card className={styles.input}>
      <form onSubmit={addUser}>
        <label htmlFor="username">Username</label>
        <input
          onChange={onHandlerChange}
          name="username"
          value={state.username || ""}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age</label>
        <input
          onChange={onHandlerChange || 0}
          name="age"
          value={state.age}
          id="age"
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
}
