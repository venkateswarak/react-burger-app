import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientsSummary =  Object.keys(props.ingredients)
    .reduce((r, e) => {
        return props.ingredients[e] === 0 ? r : r.concat(e);
      }, [])
    .map (igKey =>{
        return (<li key={igKey} >
            <span style = {{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
        </li>
    );
    });
    console.log('ingredientsSummary', ingredientsSummary);
    
    
        


    return (
        <Aux>
        <h3>Order Summary</h3> 
        <p>Here is your delicious burger with following ingredients:</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p>Continue to CheckOut?</p>
        </Aux>
)
    }

export default orderSummary;
