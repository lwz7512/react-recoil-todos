/**
 * Created
 * @2020/07/21
 */
import React from 'react';
import { RecoilRoot } from 'recoil'
import TodoList from './components/TodoList'


// ------ Component: App
function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
