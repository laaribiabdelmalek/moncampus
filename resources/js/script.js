
//mip info
const li1=document.getElementById("li1");
const li2=document.getElementById("li2");

const ul1=document.getElementById("ul1");
const ul2=document.getElementById("ul2");

const mip=document.getElementById("mip");
const info=document.getElementById("info");

//defaulte
ul1.style.display="none";
ul2.style.display="none";

//change default
li1.onmouseover=function change1(){
    ul1.style.display="block";
}
li1.onmouseout=function change1(){
    ul1.style.display="none";
}


li2.onmouseover=function change2(){
    ul2.style.display="block";
}
li2.onmouseout=function change2(){
    ul2.style.display="none";
}


//darck mode
//const body=document.body;
const header=document.querySelector('header');
const botton=document.getElementById("button");
const svg1=document.getElementById("svg1");
const svg2=document.getElementById("svg2");

if(localStorage.getItem("darckmode")==1){
       header.classList.add("darck_mode");
        svg1.classList.remove("white");
        svg2.classList.add("darck");
}else{
        svg1.classList.add("white");
        svg2.classList.remove("darck");
        
}
console.log(header);


botton.onclick=function darck_mode(){

    if(localStorage.getItem("darckmode")==0){

        header.classList.add("darck_mode");

         svg1.classList.remove("white");
         svg2.classList.add("darck");

         localStorage.setItem("darckmode","1");

        header.style.transition="1.5s";
     }
         
    else{
        header.classList.remove("darck_mode");

         svg1.classList.add("white");
         svg2.classList.remove("darck");

         localStorage.setItem("darckmode","0");
         
        header.style.transition="1.5s";
     }

}


//ton ver top
const main=document.getElementById("main");
const btn=document.getElementById("btn");

console.log(main);
console.log(btn);

window.onscroll=function(){
    if(document.documentElement.scrollTop>200 ){
        btn.style.display="block";
    }
    else{
        btn.style.display="none";
    }
}

btn.onclick =function(){
    window.scrollTo({top:0,behavior:"smooth"});
}