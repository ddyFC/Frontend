import React, {useState, useEffect} from 'react';
import './CSS/Player.css';

const Addplayer = ({onSaveData}) => {
    const [form, setForm] = useState({
        name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form);
        console.log(form);
        setForm({
            name: ''
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    return (
        <>
            <div>
                <h1>새로운 선수 등록</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>
                            <input placeholder = '이름을 입력하세요' type='text' name='name' value={form.name} onChange={handleChange}></input>
                        </label>
                    </div>
                    <button type='submit'>확인</button>
                </form>
            </div>
        </>
    );
};
export default Addplayer;