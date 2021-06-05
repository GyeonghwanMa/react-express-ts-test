import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // };
  // const onSubmit = (form: {name: string; description: string}) => {
  //   console.log(form);
  // }
  // return <Greetings name="Hello" onClick={onClick} />;
  // return <Counter></Counter>
  // return <MyForm onSubmit={onSubmit}></MyForm>
  // return <ReducerSample></ReducerSample>
  return (
    <>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </>
  )
};

export default App;
