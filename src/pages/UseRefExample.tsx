import React, { useRef, useState } from 'react';

const UseRefExample = () => {
    const [ count , setCount] = useState(0);
    const myRef = useRef(0);

    const increment = () => {
        myRef.current += 1;
        setCount(count + 1);
        console.log(myRef.current);
    }
    return (
        <div className='m-24 text-center text-2xl'>
            <h1>{myRef.current}</h1>
            <button onClick={() => increment()}>Increment</button>
        </div>
    );
};

export default UseRefExample;