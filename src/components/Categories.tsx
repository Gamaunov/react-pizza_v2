import React from "react";
import { v4 as uuidv4 } from "uuid";

type CategoriesProps = {
  value: number
  onSelectCategory: (i:number)=>void
}

const Categories: React.FC<CategoriesProps> = ({ value, onSelectCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={uuidv4()}
            onClick={() => onSelectCategory(i)}
            className={value === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
