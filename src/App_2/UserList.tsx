import * as React from 'react';

// 問題：
// Reactコンポーネントを作成してください。以下の要件を満たすようにコンポーネントを実装してください。
// 要件：
// コンポーネント名は「UserList」とします。
// プロパティとして「users」という配列を受け取ります。各要素は「id」と「name」を持つオブジェクトとします。
// 「UserList」コンポーネントは、「users」配列の要素ごとにユーザーの情報を表示します。
// ユーザーの情報は、<div> 要素内に表示し、それぞれのユーザーに対してはユニークな id を持つ要素を作成します。
// ユーザー情報の表示形式は任意ですが、少なくともユーザーの名前が表示されるようにしてください。
// ユーザー情報をクリックすると、クリックされたユーザーの情報（idとname）がコンソールに表示されるようにしてください。
// 注意点：
// 各ユーザーの情報を表示するために、ループ処理を使用してください。
// ユーザー情報をクリックしたときのイベントハンドラーも作成してください。

type Props = {
  users:{
    id:number;
    name:string
  }[]
}
export default function UserList(props:Props){
  function getUserInfo(id,name){
    console.log('id:',id,'name:',name);
  }

  return (
    <div style={{display:'flex',width:'100%',marginTop:'20px'}}>
      {props.users.map(val => 
        <div
          style={{
            border:'solid 1px #3c3c3c',
            width:'100%',
            padding:'5px'
          }}
          onClick={() => getUserInfo(val.id,val.name)}
        >{val.name}</div>
      )}
    </div>
  )
}