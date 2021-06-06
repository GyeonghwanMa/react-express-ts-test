import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodosContextProvider } from './contexts/TodosContext';
import CounterContainer from './containers/CounterContainer';
import TodoInsert from './components/TodoInsert';


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
    // <TodosContextProvider>
    //   <TodoForm></TodoForm>
    //   <TodoList></TodoList>
    // </TodosContextProvider>
    // <CounterContainer></CounterContainer>
    // <Counter></Counter>
    <>
      <TodoInsert></TodoInsert>
      <TodoList></TodoList>
    </>
  )
};

export default App;
