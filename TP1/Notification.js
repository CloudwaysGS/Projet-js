const notif = document.getElementById("Notification-area")
var btn = document.querySelectorAll("button")
const tab =['SUCCESS','DANGER','WARNING','INFO']
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click', function(e){
        
        creer(e.target.classList[0],tab[i])

    }); 
}
function creer(changecolor,message){
    var area = document.createElement('div')
    area.classList.add(changecolor)
    var p = document.createElement('p')
    p.innerHTML=message
    area.appendChild(p)
    notif.appendChild(area)
    setTimeout(() => { 
        notif.removeChild(area)
    }, 4000)
}





















































// btn[i].addEventListener('click', function(){
        
    //     const area = document.createElement('div')
    // const p = document.createElement('p')  
    // p.innerHTML='Mon Projet 4';  
    // area.className="Notification","success"
    // area.appendChild(p)
    // notif.appendChild(area)
    // });