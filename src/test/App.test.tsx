import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import '@testing-library/jest-dom/extend-expect';

import App from '../containers/App';

afterEach(cleanup);

describe('App', () => {
  it('初期はnoneが表示される', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId('result')).toHaveTextContent('none');
  });
  it.todo('「add」ボタンを押すとtodoが追加される')
});
