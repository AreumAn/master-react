import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = id => async dispatch => {
    dispatch({ type: GET_POST });   // Start request
    try {
        const response = await api.getPost(id);
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data
        }); // Success request
    } catch(e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        }); // Request Error 
        throw e;
    };
}

export const getUsers = () => async dispatch => {
    dispatch({ type: GET_USERS });   // Start request
    try {
        const response = await api.getUser();
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        }); // Success request
    } catch(e) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true
        }); // Request Error 
        throw e;
    };
}

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const sample = handleActions(
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true // Start request
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false // Request Done
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false // Request Done
            },
        }),
        [GET_USERS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true // Start request
            }
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false // Request Done
            },
            users: action.payload
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false // Request Done
            },
        })
    },
    initialState
);

export default sample;
