import * as React from 'react';

// Reactのコンポーネントでpropsを受け取り、表示する関数コンポーネントを作成してください。

// 要件:

// 関数コンポーネントの名前はGreetingとします。
// Greetingコンポーネントは、nameというpropsを受け取ります。
// Greetingコンポーネントは、受け取ったnameを表示します。

type PropsObj = {
  name:string
}

export default function Greeting(props:PropsObj){
  return (
    <div style={{marginTop:'20px'}}>
      Hello {props.name}
    </div>
  )
}