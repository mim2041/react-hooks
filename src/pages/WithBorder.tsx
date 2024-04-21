import React from 'react';

const WithBorder = (WrapperComponent) => {
    return (props) => (
        <div className='border-2 border-purple-500 rounded-full'>
            <WrapperComponent {...props}/>
        </div>
    )
};

export default WithBorder;