import React from 'react';
import useApp from 'hooks/useApp';

const App: React.FC = () => {
  const { todos, onSubmit, set_query } = useApp();

  return (
    <div>
      <h1>Todo App</h1>
      <ul data-testid="result">
        {todos && todos.size ? (
          todos.map((todo: any, index: any) => {
            return <li key={index}>{todo.get('text')}</li>
          })
        ) : (
          <p>none</p>
        )}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => set_query(e.target.value)}
          aria-label="input"
        />
        <button>
          add
        </button>
      </form>
    </div>
  )
};

export default App
