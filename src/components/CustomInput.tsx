import React, { forwardRef } from 'react';

type CustomInputProps = {
    className: string;

}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps >(({ className, }, inputRef) => {
    return (
        <div>
            <input 
                ref={inputRef}
                type="text" 
                name="name" 
                id="name" 
                className={className}/>
        </div>
    );
});

export default CustomInput;