import * as React from 'react';
import Plactice_1 from './Plactice_1';
import Plactice_2 from './App_1/Plactice_2';
import Plactice_3 from './App_1/Plactice_3';
import Plactice_4 from './App_1/Plactice_4';
// import Plactice_5 from './Plactice_5';
import Plactice_6 from './Plactice_6';
import Greeting from './App_1/Greeting';
import ToggleSwitch from './App_1/ToggleSwitch';
import AddItemForm from './App_1/AddItemForm';
import Counter from './Counter';
import Login from './App_1/LoginForm';
import UserList from './UserList';
import {users} from './Users';
import TodoList from './TodoList';
import {todos} from './todos';
import ColorPicker from './App_1/ColorPicker';
import PostList from './PostList';
import {posts} from './Post';
import './style.css';


export default function App_1(){
  return (
    <>
      <Plactice_1/>
      <Plactice_2/>
      <Plactice_3/>
      <Plactice_4/>
      {/* <Plactice_5/> */}
      <Plactice_6/>
      <Greeting name="John"/>
      <ToggleSwitch/>
      <AddItemForm/>
      <Counter/>
      <Login/>
      <UserList users={users}/>
      <TodoList todos={todos}/>
      <ColorPicker/>
      <PostList post={posts}/>
    </>
  )
}