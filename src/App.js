import Header from './components/Header';
import Categories from './components/Categories';
import './scss/app.scss';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
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
            <PizzaBlock title="Славянская удаль" price="394" />
            <PizzaBlock title="Подмосковные вечера" price="800" />
            <PizzaBlock title="Мексиканская ночь" price="384" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
