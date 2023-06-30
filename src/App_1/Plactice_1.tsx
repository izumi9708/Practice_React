import * as React from 'react';

// 問題1：
// ボタンをクリックすると、カウンターの数値が1ずつ増加するシンプルなカウンターアプリを作成してください。
function Plactice_1(){
  const [count,setCount] = React.useState(0)

  function countUp():void{
    setCount(count + 1)
  }
  return (
    <div>
      <p className="counter">{count}</p>
      <button type="button"
        onClick={countUp}  
      >カウント</button>
    </div>
  );
}

export default Plactice_1;
