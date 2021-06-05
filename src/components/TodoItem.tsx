import React from 'react';
import './TodoItem.css';

export type TodoItemProps = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
}

export default function TodoItem({ todo }: TodoItemProps) {
    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text">{todo.text}</span>
            <span className="remove">(X)</span>
        </li>
    );
}
