import { Dispatch } from 'react';

type TCounter = {
    counter: number;
    setCounter: Dispatch<React.SetStateAction<number>>;
}

const UseStateExample = ({counter, setCounter} :TCounter) => {

    return (
        <div className='m-20'>
            <h1 className='mx-auto text-center'>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)} className="">Increment</button>
            <button onClick={() => setCounter(counter-1)}>Decrement</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
};

export default UseStateExample;