//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function print() {
	let l = document.createElement('p'); 
	l.textContent = campus.address; 
	let p = document.querySelector('h2#addr');
	p.insertAdjacentElement('afterend',l);

	let b = document.createElement('ul'); 
	let c = document.querySelector('h2#dept'); 
	c.insertAdjacentElement('afterend',b);
	for(let ns of gakka){
    a = document.createElement('li');
    a.textContent = ns.name;
    b.insertAdjacentElement('beforeend',a);
	} 

}
b = document.querySelector('button#show'); 
b.addEventListener('click',print ); 


/*let l = document.createElement('div#result');
  let p = document.querySelector('body');
  p.insertAdjacentElement('beforeend',l);

  let i=1;
  for(let n of data.results.shop){
    div = document.querySelector('div#result');
    l.textContent = "検索結果"+i+"件目";
    div.insertAdjacentElement('beforeend',l);

    p= document.querySelector('beforeend',l);
    l.textContent = "店名:"+n.name;
    p.insertAdjacentElement('beforeend',l);

    p = document.querySelector('div#result');
    l.textContent = "アクセス:"+n.access;
    p.insertAdjacentElement('beforeend',l);

    p = document.querySelector('div#result');
    l.textContent = "住所:"+n.address;
    p.insertAdjacentElement('beforeend',l);

    p = document.querySelector('div#result');
    l.textContent = "予算:"+n.budget.name;
    p.insertAdjacentElement('beforeend',l);

    p = document.querySelector('div#result');
    l.textContent = "キャッチコピー"+n.catch;
    p.insertAdjacentElement('beforeend',l);

    p = document.querySelector('div#result');
    l.textContent = "ジャンル"+n.genre.name;
    p.insertAdjacentElement('beforeend',l);

    p = document.querySelector('div#result');
    l.textContent = "営業時間:"+n.open;
    p.insertAdjacentElement('beforeend',l);

    p = document.querySelector('div#result');
    l.textContent = "最寄駅:"+n.station_name;
    p.insertAdjacentElement('beforeend',l);

    p = document.querySelector('div#result');
    l.textContent ="サブジャンル:"+n.sub_genre.name;
    p.insertAdjacentElement('beforeend',l);

    i=i+1;
  }
    */