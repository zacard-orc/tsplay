import * as React from 'react'
import * as ReactDOM from 'react-dom';
// @ts-ignore
import { Default as RxButton } from "../stories/Button.stories";

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RxButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
