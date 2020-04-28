import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const InfoWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        userNm: '',
        userId: ''
    })

    const { userNm, userId } = state;

    const onChange = e => {
        dispatch(e.target);
    };

    return(
        <>
            <input name='userNm' value={userNm} onChange={onChange}></input> 
            <input name='userId' value={userId} onChange={onChange}></input>
            <div>
                User Name: {userNm}
                <br />
                User Id: {userId}
            </div>
        </>
    );
}

export default InfoWithReducer;
