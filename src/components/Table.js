import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
    const renderedRows = data.map(rowData => {
        const renderedCells = config.map(column => {
                return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
            });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    const renderedHeaders = config.map(header => {
        if (header.sort) {
            return <Fragment key={header.label}>{header.sort()}</Fragment>;
        }

        return (
            <th key={header.label}>{header.label}</th>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
};

export default Table;