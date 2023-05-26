import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ];

    return <div className="flex">
        <Dropdown options={options} />
    </div>;
}

export default DropdownPage;