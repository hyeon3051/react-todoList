import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/todoHead';
import TodoList from './TodoList';

const Globalstyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

function App() {
  return (
    <>
    <Globalstyle/>
    <TodoTemplate>
    <TodoHead/>
    <TodoList/>
    </TodoTemplate>
    </>
  );
}

export default App;
