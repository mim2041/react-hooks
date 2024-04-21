import React, { useState } from 'react';

const UseStateExample2 = () => {
    // const [ name, setName ] = useState(''); 
    // const [ email, setEmail ] = useState(''); 

    const [ user, setUser ] = useState({ name: '', email: '' });

    // console.log(name, email);

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(user);
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        console.log(user);
        // setUser({ ...user, name: e.target.value });

        const inputName = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [inputName]: value });
    }

    return (
        <div className='mx-20 my-20'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <input type="text" name='name' id='name'
                    onChange={ handleChange} className='border border-gray-300 py-2 rounded-lg px-3'/>
                <input type="name" name='email' id='email'
                    onChange={ handleChange} className='border border-gray-300 py-2 rounded-lg px-3'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UseStateExample2;