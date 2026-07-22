   
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let i=1;
  for(let n of data.results.shop){
    console.log("検索結果"+i+"件目");
    console.log("店名:"+n.name);
    console.log("アクセス:"+n.access);
    console.log("住所:"+n.address);
    console.log("予算:"+n.budget.name);
    console.log("キャッチコピー"+n.catch);
    console.log("ジャンル"+n.genre.name);
    console.log("営業時間:"+n.open);
    console.log("最寄駅:"+n.station_name);
    console.log("サブジャンル:"+n.sub_genre.name);
    i=i+1;
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  //let z = document.querySelector('tbody#s');     // 削除したい要素を検索
  //z.innerHTML = '';  

  let x = document.createElement('div');
  x.setAttribute('id','result');
  let y = document.querySelector('body');
  y.insertAdjacentElement('beforeend',x);
  let z = document.querySelector('tbody#s');
  
  

  
  let i = 0;
  for(let x of data.results.shop){
    let h =[x.name,x.access,x.address,x.budget.name,x.catch,x.genre.name,x.open,x.station_name,x.sub_genre.name];
    


    let tr = document.createElement('tr');
    
    //console.log(z);
    
    z.insertAdjacentElement('beforeend',tr);
    

    
    //let td = [];
    
    for(let k = 0; k < h.length; k++){
      let td = document.createElement('td');
      td.textContent = h[k];
      tr.insertAdjacentElement('beforeend', td);
      
    }

  }
  
}




// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('button#search');
b.addEventListener('click',sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let z = document.querySelector('tbody#s');

  
  while(z.firstChild){
    z.firstChild.remove();
  }
  let genre = document.querySelector('#genre').value; //G001-H017
  let budget = document.querySelector('#budget').value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';
  
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

  
  let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }


  let budget = document.querySelector('#budget').value;

  if(budget !== "all"){
    data.results.shop =
      data.results.shop.filter(
        shop => shop.budget.name === budget
    );
  }

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること


