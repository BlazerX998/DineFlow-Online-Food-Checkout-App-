import { useContext } from 'react';

import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import './MealItem.css';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-card">
      <img className="meal-image" src={`/${meal.image}`} alt={meal.name} />
      <div className="meal-details">
        <h3>{meal.name}</h3>
        <p className="meal-description">{meal.description}</p>
        <div className="meal-footer">
          <span className="meal-price">{currencyFormatter.format(meal.price)}</span>
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}