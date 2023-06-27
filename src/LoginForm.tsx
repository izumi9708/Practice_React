import * as React from 'react';
import { useState } from 'react';

// 問題９：
// 以下の要件を満たすReactコンポーネントを作成してください。
// 要件：
// コンポーネント名はLoginFormとする。
// ユーザー名とパスワードの入力フィールド、および「ログイン」ボタンを表示する。
// 入力フィールドは初期状態では空とする。
// 「ログイン」ボタンをクリックすると、入力されたユーザー名とパスワードを取得し、コンソールに表示する。
// 入力フィールドの値はログインボタンをクリックした後にクリアされる。
// なお、実際のログイン機能は実装する必要はありません。ユーザー名とパスワードがコンソールに表示されるだけで構いません。

export default function LoginForm(){
  function getIdPass(event){
    const id = event.target.closest('div').querySelector('input[name="id"]').value;
    const pass = event.target.closest('div').querySelector('input[name="pass"]').value;

    console.log('id:',id);
    console.log('pass:',pass)
  }
  return (
    <div style={{marginTop:'20px'}}>
      <div>ID:<input name="id" type="text"/></div>
      <div>PASS:<input name="pass" type="text"/></div>
      <button type="button" onClick={getIdPass}>ログイン</button>
    </div>
  )
}