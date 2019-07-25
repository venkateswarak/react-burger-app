import React from 'react'
import styles from "./BuildControls.module.css";
import BuildControl from "../BuildControl/BuildControl";
 const controls= [
    {label:'Salad', type : 'salad'},
    {label:'Meat', type :'meat'},
    {label:'Bacon', type : 'bacon'},
    {label:'Cheese', type : 'cheese'}
 ]

const buildControls = () => {
    return (
        <div className={styles.BuildControls}>
        {
            controls.map((control)=> {
                return <BuildControl key={control.label} label={control.label}/>
            })
        }
            
        </div>
    )
}

export default buildControls;
