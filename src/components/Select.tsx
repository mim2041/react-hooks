import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

const Select = ({ children }) => {

    const [ selectedOption, setSelectedOption ] = useState(null);

    return (
        <SelectContext.Provider value={{ selectedOption, setSelectedOption}}>
            <select onChange={(e) => setSelectedOption(e.target.value)}>
                {children}
            </select>
        </SelectContext.Provider>
    )
};


const SelectOption = ({ value, children }) => {
    const { selectedOption } = useSelectContext();
    
    const isActive = selectedOption === value;


    return <option className={`${isActive ? 'bg-purple-500' : ''}`} value={value}>{children}</option>
}

Select.SelectOption = SelectOption;

export default Select;

const useSelectContext = () => {
    const context = useContext(SelectContext);

    if(!context) {
        throw new Error('useSelectContext must be used within SelectProvider');
    }

    return context;
}