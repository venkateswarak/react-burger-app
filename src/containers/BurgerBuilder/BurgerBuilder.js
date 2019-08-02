import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const PRICE_INGREDIENTS = {
  salad: 0.67,
  meat: 1.17,
  bacon: 0.84,
  cheese: 0.41
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0
    },
    price: 6,
    enableCheckOut: false,
    modalShow: false
  };

  orderButtonHandler(ingredients) {
    const count = Object.keys(ingredients)
      .map(ig => ingredients[ig])
      .reduce((total, el) => {
        return total + el;
      }, 0);
    this.setState({
      enableCheckOut: count > 0
    });
  }

  modalHandler = () => {
    this.setState({
      modalShow: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      modalShow: false
    });
  };
  continueActionHandler = () => {
    alert("So you choose to continue?");
  };

  addIngredient = type => {
    let dupIngredients = this.state.ingredients[type];
    dupIngredients = dupIngredients + 1;
    const getIngredients = { ...this.state.ingredients };
    getIngredients[type] = dupIngredients;
    const currentPrice = this.state.price;
    const updatedPrice = currentPrice + PRICE_INGREDIENTS[type];
    this.setState({
      ingredients: getIngredients,
      price: updatedPrice
    });
    this.orderButtonHandler(getIngredients);
  };
  removeIngredient = type => {
    let dupIngredients = this.state.ingredients[type];
    if (dupIngredients <= 0) {
      return;
    }
    dupIngredients = dupIngredients - 1;
    const getIngredients = { ...this.state.ingredients };
    getIngredients[type] = dupIngredients;
    const currentPrice = this.state.price;
    const updatedPrice = currentPrice - PRICE_INGREDIENTS[type];
    this.setState({
      ingredients: getIngredients,
      price: updatedPrice
    });
    this.orderButtonHandler(getIngredients);
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          style={this.state.modalShow}
          modalClosed={this.closeModalHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            cancelAction={this.closeModalHandler}
            continueAction={this.continueActionHandler}
            price={this.state.price}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          currentPrice={this.state.price}
          disabled={disabledInfo}
          clickedOrder={this.modalHandler}
          enableCheckOut={this.state.enableCheckOut}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
