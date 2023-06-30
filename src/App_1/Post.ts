interface Post {
  id:number;
  title:string;
  content:string;
  author:string;
  date:string;
  likes:number
}

const posts: Post[] = [
  {
    id: 1,
    title: "はじめに",
    content: "ブログのはじめに投稿です。",
    author: "John Doe",
    date: "2023-06-01",
    likes: 10
  },
  {
    id: 2,
    title: "Reactの使い方",
    content: "Reactコンポーネントの作成方法について紹介します。",
    author: "Jane Smith",
    date: "2023-06-05",
    likes: 15
  },
  {
    id: 3,
    title: "TypeScriptの導入",
    content: "TypeScriptを使ってブログアプリを開発しましょう。",
    author: "John Doe",
    date: "2023-06-10",
    likes: 12
  }
];

export {posts};