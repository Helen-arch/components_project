import {useEffect, useRef, useState} from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler)
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = option => {
        setIsOpen(false);
        setSelected(option)
    };

    const renderedOptions = options.map(option => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    })

    return <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
            {selected?.label || 'Select'}
            <GoChevronDown/>
        </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
}

export default Dropdown;