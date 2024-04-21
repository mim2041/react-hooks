import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = ( currentState, action ) => {
    console.log('Current State:', currentState, 'Action:', action);
    switch (action.type){
        case "increment" : 
            return { count : currentState.count + 1 };
        case "decrement" :
            return { count : currentState.count - 1 };
        case "decrementBy" :
            return { count : currentState.count - action.payload };
        default :
            return currentState;
    }
};

const UseReducerExample = () => {

    // const [ state, dispatch ] = useReducer(reducer, initialState);

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='m-24 text-center'>
            <h1>{state.count}</h1>
            <button
                onClick={() => dispatch({ type: 'increment' })} className='mx-3 bg-violet-500 text-white rounded-lg  px-4 py-2 mt-4'>Increment</button>
            <button 
                onClick={() => dispatch({ type: 'decrement'})} className='mx-3 bg-green-500 text-white rounded-lg  px-4 py-2 mt-4'>Decrement
            </button>
            <button 
                onClick={() => dispatch({ type: 'decrementBy', payload: 3})} className='mx-3 bg-pink-500 text-white rounded-lg  px-4 py-2 mt-4'>Decrement By 3
            </button>
        </div>
    );
};

export default UseReducerExample;