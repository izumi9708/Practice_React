import * as React from 'react';
import {useMemo} from 'react';
import './post-like.css';

// 問題:
// あなたはブログアプリケーションを開発しています。以下の要件に基づいて、ReactコンポーネントとTypeScriptの型指定を行ってください。
// 要件:
// Postという型があります。Postは以下のプロパティを持ちます。
// id (数値型): ポストの一意のID
// title (文字列型): ポストのタイトル
// content (文字列型): ポストの内容
// author (文字列型): ポストの著者名
// date (文字列型): ポストの作成日時（日付文字列）
// likes (数値型): ポストへのいいね数
// PostListというReactコンポーネントを作成してください。PostListは以下のプロパティを受け取ります。
// posts (配列): Post型の配列で、デフォルト値は空の配列です。
// PostListコンポーネントは、postsをマップして各ポストの情報を表示します。表示する情報は以下のようにしてください。
// ポストのタイトル
// ポストの著者名
// ポストの作成日時
// ポストへのいいね数
// 各ポスト情報は、<div>要素または適切なセマンティックな要素を使用して表示してください。
// 上記の要件に基づいて、Post型、PostListコンポーネントの作成、およびTypeScriptの型指定を行ってください。

interface Post {
  id:number;
  title:string;
  content:string;
  author:string;
  date:string;
  likes:number
}

type Props = {
  post:Post[]
}

export default function PostList(props:Props){
  const renderMemo = useMemo(() => {
    return props.post.map(val => {
      return (
        <div className="blog-item" key={val.id}>
          <h1>{val.title}</h1>
          <p className="date">{val.date}</p>
          <div>{val.content}</div>
          <div className="blog-foot">
            <div className="like">❤︎<span>{val.likes}</span></div>
            <p>{val.author}</p>
          </div>
        </div>
      )
    })
  },[props.post])

  return (
    <div style={{marginTop:'20px'}}>
      {renderMemo}
    </div>
  )
}