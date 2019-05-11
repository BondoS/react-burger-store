import React from 'react';

import Aux from '../../../hoc/Auxiliry';

const orderSummery = (props) => {
  const ingredientSummery = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>
            {igKey}
          </span>
          : {props.ingredients[igKey]}
        </li>
      )
    })


  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummery}
      </ul>
      <p>Continue to Checkout</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  )
};

export default orderSummery;