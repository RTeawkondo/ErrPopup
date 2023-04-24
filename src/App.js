import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [list,setList] = useState([{
    username: "hehe" ,
    age: 5
  }])
  function onAddUser(state){
    setList(prev=>{
      return [
        ...prev,
        state
      ]
    })
  }
  return (
    <div>
      <AddUser onAddUser = {onAddUser}/>
      <UserList list={list}/>
    </div>
  );
}

export default App;
