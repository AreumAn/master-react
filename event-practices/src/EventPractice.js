import React, { useState } from "react";

const EventPractice = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const onChangeName = e => setName(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);

    const onClick = () => {
        alert(name + ': ' + message);
        setName('');
        setMessage('');
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return(
        <div>
            <h1>Event Practice</h1>
            <input
                type="text"
                name="name"
                placeholder="put your name"
                value={name}
                onChange={onChangeName}></input>
            <input
                type="text"
                name="message"
                placeholder="put your massage"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>Click</button>
        </div>
    );
}

export default EventPractice;
