import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox () {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  
  return (
    <div className={css.searchBox}>
      <span>Find contact by name</span>
      <input
        className={css.searchField}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
        placeholder="Search"
      />
    </div>
  );
};