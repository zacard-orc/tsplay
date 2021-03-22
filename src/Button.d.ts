import { FC, HTMLAttributes, ReactChild } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
    /** om 3333nozzber' */
    children?: ReactChild;
    label?: string;
}
/**
 * A custom Thing component. Neat!
 */
export declare const Thing: FC<Props>;
