import * as React from 'react';
import './color-picker.css';

// 問題15：
// 以下の要件を満たすReactコンポーネントを作成してください。
// 要件：
// コンポーネント名は「ColorPicker」とします。
// 初期値として「red」を選択状態とします。
// カラーピッカーとして、赤（red）、青（blue）、緑（green）の3つの色を選択できるボタンを表示します。
// 選択された色は表示されるテキストの背景色として反映されます。
// ボタンは選択されている色に対してアクティブなスタイル（例：ボーダーが表示される）を持ちます。
// ボタンをクリックすると、選択された色が反映されます。

export default function ColorPicker(){

  function selectedColor(event:React.MouseEvent<HTMLButtonElement>):void{
    const target = event.target as HTMLButtonElement;
    const bg:HTMLElement = document.querySelector('.picker-bg');
    const btns = document.querySelectorAll('.color-btn');

    btns.forEach(val => {
      if(val.classList.contains('active'))val.classList.remove('active');
    })

    if(target.classList.contains('red')){
      bg.style.backgroundColor = 'red';
      target.classList.add('active');

    }else if(target.classList.contains('blue')){
      bg.style.backgroundColor = 'blue';
      target.classList.add('active');

    }else {
      bg.style.backgroundColor = 'green';
      target.classList.add('active');
    }
  }

  return (
    <div style={{marginTop:'20px'}}>
      <div className="picker-bg">Color Picker</div>
      <div>
        <button type="button" onClick={selectedColor} className="color-btn red">赤(red)</button>
        <button type="button" onClick={selectedColor} className="color-btn blue">青(blue)</button>
        <button type="button" onClick={selectedColor} className="color-btn green">緑(green)</button>
      </div>
    </div>
  )
}
