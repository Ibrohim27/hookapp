import React, { useState } from 'react';

const Help = () => {

    const [person, setPerson] = useState({
        ism: '',
        yosh: '',
        raqam: ''
    })

    const setData = (e) => {
        e.preventDefault();
        let user = {}
        let form = document.forms.person

        let personForm = new FormData(form)
        personForm.forEach((data, key) => {
            user[key] = data
        })
        setPerson(user)
    }

    return(
        <form name="person" onSubmit={(event) => setData(event)}>
            {person.ism} | {person.yosh} | {person.raqam    }
            <input name='ism'/>
            <input name='yosh'/>
            <input name='raqam'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Help