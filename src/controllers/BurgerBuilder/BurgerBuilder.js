import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const PRICE_INGREDIENTS ={
    salad:0.67,
    meat:1.17,
    bacon:0.84,
    cheese:0.41,
}
class BurgerBuilder extends Component{
    state={
        ingredients: {
            salad:0,
            meat:0,
            bacon:0,
            cheese:0,
        },
        price : 6
    }

    addIngredient = (type) => {
        let dupIngredients = this.state.ingredients[type];
        dupIngredients = dupIngredients + 1;
        const getIngredients = {...this.state.ingredients};
        getIngredients[type] = dupIngredients;
        const currentPrice = this.state.price;
        const updatedPrice = currentPrice + PRICE_INGREDIENTS[type];
        this.setState ({
            ingredients : getIngredients,
            price: updatedPrice
        })
    }
    removeIngredient = (type) => {
        let dupIngredients = this.state.ingredients[type];
        if(dupIngredients <= 0){
            return;
        }
        dupIngredients = dupIngredients - 1;
        const getIngredients = {...this.state.ingredients};
        getIngredients[type] = dupIngredients;
        const currentPrice = this.state.price;
        const updatedPrice = currentPrice - PRICE_INGREDIENTS[type];
        this.setState ({
            ingredients : getIngredients,
            price: updatedPrice
        })

    }
    render(){
        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0 ;
        }
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls addIngredient = {this.addIngredient}
                removeIngredient = {this.removeIngredient}
                currentPrice = {this.state.price}
                disabled={disabledInfo}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;