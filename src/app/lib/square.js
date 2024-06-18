"use client";
import { useState } from "react";
import styles from "../page.module.css";

export default function Square({ value, onSquareClick }) {
    
    // let [value, setValue] = useState("");

    // function for adding interactivity
    // function handleClick() {
    //     // setValue("X");
    //     console.log("User Clicked");
    //     setValue('X');
    // }

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     try {
    //       await setValue('X');
    //     } catch (err) {
    //         console.log(err);
    //     }
    //   }

    return (
        <button
            className={styles.square}
            onClick={onSquareClick}
        > {value} </button>
    );
}
