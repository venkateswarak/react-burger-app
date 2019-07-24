import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {
    return (
        <div className={styles.burger}>
            <BurgerIngredients type = 'bread-top'/>
            <BurgerIngredients type = 'salad'/>
            <BurgerIngredients type = 'meat'/>
            <BurgerIngredients type = 'cheese'/>
            <BurgerIngredients type = 'bread-bottom'/>
            
        </div>
    )
}

export default burger;
