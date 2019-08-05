import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {
    let transformedIngredients = Object.keys (props.ingredients).map((ingKey)=>{
        return [...Array(props.ingredients[ingKey])].map((_,i)=>{
            return <BurgerIngredients key = {ingKey+i} type = {ingKey}/>
        })
    })
    .reduce((arr, el)=>{
         return arr.concat(el);
    },[]);
    if(transformedIngredients<1){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={styles.burger}>
            <BurgerIngredients type = 'bread-top'/>
            {transformedIngredients }
            <BurgerIngredients type = 'bread-bottom'/>
            
        </div>
    )
}

export default burger;
