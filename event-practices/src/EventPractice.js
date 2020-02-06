import React, { useState } from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        name: '',
        message: ''
    })
    const { name, message } = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }

    const onClick = () => {
        alert(name + ': ' + message);
        setForm({
            name: '',
            message: ''
        });
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
                onChange={onChange}></input>
            <input
                type="text"
                name="message"
                placeholder="put your massage"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>Click</button>
        </div>
    );
}

export default EventPractice;
