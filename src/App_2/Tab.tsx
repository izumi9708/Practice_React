import * as React from 'react';
import './tab.css';

// 問題16：
// 以下の要件を満たすReactコンポーネントを作成してください。
// 要件：
// コンポーネント名は「TabMenu」とします。
// プロパティとして「tabs」という配列を受け取ります。各要素は「id」と「label」を持つオブジェクトとします。
// 「TabMenu」コンポーネントは、渡された「tabs」配列の要素数に応じて、タブメニューを表示します。
// 各タブはラベルを持ち、クリック可能なボタンとして表示されます。
// 初期状態では、最初のタブがアクティブな状態となります。
// ユーザーがタブをクリックすると、選択されたタブがアクティブになり、その情報をコンソールに表示します。

type Props = {
  tab : Tabs[]
}

interface Tabs {
  id:number;
  label:string;
}
export default function TabMenu(props:Props){
  function clickMenu(event,id,label){
    const btns = document.querySelectorAll('label');
    
    btns.forEach(val => val.classList.remove('active'));
  
    event.target.classList.add('active');
    console.log(id,label)
  }

  React.useEffect(() => {
    const btns = document.querySelectorAll('label');
    btns[0].classList.add('active');
  },[])
  
  return (
    <div style={{marginTop:'20px',width:'100%',display:'flex'}}>
      {props.tab.map(val => {
        return (
          <label
            key={val.id}
            style={{
              border:'solid 1px rgb(196, 196, 196)',
              padding:'10px',
              dispaly:'block',
              width:'100%',
              cursor:'pointer'
            }}
            id={String(val.id)}
            onClick={(e)=>clickMenu(e,val.id,val.label)}
          >
             {val.label}
          </label>
        )
      })}
    </div>
  )
}