import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Categories from '../components/Categories';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = ({ searchValue }) => {
  const [pizzaAPI, setPizzaAPI] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoaded(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    fetch(
      ` https://643f9012b9e6d064bef86a77.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzaAPI(arr);
        setIsLoaded(false);
      });
  }, [categoryId, sortType]);

  const pizzas = pizzaAPI
    .filter((obj) =>
      obj.title.toLowerCase().includes(searchValue) ? true : false,
    )
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeletons = [...new Array(6)].map((_) => <Skeleton key={uuidv4()} />);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onCategorySelect={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onSortSelect={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoaded ? skeletons : pizzas}</div>
    </>
  );
};

export default Home;
