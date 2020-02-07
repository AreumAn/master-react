import React, { useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e) => {
        setNickName(e.target.value)
    }
    
    return (
        <div>
            <input onChange={onChangeName}/>
            <input onChange={onChangeNickName}/>
            <div>
                <b>Name: </b>{name}<br />
                <b>NickName: </b>{nickName}
            </div>
            
        </div>
    );
}

export default Info;
