import * as React from "react";
import { render } from "react-dom";
import { ReactGrid, Column, Row } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";




const getPeople = () => [
    { name: "Thomas", surname: "Goldman" },
    { name: "Susie", surname: "Quattro" },
    { name: "", surname: "" }
];

const getColumns = () => [
    { columnId: "name", width: 150 },
    { columnId: "surname", width: 150 }
];

const headerRow = {
    rowId: "header",
    cells: [
        { type: "header", text: "Name" },
        { type: "header", text: "Surname" }
    ]
};

const getRows = (people) => [
    headerRow,
    ...people.map((person, idx) => ({
        rowId: idx,
        cells: [
            { type: "text", text: person.name },
            { type: "text", text: person.surname }
        ]
    }))
];

function App() {
    const [people] = React.useState(getPeople());

    const rows = getRows(people);
    const columns = getColumns();

    return <ReactGrid rows={rows} columns={columns} />;
}

render(<App />, document.getElementById("root"));