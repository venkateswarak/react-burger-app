import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .reduce((r, e) => {
      return props.ingredients[e] === 0 ? r : r.concat(e);
    }, [])
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
          {props.ingredients[igKey]}
        </li>
      );
    });
  return (
    <Aux>
      <h3>Order Summary</h3>
      <p>Here is your delicious burger with following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to CheckOut?</p>
      <Button btnType="Danger" clicked={props.cancelAction}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.continueAction}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
