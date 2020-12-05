import React, { useEffect, useState } from 'react';
import styles from './HomePageTemplate.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/actions/fetchUser';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import UserCard from '../../components/UserCard/UserCard';
import Search from '../../components/Search/Search';
import MyButton from '../../components/UI/MyButton/MyButton';

const HomePageTemplate = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);
    const isLoading = useSelector(state => state.users.isLoading);
    
    const [search, setSearch] = useState('');
    const [queryParams, setQueryParams] = useState({
        page: 1,
        results: 10,
    });
    
    useEffect(() => {
        setSearch('');
        dispatch(fetchUsers(queryParams));
    }, [queryParams]);

    const addUser = () => {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }


    let usersArr = users;
    if (search) {
        const searchTerm = search.toLowerCase();
        const filteredUsers = users.filter(function (x) {
            if (x.email.toLowerCase().includes(searchTerm)) return true;
            if (x.phone.toLowerCase().includes(searchTerm)) return true;
            if (x.name.first.toLowerCase().includes(searchTerm)) return true;
            if (x.name.last.toLowerCase().includes(searchTerm)) return true;
            return false;
        });
        usersArr = filteredUsers;
    }

    return (
        <div className={styles.HomePageTemplate}>
            <Container className={styles.HomePageTemplate__container}>
                <div className={styles.HomePageTemplate__form}>
                    <Search onChange={value => setSearch(value)} value={search} />
                </div>

                <Grid
                    container
                    spacing={5}
                >
                    {usersArr.map((u) => {
                        console.log(u)
                        return (
                            <Grid key={u.login.uuid} item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <UserCard
                                    profileImgLarge={u.picture.large}
                                    profileImgThumbnail={u.picture.thumbnail}
                                    firstName={u.name.first}
                                    lastName={u.name.last}
                                    email={u.email}
                                    phone={u.phone}
                                    dob={u.dob.date}
                                    age={u.dob.age}
                                    location={u.location}
                                />
                            </Grid>
                        );
                    })}
                </Grid>

                <div className={styles.HomePageTemplate__action}>
                    <MyButton
                        onClick={() => addUser()}
                        variant="contained"
                        color="secondary"
                        fullWidth={true}
                        size="large"
                        isLoading={isLoading}
                    >
                        Добавить 10
                    </MyButton>
                </div>
            </Container>
        </div>
    )
}

export default HomePageTemplate;
