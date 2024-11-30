import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BiocGradeCalculator from './bioc-grade-calculator';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BiocGradeCalculator />
    </StrictMode>,
);
