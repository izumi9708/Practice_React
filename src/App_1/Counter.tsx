import * as React from 'react';
import { useState } from 'react';
// 要件:
// コンポーネント名はCounterとする。
// 初期値としてカウンターの値を0とする。
// カウンターの値を表示する。
// 「+1」ボタンと「-1」ボタンを持つ。
// 「+1」ボタンをクリックすると、カウンターの値が1増える。
// 「-1」ボタンをクリックすると、カウンターの値が1減る。

export default function Counter(){
  const [count,setCount] = useState<number>(0);

  function countClick(symbol){
    symbol === 'プラス'　? setCount(count + 1) : setCount(count - 1);
  }

  return (
    <div style={{marginTop:'20px'}}>
      <div>{count}</div>
      <button type="button" onClick={() => countClick('プラス')}>＋1</button>
      <button type="button" onClick={() => countClick('マイナス')}>ー1</button>
    </div>
  )
}