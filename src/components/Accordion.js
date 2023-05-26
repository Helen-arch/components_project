import {useState} from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedIndex(currentExpandedIndex => {
            if (currentExpandedIndex === nextIndex) {
                return -1
            } else return nextIndex;
        });
    };

    const renderedList = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>;

        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)} className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
             </div>
                )
    });

    return <div className="border-x border-t rounded">{renderedList}</div>
}

export default Accordion;