import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {
    var transformedIngredients = Object.keys (props.ingredients).map((ingKey)=>{
        return [...Array(props.ingredients[ingKey])].map((_,i)=>{
            return <BurgerIngredients key = {ingKey+i} type = {ingKey}/>
        })
    });
    console.log('transformedIngredients', transformedIngredients);
    return (
        <div className={styles.burger}>
            <BurgerIngredients type = 'bread-top'/>
            {transformedIngredients }
            <BurgerIngredients type = 'bread-bottom'/>
            
        </div>
    )
}

export default burger;
