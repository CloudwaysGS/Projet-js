let body=document.querySelector("body")
let toggle1=document.querySelector("#toggle1");
let nested1=document.querySelector("#nested1");
let nested2=document.querySelector("#nested2");
let toggle2=document.querySelector("#toggle2");
let nested3=document.querySelector("#nested3");
let nested4=document.querySelector("#nested4");
let nested5=document.querySelector("#nested5");
let nested6=document.querySelector("#nested6");
let arrow1 = document.querySelector("#arrow1");
let arrow2 = document.querySelector("#arrow2");
 
let navigation = document.querySelector('.navigation');
 console.log(navigation);
 let toggle = document.querySelector('.toggle');
 console.log(toggle);


toggle.addEventListener('click', function(){
   
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');

})

toggle1.addEventListener('click', ()=>{
if(nested1.style.display == "block" || nested2.style.display == "block"){
nested1.style.display = "none";
nested2.style.display = "none";
arrow1.style.transform = "rotate(0deg)";
arrow1.style.color="#fff";
arrow1.style.textShadow = "none";
}
else{
nested1.style.display = "block";
nested2.style.display = "block";
arrow1.style.transform = "rotate(-90deg)";
arrow1.style.color="#12fff1";
arrow1.style.textShadow = "0 0 5px #12fff1"; 
}
})
toggle2.addEventListener('click', ()=>{
if(nested3.style.display == "block" || nested4.style.display == "block" || nested5.style.display == "block" || nested6.style.display == "block"){
nested3.style.display = "none";
nested4.style.display = "none";
nested5.style.display = "none";
nested6.style.display = "none";
arrow2.style.transform = "rotate(0deg)";
arrow2.style.color="#fff";
arrow2.style.textShadow = "none";
}
else{
nested3.style.display = "block";
nested4.style.display = "block";
nested5.style.display = "block";
nested6.style.display = "block";
arrow2.style.transform = "rotate(-90deg)";
arrow2.style.color="#12fff1";
arrow2.style.textShadow = "0 0 5px #12fff1"; 
}
})


 
    
