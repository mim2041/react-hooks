import React, { useEffect, useRef } from 'react';
import CustomInput from '../components/CustomInput';

const UseRefExample2 = () => {
    const myRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log(myRef?.current?.value);
    }

    useEffect(() => {
        myRef?.current?.focus();
    }, []);

    return (
        <div className='m-20 text-center'>
            <h1>UseRef</h1>
            <form onSubmit={handleSubmit}>
                <CustomInput
                    ref={myRef}
                    className={'border border-red-400 py-2 rounded-lg w-1/2 my-5'}/>
                <button className='bg-blue-500 text-white p-2 rounded-lg'>Submit</button>
            </form>
            
        </div>
    );
};

export default UseRefExample2;