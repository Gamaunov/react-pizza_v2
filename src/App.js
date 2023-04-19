import Header from './components/Header';
import Categories from './components/Categories';
import './scss/app.scss';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas.json';
import { useEffect, useState } from 'react';

function App() {
  const [pizzaAPI, setPizzaAPI] = useState([]);

  useEffect(() => {
    fetch('https://643f9012b9e6d064bef86a77.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => setPizzaAPI(arr));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
