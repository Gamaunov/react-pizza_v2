import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Categories from '../components/Categories';
import Pagination from '../components/pagination/Pagination';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = ({ searchValue }) => {
  const [pizzaAPI, setPizzaAPI] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoaded(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      ` https://643f9012b9e6d064bef86a77.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzaAPI(arr);
        setIsLoaded(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = pizzaAPI.map((pizza) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));
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
      <Pagination onChangePage={(page) => setCurrentPage(page)} />
    </>
  );
};

export default Home;
