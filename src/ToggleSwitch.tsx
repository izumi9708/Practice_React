import * as React from 'react';
import {useState} from 'react';

// 以下の要件を満たすReactコンポーネントを作成してください。

// コンポーネント名はToggleSwitchとする。
// コンポーネントはオンとオフの状態を持つトグルスイッチとして機能する。
// 初期状態ではスイッチはオフの状態とする。
// スイッチの状態に応じて表示するメッセージがあり、オンの場合は「スイッチ ON」と表示し、オフの場合は「スイッチ OFF」と表示する。
// スイッチをクリックすると、スイッチの状態がトグルされる（オン→オフ、オフ→オン）。
// スイッチの状態とメッセージはコンポーネント内で管理する。
 
export default function ToggleSwitch(){
  const [toggleState,setState] = useState<boolean>(false);

  function changeToggle(){
    setState(!toggleState);
  }

  return (
    <div style={{marginTop:'20px'}}>
      <p>{toggleState ? 'スイッチON' : 'スイッチOFF'}</p>
      <button onClick={changeToggle} type="button">トグル</button>
    </div>
  )
}