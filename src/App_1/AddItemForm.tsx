import * as React from 'react';
import {useState} from 'react';

// 問題: ユーザーの入力を受け取り、リストに項目を追加する機能を持つReactコンポーネントを作成してください。
// 要件:
// コンポーネント名はAddItemFormとする。
// 入力フィールドと「追加」ボタンを含むフォームを表示する。
// 入力フィールドはテキストを入力するためのフィールドであり、初期状態は空とする。
// 「追加」ボタンをクリックすると、入力フィールドの値をリストに追加する。
// リストには追加された項目が表示される。
// ユーザーが新しい項目を追加するたびに、リストは更新される。
// 入力フィールドの値は追加後にクリアされる。

export default function AddItemForm(){
  const [item,setItem] = useState<string[]>([]);

  function addItem(event){
    const val = event.target.closest('div').querySelector('input');
    
   if(val !== ''){
     setItem([...item,val.value]);
    
     val.value = '';

   }else {
     alert('リストに追加する文字を入力してください');
   }

  }

  return (
    <div style={{marginTop:'20px'}}>
      {item.length > 0　&& (
        <ul>
          {item.map(val => <li>{val}</li>)}
        </ul>
      )}

      <div>
        <input type="text"/>
        <button type="button" onClick={addItem}>追加</button>
      </div>
    </div>
  )
}