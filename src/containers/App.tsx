import React from 'react';
import useApp from '../hooks/useApp';

const App: React.FC = () => {
  const { todos, Actions } = useApp();

  return (
    <ul>
      <div data-testid="result">
        {todos && todos.size ? (
          todos.map((todo: any, index: any) => {
            return <li key={index}>{todo.get('title')}</li>
          })
        ) : (
          <p>none</p>
        )}
      </div>
      <button onClick={() => Actions.add({ title: 'test' })}>
        add
      </button>
    </ul>
  )
};

export default App
