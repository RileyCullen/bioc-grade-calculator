import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GradeTableRow } from '../../types';

interface GradeTableProps {
    /** Current table information to be displayed. */
    rows: GradeTableRow[];
    /** Update grade table rows. */
    setTableRows(rows: GradeTableRow[]): void;
}

// This is coupled to GradeTableRow defintion. There is probably a better way to
// link the two types TODO.
const COLUMN_DEF: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        type: 'string',
        editable: false,
        flex: 1
    },
    {
        field: 'average',
        headerName: 'Average',
        type: 'number',
        editable: true,
        flex: 1
    },
    {
        field: 'standardDeviation',
        headerName: 'Standard Deviation',
        type: 'number',
        editable: true,
        flex: 1
    },
    {
        field: 'score',
        headerName: 'Score',
        type: 'number',
        editable: true,
        flex: 1
    }
];

function GradeTable(props: GradeTableProps) {
    const { rows, setTableRows } = props;
    return (
        <DataGrid
            rows={rows}
            columns={COLUMN_DEF}
            processRowUpdate={processRowUpdate}
            hideFooter
        />
    );

    /** Keeps application state in-sync with table. */
    function processRowUpdate(
        updatedRow: GradeTableRow,
        originalRow: GradeTableRow
    ) {
        const newRows = [...rows];
        const idx = newRows.findIndex((row) => row.id === originalRow.id)
        newRows[idx] = updatedRow;
        setTableRows(newRows);
        return updatedRow
    }
}

export default GradeTable;
