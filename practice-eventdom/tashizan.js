function calculate() {
        x=document.querySelector('input[name="left"]'); 
        y=document.querySelector('input[name="right"]'); 
        let s=Number(x.value); 
        let t=Number(y.value); 
        let p=document.querySelector('span#answer');
        p.textContent=s+t;
}
b = document.querySelector('button#calc'); 
b.addEventListener('click', calculate); 