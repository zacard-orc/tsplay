import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  /** om 3333nozzber' */
  children?: ReactChild;
  label?: string
}


// console.log(BtnX)

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const RxInput: FC<Props> = ({ label='Nice' }) => {
  return <input>{label}</input>;
};


