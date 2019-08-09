import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import PropTypes from "prop-types";
import axios from "../../orders-axios";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from "../../components/UI/Spinner/Spinner";

const PRICE_INGREDIENTS = {
  salad: 0.67,
  meat: 1.17,
  bacon: 0.84,
  cheese: 0.41
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    price: 6,
    enableCheckOut: false,
    modalShow: false,
    buffering: false,
    error: false
  };

  componentDidMount(){
    axios.get('/ingredients.json')
    .then ((res)=> {
      this.setState({ingredients : res.data})

    })
    .catch(err => {
      this.setState({
        error: true
      }
      )
    })
  }

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
    const order = {
      customer: {
        Name: "Ven Kotha",
        Phone: 1234567890,
        Address: {
          Street: "123 My Street",
          City: "MyCity",
          ZipCode: 54321
        }
      },
      ingredients: {
        salad: this.state.ingredients.salad,
        meat: this.state.ingredients.meat,
        bacon: this.state.ingredients.bacon,
        cheese: this.state.ingredients.cheese
      },
      price: this.state.ingredients.price,
      delivery: "standard"
    };
    this.setState({
      buffering:true
    });
    axios.post("/orders.json", order).then(res => {
      this.setState({ buffering: false, modalShow: false });
    }).catch(err => {
      this.setState({ buffering: false, modalShow: false });
    })
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
    let orderSummary = null;
    
    let burger = this.state.error? <p>Ingredients can't be loaded</p> : <Spinner/>
    if (this.state.ingredients){
      burger = (   <Aux>     
      <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          currentPrice={this.state.price}
          disabled={disabledInfo}
          clickedOrder={this.modalHandler}
          enableCheckOut={this.state.enableCheckOut}
        />
      </Aux> );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancelAction={this.closeModalHandler}
          continueAction={this.continueActionHandler}
          price={this.state.price}
        />
      );
    }
    if (this.state.buffering) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal
          style={this.state.modalShow}
          modalClosed={this.closeModalHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {
  continueActionHandler: PropTypes.func,
  orderButtonHandler: PropTypes.func
};

export default withErrorHandler(BurgerBuilder, axios);
