export interface GradeState {
    /** Grade table. */
    gradeTableRows: GradeTableRow[];
}

export interface GradeTableRow {
    /** Unique ID for table row. */
    id: string | number;
    /** Name for entry. */
    name: string;
    /** Average of all scores for entry. */
    average: number;
    /** Standard deviation of all scores for entry. */
    standardDeviation: number;
    /** User's personal grade for entry. */
    score: number;
}
