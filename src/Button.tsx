import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styled from '@emotion/styled'

export interface Props extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  /** om bbbbb' */
  children?: ReactChild;
  label?: string
}

const BtnX = styled.button`
  height: 24px;
  line-height: 14px;
  box-sizing: border-box;
  background-color: hotpink;
  font-size: 14px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  transition: box-shadow 0.2s;
  box-shadow: 0 0 0px 0px #ffffff;
  outline: none;
  border: 2px solid hotpink;
  &:active {
    color: white;
    border: 2px solid red;
    box-shadow: 0 0 6px 1px hotpink;
  }
`

// console.log(BtnX)

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const RxButton: FC<Props> = ({ label='Nice' }) => {
  return <BtnX>{label}</BtnX>;
};


