

let btn=document.querySelector(".btn");
let all_btns=document.querySelector('all_btns')


btn.addEventListener("click",function(){

    let task=document.querySelector('.boxs input').value;

    let h2=document.createElement('h2');
    let div=document.createElement('div');
    let button=document.createElement('button');
    
    h2.innerHTML=task;
    button.innerHTML="Delete"
    div.setAttribute('class','box');
    button.setAttribute('class','btn btn-danger delete_btn')

    div.appendChild(h2);
    div.appendChild(button);
    document.querySelector('.task-list').appendChild(div)


    let all_btns=document.querySelectorAll('.delete_btn');

    for (let btn of all_btns) {
        btn.onclick=function(){
        this.parentElement.remove();
       }  
    }
})


let span=document.querySelector('#spn')

span.addEventListener('click',function(){

    if( document.getElementById('spn').style.color==="blue"){
        document.getElementById('spn').style.color="black"
    }else{
        document.getElementById('spn').style.color="blue"
    }



    if(document.getElementById('navalt').style.opacity==='1'){
        document.getElementById('navalt').style.opacity='0'
    }else{
        document.getElementById('navalt').style.opacity='1'
    }
})

let spa=document.querySelector('#sp')

spa.addEventListener('click',function(){
    if(document.getElementById('navalt').style.opacity==='1'){
        document.getElementById('navalt').style.opacity='0'
        document.getElementById('spn').style.color="black"
    }
   
})