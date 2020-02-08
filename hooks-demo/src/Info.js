import React from 'react';
import useInputs from 'useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickName: ''
    });
    
    const { name, nickName } = state;

    return (
        <div>
            <input name='name' value={name} onChange={onChange}/>
            <input name='nickName' value={nickName} onChange={onChange}/>
            <div>
                <b>Name: </b>{name}<br />
                <b>NickName: </b>{nickName}
            </div>
            
        </div>
    );
}

export default Info;
