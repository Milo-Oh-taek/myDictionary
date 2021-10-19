import React from 'react'
import useFetch from '../hooks/useFetch'
import { useHistory } from 'react-router';

const CreateDay = () => {
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();

    onsubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                day : days.length + 1
            })
        }).then(res => {
            if (res.ok){
                alert('success');
                history.push(`/`);
            }
        })
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={onsubmit}>add Day</button>
        </div>
    )
}

export default CreateDay
