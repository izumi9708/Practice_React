import * as React from 'react';
import {useMemo} from 'react';

// 問題14：
// 以下の要件を満たすReactコンポーネントを作成してください。
// 要件：
// コンポーネント名は「TodoList」とします。
// プロパティとして「todos」という配列を受け取ります。各要素は「id」と「title」を持つオブジェクトとします。
// 「TodoList」コンポーネントは、「todos」配列の要素ごとに、タイトルを表示するコンポーネント「TodoItem」を描画します。
// 「TodoItem」コンポーネントは、タイトルを受け取り表示するだけのシンプルなコンポーネントとします。
// 「TodoList」コンポーネントが再レンダリングされても、「todos」配列の要素が変更されていない場合は、「TodoItem」コンポーネントの再描画をスキップします。

interface Todos {
  id:number;
  title:string
}

interface ItemProps {
  todos : Todos[]
}

const TodoItem = (item:ItemProps) => {
  const {todos} = item;

  const memoRender = useMemo(() => {
    return todos.map(val => <li key={val.id}>{val.title}</li>)
  },[item.todos])

  return (
    <div>
      {memoRender}
    </div>
  )
}

export default function TodoList(props:ItemProps){
  return (
    <div style={{marginTop:'20px'}}>
      <TodoItem todos={props.todos}/>
    </div>
  )
}
