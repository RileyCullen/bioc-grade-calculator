import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { GradeTableRow } from '../../types';

interface GradeTableProps {
    /** Current table information to be displayed. */
    rows: GradeTableRow[];
}

// This is coupled to GradeTableRow defintion. There is probably a better way to
// link the two types TODO.
const COLUMN_DEF: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        type: 'string',
        editable: false
    },
    {
        field: 'average',
        headerName: 'Average',
        type: 'number',
        editable: true
    },
    {
        field: 'standardDeviation',
        headerName: 'Standard Deviation',
        type: 'number',
        editable: true
    },
    {
        field: 'score',
        headerName: 'Score',
        type: 'number',
        editable: true
    },
    {
        field: 'zScore',
        headerName: 'Z-Score',
        type: 'number',
        editable: false
    }
];

function GradeTable(props: GradeTableProps) {
    const { rows } = props;
    const dataGridRows = createDataGridRows(rows);
    return (
        <DataGrid rows={dataGridRows} columns={COLUMN_DEF} />
    );
}

function createDataGridRows(rows: GradeTableRow[]): GridRowsProp {
    return rows.map((row, i) => ({
        ...row,
        id: i 
    }));
}

export default GradeTable;
