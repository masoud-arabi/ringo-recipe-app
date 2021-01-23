import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calory, image, ingredients}) => {
    return(
        <div className="container">
            <div className={style.recipe}>
                <h2 className={style.title}>Title: {title}</h2>
                <img className={style.image} src={image} alt=""/>
                <h3>Description:</h3>
                <ul className={style.list}>{ingredients.map(i=>(
                    <li>{i.text}</li>
                    ))}
                </ul>
                <p className={style.calory}>calories: {calory}</p>
            </div>
        </div>
    );
}

export default Recipe;