document.addEventListener('DOMContentLoaded',()=>{
    let title = document.createElement('h1');
    title.textContent = "Welcome !"
    document.body.appendChild(title);
    generatediv1();
    generatediv2();
 
 })
 
 
 
 
 
 
 
 function generatediv1(){
     let div1 = document.createElement('div');
     div1.style.backgroundColor = "black";
     div1.style.width = "100px";
     document.body.appendChild(div1);
 }
 function generatediv2(){
     let div2 = document.createElement('div');
     div2.style.backgroundColor = "red";
     div2.style.width = "100px";
     document.body.appendChild(div2);
 }
 
 
 
 
 
 
 
 
 
 
 
 
 