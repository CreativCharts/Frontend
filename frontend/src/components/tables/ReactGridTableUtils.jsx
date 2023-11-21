export const getColumns = () => {

    const columns = [];

    for (let i = 1; i <= 10; i++) {

        columns.push({
            columnId: `col${i}`,
            title: `Col ${i}`
        });
    }
    return columns;
};

export const getRows = () => {

    const rows = [];

    for (let i = 1; i <= 4; i++) {
        const cells = [];

        for (let j = 1; j <= 10; j++) {
            cells.push({
                type: "text",
                text: '',
                className: `react-grid-cell react-grid-col${j}-cell`
            });
        }

        rows.push({
            rowId: `row${i}`,
            cells
        });
    }
    return rows;
};

export const getHeaders = () => {
    const headers = [];
    for (let i = 1; i <= 10; i++) {
        headers.push(`Col ${i}`);
    }
    return headers;
};

export const getRowsFromData = (data) => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
        const cells = [];
        for (let j = 0; j < data[i].length; j++) {
            cells.push({
                type: "text",
                text: String(data[i][j]),
                className: `react-grid-cell react-grid-col${j}-cell`,
                readOnly: false
            });
        }

        if (cells.length > 0) {
            rows.push({rowId: `row${i}`, cells});
        }
    }
    return rows;
};


export const getColumnsFromData = (data) => {
    const columns = [];
    for (let i = 0; i < data[0].length; i++) {
        columns.push({columnId: `col${i}`, title: `Col ${i}`});
    }
    return columns;
};

export const getHeadersFromData = (data) => {
    const headers = [];
    for (let i = 0; i < data[0].length; i++) {
        headers.push(`Col ${i}`);
    }
    return headers;
};

