import * as React from 'react';
import TabMenu from './App_2/Tab';
import {tabs} from './App_2/tabs';
import UserList from './App_2/UserList';
import {users} from './App_2/users';

export default function App_2(){
  return (
    <>
      <TabMenu tab={tabs}/>
      <UserList users={users}/>
    </>
  )
}