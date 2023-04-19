import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Categories from '../components/Categories';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
  const [pizzaAPI, setPizzaAPI] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetch('https://643f9012b9e6d064bef86a77.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setPizzaAPI(arr);
        setIsLoaded(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? [...new Array(6)].map((_) => <Skeleton key={uuidv4()} />)
          : pizzaAPI.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  );
};

export default Home;
