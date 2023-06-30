import * as React from 'react';
import { useState } from 'react';

// 問題６：
// 以下の要件に基づいて、Reactコンポーネントを作成してください。

// 要件：

// ユーザーの名前と年齢を入力するためのフォームを表示します。
// フォームに入力された情報は、ボタンをクリックすると表示されるようにします。
// 入力された情報は、コンポーネントの状態（state）で管理してください。
// ユーザー名と年齢が入力されていない場合、ボタンをクリックしても表示しないようにしてください。
// ユーザー名と年齢が入力されている場合、以下の形式で表示してください：
// "名前: [ユーザー名]、年齢: [年齢]"
// 上記の要件に基づいて、Reactコンポーネントを作成してください。必要に応じて適切なReactのフックやイベントハンドラーを使用してください。

export default function Plactice_6(){
  const [name,setName] =  useState('');
  const [age,setAge]   =  useState('');

  function displayNameAge(){
    const inputName = document.querySelector<HTMLInputElement>('.name')!;
    const inputAge = document.querySelector<HTMLInputElement>('.age')!;

    
    setName(inputName.value);
    setAge(inputAge.value);
  }

  return (
    <div style={{marginTop:'20px'}}>
      <table>
        <tbody>
          <tr>
            <td>名前</td>
            <td>年齢</td>
          </tr>
          <tr>
            <td><input type="text" className="name"/></td>
            <td><input type="text" className="age"/></td>
          </tr>
          <tr>
            <button type="button"
              onClick={displayNameAge}
            >名前と年齢を表示</button>
          </tr>
        </tbody>
      </table>

      {name && age && (
        <div className="dispaly_name_age">名前：{name}<br/>年齢：{age}</div>
      )}
    </div>
  )
}