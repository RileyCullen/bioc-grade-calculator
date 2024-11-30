import { GridRowProps } from "@mui/x-data-grid";

export interface GradeState {
    /** Grade table. */
    gradeTableRows: GradeTableRow[];
}

export interface GradeTableRow {
    /** Name for entry. */
    name: string;
    /** Average of all scores for entry. */
    average: number;
    /** Standard deviation of all scores for entry. */
    standardDeviation: number;
    /** User's personal grade for entry. */
    score: number;
    /** Computed zScore based on `average`, `standardDeviation` and `score`. */
    zScore: number;   
}
