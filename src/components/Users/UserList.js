import React from 'react'
import styles from './UserList.module.css'
import Card from '../UI/Card'
export default function UserList(props) {
  return (
    <Card className={styles.users}>
    <ul>
        {props.list.map((item,index)=>{
            return <li key={index}>{item.username} {item.age} years old</li>
        })}
    </ul>
    </Card>
  )
}
