// import React from 'react';
// import './TodoItem.css';
// import { useTodosDispatch, Todo } from '../contexts/TodosContext';

// export type TodoItemProps = {
//     todo: {
//         id: number;
//         text: string;
//         done: boolean;
//     };
// }

// export default function TodoItem({ todo }: TodoItemProps) {
//     const dispatch = useTodosDispatch();

//     const onToggle = () => {
//         dispatch({
//           type: 'TOGGLE',
//           id: todo.id
//         });
//       };
    
//       const onRemove = () => {
//         dispatch({
//           type: 'REMOVE',
//           id: todo.id
//         });
//       };
//     return (
//         <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
//             <span className="text" onClick={onToggle}>{todo.text}</span>
//             <span className="remove" onClick={onRemove}>(X)</span>
//         </li>
//     );
// }

// 리덕스 모듈만들기
import React from 'react';
import './TodoItem.css';
import {Todo} from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;