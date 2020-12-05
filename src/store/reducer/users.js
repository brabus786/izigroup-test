import * as actionTypes from '../actions/actionTypes';
const initialState = {
    isLoading: false,
    isFail: false,
    list: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_USERS_START: {
            return {
                ...state,
                isLoading: true,
            }
        };
        case actionTypes.FETCH_USERS_SUCCESS: {
            return {
                ...state,
                list: [...state.list, ...action.payload.results],
                isLoading: false,
            }
        };
        case actionTypes.FETCH_USERS_FAIL: {
            return {
                ...state,
                isFail: true,
                isLoading: false,
            }
        };

        default: return state;
    }

};

export default reducer;