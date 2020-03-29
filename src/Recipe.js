 import React from "react";
import style from './recipies.module.css'

const Recipe = (props) => {
    return(
        <div className={style.recipe}>
            <h1>Title {props.title}</h1>
            <ol>
                {props.test.map(item => (
                    <li>{item.text}</li>
                ))}
            </ol>
            <p>Calories {props.calories}</p>
            <img src={props.img} alt=""/>
        </div>
    );
}

export default Recipe;