import React, { useReducer } from 'react';

type TAction = {
    type: string;
    payload: string;
}

const initialState = { name: "", email: "" };

const reducer = (currentState: typeof initialState, action : TAction) => {
    switch(action.type){
        case 'addName': 
            return { ...currentState, name: action.payload };
        case 'addEmail':
            return { ...currentState, email: action.payload };
        default:
            return currentState;
    }
}

const UseReducerForm = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(state);
    }

    return (
        <div className='mx-20 my-20'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <input type="text" name='name' id='name'
                    onChange={(e) => dispatch({ type: 'addName', payload: null || e.target.value })} className='border border-gray-300 py-2 rounded-lg px-3'/>
                <input type="name" name='email' id='email'
                    onChange={(e) => dispatch({ type: 'addEmail', payload: null || e.target.value})} className='border border-gray-300 py-2 rounded-lg px-3'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UseReducerForm;