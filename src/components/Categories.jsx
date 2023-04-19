import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Categories = ({ value, onCategorySelect }) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={uuidv4()}
            onClick={() => onCategorySelect(i)}
            className={value === i ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
