// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let c=document.querySelector('p#result');

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu+=1;
  let a=document.querySelector('span#kaisu');
  a.textContent=kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  let seikai=0;
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  let b=document.querySelector('input[name="num"]');
  yoso=b.value;
  let i2=document.querySelector('span#yoso2');
  i2.textContent=yoso;

  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if(kaisu>=4||seikai>=1){
    c.textContent="答えは" +kotae+ "でした．すでにゲームは終わっています";
  }else if(kotae==yoso){
    c.textContent=("正解です．おめでとう!");
    seikai++;
  }else {
    if(kaisu==3){
      c.textContent=("まちがい．残念でした答えは"+kotae+"です．");
    }else if(yoso<kotae){
      c.textContent=("まちがい．答えはもっと大きいですよ");
    }else if(yoso>kotae){
      c.textContent=("まちがい．答えはもっと小さいですよ");
    }
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
p = document.querySelector('button#answer'); 
p.addEventListener('click', hantei); 
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
