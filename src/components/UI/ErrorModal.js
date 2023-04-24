import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
export default function ErrorModal(props) {
  function errHandler(){
    props.resetErr(null)
  }
  return (
    <div>
      <div className={styles.backdrop} onClick={errHandler}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.content}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={errHandler}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}
