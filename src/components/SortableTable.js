import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp} from "react-icons/go";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
    const { config, data } = props;
    const { setSortColumn, sortBy, sortOrder, sortedData } = useSort(data, config);


    const updatedConfig = config.map(column => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            sort: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                <div className="flex items-center">
                    {getIcon(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        };
        });

    return (
            <Table {...props} data={sortedData} config={updatedConfig}/>
    );
}

const getIcon = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>
        );
    }

    if (sortOrder === null) {
        return (
            <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>
        );
    } else if (sortOrder === 'asc') {
        return <GoArrowSmallUp/>;
    } else if (sortOrder === 'desc') {
        return <GoArrowSmallDown/>;
    }
}

export  default SortableTable;