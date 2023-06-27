import * as React from 'react';
import { useState , useMemo } from 'react';

// 問題１０：
// ReactのMemoを使用したパフォーマンス最適化についての理解を確認するための問題です。
// 以下の要件を満たすReactコンポーネントを作成してください。
// 要件：
// コンポーネント名は「UserList」とする。
// プロパティとして「users」という配列を受け取る（例：users={[{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]}）。
// 「users」配列の要素ごとに、ユーザーの情報を表示するコンポーネント「User」を描画する。
// 「User」コンポーネントは、ユーザーの名前を表示するだけのシンプルなコンポーネントとする。
// 「User」コンポーネントは、メモ化されたコンポーネントとして実装する。
// 「UserList」コンポーネントが再レンダリングされても、ユーザーの情報が変更されていない場合は、「User」コンポーネントの再描画をスキップする。

interface Users {
  id:number;
  name:string;
}
type PropsObj = {
  users:Users[]
}
export default function UserList(props:PropsObj){
  
  const memoList = useMemo((): React.JSX.Element[] =>  {
    return props.users.map(val => <div>{val.name}</div>)
  },props.users)
  
  return (
    <div>
      {memoList}
    </div>
  )
}