import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';
import styles from './Search.module.scss';

import TextField from '@material-ui/core/TextField';

const Search = ({ onChange, value }) => {
    //Дебаунс значения чтобе не перердеривать на каждом нажатии кнопки
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue, 300);

    useEffect(() => {
        onChange(searchValue);
    }, [debouncedSearchValue]);

    useEffect(() => {
        if(!value && searchValue) setSearchValue(''); 
    }, [value]);

    return (
        <TextField
            value={searchValue}
            onChange={(t) => setSearchValue(t.target.value)}
            id="outlined-basic"
            label="Search"
            className={styles.search}
        />
    );
}

export default Search;