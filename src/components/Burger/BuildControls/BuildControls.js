import React from 'react'
import styles from "./BuildControls.module.css";
import BuildControl from "../BuildControl/BuildControl";
 const controls= [
    {label:'Salad', type : 'salad'},
    {label:'Meat', type :'meat'},
    {label:'Bacon', type : 'bacon'},
    {label:'Cheese', type : 'cheese'}
 ]

const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
        <p> Total Price = <strong>${props.currentPrice.toFixed(1)}</strong></p>
        {
            controls.map((control)=> {
                return <BuildControl key={control.label} label={control.label}
                added={() => props.addIngredient(control.type)}
                removed={() => props.removeIngredient(control.type)}
                disabled = {props.disabled[control.type]}/>
            })
        }
           <button className={styles.OrderButton} 
           onClick = {props.clickedOrder}
           disabled = {!props.enableCheckOut}>ORDER NOW</button> 
        </div>
    )
}

export default buildControls;
