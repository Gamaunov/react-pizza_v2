import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

import s from './Search.module.scss';
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/filter/filterSlice";

const Search:React.FC = () => {
    const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onClear = () => {
      dispatch(setSearchValue(''));
      setValue('');
      inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
      debounce((str:string) => {
          dispatch(setSearchValue(str));
      }, 150),
      [],
  );

  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={s.root}>
      <svg
        className={s.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={s.input}
        placeholder="Поиск..."
      />
      {value && (
        <svg
          onClick={onClear}
          className={s.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
