import React, { useState } from 'react';

const Info = () => {
    const [userNm, setUserNm] = useState('');
    const [userId, setUserId] = useState('');

    const onChnageName = e => {
        setUserNm(e.target.value)
    }

    const onChangeId = e => {
        setUserId(e.target.value);
    }
    return(
        <>
            <input name='user_nm' value={userNm} onChange={onChnageName}></input> 
            <input name='user_id' value={userId} onChange={onChangeId}></input>
            <div>
                User Name: {userNm}
                <br />
                User Id: {userId}
            </div>
        </>
    );
}

export default Info;
