import * as React from 'react';

// 問題３：
// Reactのイベント処理を使用して、ボタンをクリックしたときにメッセージを表示するアラートコンポーネントを作成してください。

export default function Plactice_4(){
    const displayMsg = (event) => {
      const val = event.target.closest('div').querySelector('input').value;

      alert(val);
    }

    return (
      <div style={{marginTop:'30px'}}>
        <div></div>
        <div key="input"><input type="text"/></div>
        <button type="button" onClick={displayMsg}>メッセージ</button>
      </div>
    )
}