import * as React from 'react';

// 問題2：
// ユーザーが入力したテキストを表示するフォームを作成してください。フォームに入力されたテキストは、ボタンをクリックすると表示されるようにしてください。

export default function Plactice_2(){
  const [name,setName] = React.useState('');

  const getName = (event) => {
    const val = event.target.closest('div').querySelector('input').value;

    setName(val);
  }

  return (
    <div style={{marginTop:'30px'}}>
      <div>{name}</div>
      <div key="input"><input type="text"/></div>
      <button type="button" onClick={getName}>名前を表示</button>
    </div>
  )
}