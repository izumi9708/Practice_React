import * as React from 'react';
import Plactice_1 from './Plactice_1';
import Plactice_2 from './Plactice_2';
import Plactice_3 from './Plactice_3';
import Plactice_4 from './Plactice_4';
// import Plactice_5 from './Plactice_5';
import Plactice_6 from './Plactice_6';
import Greeting from './Greeting';
import ToggleSwitch from './ToggleSwitch';
import AddItemForm from './AddItemForm';
import Counter from './Counter';
import Login from './LoginForm';
import UserList from './UserList';
import {users} from './Users';
import Router from './Router';
import './style.css';


export default function App() {
  return (
    <React.Fragment>
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
      <Router/>
    </React.Fragment>
  )
}
