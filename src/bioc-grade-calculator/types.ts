export interface GradeState {
    /** Grade table. */
    gradeTableRows: GradeTableRow[];
    /** Fixed grade variables that impact final calculation. */
    fixedGradeVariables: FixedGradeVariables
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

export interface FixedGradeVariables {
    /**
     * Sum of the final normalized mean for all students divided by the number
     * of students.
     */
    finalNormalizedMean: number;
    /** GPA? */
    gpa: number;
    /** Cutoff for a 4.0. */
    cutoff: number;
}
